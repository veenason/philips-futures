(() => {
  const sessionKey = "philips-care-futures-access";
  const expectedHash = "238d476999e8d7ae1fb2085a49bdb059ff4d2dd63939838e44461be706f3af38";
  const root = document.documentElement;

  root.classList.add("password-gate-pending");

  try {
    if (sessionStorage.getItem(sessionKey) === "granted") {
      root.classList.remove("password-gate-pending");
      return;
    }
  } catch (_) {
    // The gate still works when storage is unavailable; access simply is not remembered.
  }

  const showGate = () => {
    const gate = document.createElement("div");
    gate.className = "password-gate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "password-gate-title");
    gate.innerHTML = `
      <div class="password-gate__panel">
        <p class="password-gate__brand">PHILIPS <span>CARE FUTURES</span></p>
        <p class="password-gate__eyebrow">Private preview</p>
        <h1 id="password-gate-title">Enter the study.</h1>
        <p class="password-gate__intro">This exploratory futures atlas is password protected.</p>
        <form class="password-gate__form" novalidate>
          <label for="password-gate-input">Password</label>
          <div class="password-gate__field">
            <input id="password-gate-input" name="password" type="password" autocomplete="current-password" required>
            <button type="submit">Continue</button>
          </div>
          <p class="password-gate__error" role="alert" aria-live="polite"></p>
        </form>
      </div>`;

    document.body.append(gate);
    root.classList.remove("password-gate-pending");

    const form = gate.querySelector("form");
    const input = gate.querySelector("input");
    const error = gate.querySelector(".password-gate__error");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const bytes = new TextEncoder().encode(input.value);
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      const passwordHash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");

      if (passwordHash === expectedHash) {
        try {
          sessionStorage.setItem(sessionKey, "granted");
        } catch (_) {
          // Continue for this page even if storage is blocked.
        }
        gate.remove();
        return;
      }

      input.value = "";
      input.setAttribute("aria-invalid", "true");
      error.textContent = "That password is not correct. Please try again.";
      input.focus();
    });

    input.addEventListener("input", () => {
      input.removeAttribute("aria-invalid");
      error.textContent = "";
    });

    input.focus();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGate, { once: true });
  } else {
    showGate();
  }
})();
