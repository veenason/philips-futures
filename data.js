window.CARE_FUTURES = {
  sources: [
    { label: "Primary trend source", values: ["WGSN", "Trendstop", "Peclers Paris"] },
    { label: "Consumer technology", values: ["WGSN Consumer Tech", "Stylus", "Fjord Trends (Accenture)"] },
    { label: "Usability & interaction", values: ["Nielsen Norman Group (NN/g)", "Gartner"] },
    { label: "Strategic design futures", values: ["NellyRodi", "IDEO", "Frog", "R/GA"] },
    { label: "UI component & system trends", values: ["Panton / Coloro", "Mobbin", "BuiltforMars", "Design Systems Repo", "mui Lab"] },
    { label: "2026 societal & experience signals", values: ["Futurescape 2026: Artificial Realities", "Accenture Life Trends 2026"] },
    { label: "Philips capability anchors", values: ["Clinical monitoring", "Patient-worn sensing", "Ambient experience", "Connected health platforms", "Biosensing"] }
  ],
  themes: {
    "handcrafted-care": {
      title: "Handcrafted Care", casting: "Probable", horizon: "Now → 2028", score: "82", tone: "craft",
      kicker: "Calm material interface · human ritual", persona: "The Keepers",
      description: "Care earns trust when its intelligence lives quietly in the objects and rituals people already know.",
      mandate: "Let the grain become the interface. Make care present, tactile and quiet.",
      ui: "Wood-integrated touch, one-glance light cues, deliberate disclosure.",
      headline: "Take the fear out of being unwell. A room that feels like home, with care resting quietly in the furniture when it is needed.",
      horizonNote: "Capacitive wood surfaces, embedded micro-light and calm device orchestration already exist. The next product cycle can turn a familiar bedframe or bedside rail into a humane care touchpoint.",
      concept: "For people recovering at home or in long-term care, clinical apparatus can become the loudest reminder that something is wrong. Handcrafted Care takes cues from calm, wood-integrated interfaces: the furniture remains the primary object, while the digital layer appears only in a small touch, a warm glow or a single relevant cue.",
      practice: "Vitals surface softly through the grain of an oak bedframe. A finger rests on a familiar edge to acknowledge a reminder; a warm line of light confirms the action. Nothing beeps. Nothing blinks red. The room stays recognisably theirs.",
      values: [["Feels like", "A familiar object that listens"], ["Removes", "Clinical anxiety and screen fatigue"], ["Gives", "Dignity and quiet reassurance"], ["For", "Home recovery and elder care"], ["Tone", "Warm, tactile, deliberate"]],
      lens: [
        ["Society is changing", "Stability, everyday rituals and tactile reassurance are becoming anchors in an exhausting, fast-moving world."],
        ["UX shift", "Move from screen-first monitoring to embodied, low-cognitive-load interactions that respect attention."],
        ["Interface move", "Use wood-integrated touch, a single warm light state and a deliberate press-and-hold acknowledgement."],
        ["Guardrail", "Never disguise sensing: show its state, make it physically interruptible and keep care data out of shared view by default."]
      ],
      evidence: ["Accenture Life Trends 2026 · Stability premium", "Futurescape 2026 · AI handles with care"],
      interfaceEvolution: ["Tactile · ambient · low-attention", "The interface stays dormant until relevance is high, then appears through one glanceable state, a deliberate touch and a quiet confirmation.", "Filament evolves from screen components into calm-state tokens: restrained light, progressive disclosure, tactile acknowledgement and a persistent privacy state."],
      images: ["00-shared-wooden-vitals-bed", "01-linen-vitals", "02-knitted-temperature", "03-handdrawn-apps", "04-ceramic-taps", "05-rattan-interface", "06-upholstered-eink", "07-embroidered-alerts", "08-haptic-velvet", "09-heirloom-dial"],
      signalLabels: {
        "01-linen-vitals": "Information becomes material",
        "02-knitted-temperature": "Materials become responsive",
        "03-handdrawn-apps": "Apps become hand drawn"
      },
      interfaceExamples: [
        { shift: "Surface shift", title: "Information becomes material", summary: "Vitals appear through wood, fabric, ceramic or glass only when attention is needed.", implication: "Use low-resolution type, warm micro-light and a strict one-glance hierarchy.", tokens: ["Surface-native", "Low-lux", "Glanceable"], demo: "material-vitals-strip", demoAlt: "Patient vital signs integrated into an architectural wall surface" },
        { shift: "Interaction shift", title: "Touch becomes intentional", summary: "Press, hold, trace or grip replaces rapid tapping. Quiet light confirms intent.", implication: "Define tactile states for resting, sensing, attention, acknowledged and private.", tokens: ["Deliberate", "Tactile", "Quiet feedback"], demo: "tactile-gesture-sequence", demoAlt: "A deliberate circular touch control integrated into a wooden bedside surface" },
        { shift: "Design-language shift", title: "Calm states become tokens", summary: "The same calm states work across physical surfaces and conventional screens.", implication: "Extend Filament tokens beyond pixels to brightness, duration, texture and force.", tokens: ["Consistent", "Cross-surface", "Privacy-aware"], demo: "calm-state-token-band", demoAlt: "A luminous wearable expressing a calm interface state through restrained light" }
      ],
      base: "visual-library/handcrafted-care/",
      storyboardBase: "storyboards/handcrafted-care/",
      scenarios: [
        { image: "01-setup", title: "The bedroom, not a ward", caption: "Recovery begins in a space that still feels like the person’s own room." },
        { image: "02-action", title: "Care becomes ambient", caption: "The bedframe notices change without turning the room into a collection of devices." },
        { image: "03-result", title: "A signal for the right person", caption: "Vitals surface as a quiet material cue only when a caregiver needs to see them." },
        { image: "04-impact", title: "Family stays family", caption: "The technology recedes, leaving people room to be together rather than manage equipment." }
      ]
    },
    "invisible-wellness": {
      title: "Invisible Wellness", casting: "Plausible", horizon: "2027 → 2030", score: "79", tone: "invisible",
      integrateInterfaceImages: true,
      kicker: "Micro-sensing · care at the edge of attention", persona: "The Ease Seekers",
      description: "The best wellness interface is often small enough to disappear into a familiar object or daily ritual.",
      mandate: "Make sensing quiet, evidence transparent and attention optional.",
      ui: "Jewelry-thin sensing, glass evidence layers, personal micro-graphs.",
      headline: "Health support becomes easier to live with when sensing recedes and its evidence stays clear, calm and available on demand.",
      horizonNote: "Rings, skin patches and low-power biosensors are already moving care closer to everyday life. The design opportunity is not another wearable dashboard — it is a quieter relationship between continuous sensing, personal context and informed choice.",
      concept: "Invisible Wellness moves measurement from an explicit task to a thin layer within daily life. Rings and patches are examples of a broader interface shift: sensors become smaller and more continuous, while interpretation becomes more transparent, selective and personal.",
      practice: "A sensing surface stays silent while patterns remain inside a person’s usual range. When something meaningfully changes, a clear glass layer separates the observed signal from its context and the suggested next step. Fine traces replace oversized scores; the person can inspect, pause or share without entering a dense dashboard.",
      values: [["Feels like", "A quiet personal instrument"], ["Removes", "Tracking and dashboard fatigue"], ["Gives", "Continuity with visible evidence"], ["For", "Everyday recovery and prevention"], ["Tone", "Precise, discreet, reassuring"]],
      lens: [
        ["Society is changing", "People want continuous support without carrying another attention-hungry screen or turning wellness into a performance."],
        ["UX shift", "Move from opening a tracker to receiving selective, threshold-based evidence from micro-wearables and skin-level sensing."],
        ["Interface move", "Use transparent layers to separate raw signal, personal context and suggested action; use fine graphs to show change without dramatizing it."],
        ["Guardrail", "Invisible must never mean unknowable. Contact, calibration, confidence, retention and sharing need visible states and immediate controls."]
      ],
      evidence: ["Accenture Life Trends 2026 · Stability premium", "Futurescape 2026 · Healthcare finally gets personal"],
      interfaceEvolution: ["Micro-sensing · transparent · personally calibrated", "The interface shifts from a destination to a quiet evidence layer: dormant by default, legible at a threshold and detailed only when the person asks.", "Filament needs contact and calibration states, transparent evidence layers, baseline-aware micro-graphs and consistent privacy controls across wearable, patch, mobile and environmental surfaces."],
      images: ["01-limestone-sensing-seam", "02-adaptive-lamp", "03-air-and-curtains", "04-ceiling-glow", "05-sensing-rug", "06-quiet-carafe", "07-guide-light", "08-kitchen-ritual", "09-adaptive-mirror", "10-room-orb"],
      signalLabels: {
        "02-adaptive-lamp": "Evidence becomes transparent",
        "03-air-and-curtains": "Sensing becomes skin-thin",
        "04-ceiling-glow": "Data becomes a personal signature"
      },
      interfaceExamples: [
        { shift: "Sensing shift", title: "Sensing becomes jewelry-thin", summary: "Rings, patches and skin-level sensors collect quietly; the interface appears only for contact, calibration, consent or meaningful change.", implication: "Create persistent but low-attention states for sensor contact, confidence, privacy and pause.", tokens: ["Discreet", "Continuous", "Consented"], image: "02-adaptive-lamp", demo: "peripheral-cue-field", demoAlt: "A translucent micro-sensing surface with a quiet contact and consent readout" },
        { shift: "Evidence shift", title: "Evidence becomes transparent", summary: "Layered glass surfaces separate what was observed, how it compares with a personal baseline and what choice remains.", implication: "Use depth to clarify provenance and reasoning without introducing dashboard density.", tokens: ["Layered", "Explainable", "Reversible"], image: "03-air-and-curtains", demo: "why-now-pause-loop", demoAlt: "A skin-thin sensing patch with transparent layers for signal, context and choice" },
        { shift: "Visualization shift", title: "Graphs become personal signatures", summary: "Dot fields, fine traces and small deviations communicate pattern and change without turning every reading into a score.", implication: "Define a restrained graph grammar for baseline, variation, confidence and attention thresholds.", tokens: ["Fine-grained", "Baseline-aware", "Calm"], image: "04-ceiling-glow", demo: "ambient-state-spectrum", demoAlt: "A metallic sensing system with a fine personal health trace and one highlighted change" }
      ],
      base: "visual-library/invisible-wellness/",
      storyboardBase: "storyboards/invisible-wellness/",
      scenarios: [
        { image: "01-setup", title: "A day with less to manage", caption: "Health support starts from the everyday routine rather than an extra task list." },
        { image: "02-action", title: "The room notices softly", caption: "Light and environment respond in the periphery, with no command or dashboard required." },
        { image: "03-result", title: "One useful prompt", caption: "A small cue arrives only when it is likely to make the next moment easier." },
        { image: "04-impact", title: "Care dissolves into routine", caption: "The person keeps their attention for life; the room quietly carries the continuity." }
      ]
    },
    "sensory-sanctuary": {
      title: "Sensory Sanctuary", casting: "Plausible", horizon: "2026 → 2032", score: "86", tone: "sensory", trustLayer: true,
      kicker: "Sensory intelligence · adaptive trust", persona: "The Sensory Stewards",
      description: "Care data becomes a calm sensory language—felt through light, rhythm and haptics, with its evidence and consent always available to inspect.",
      mandate: "Make data felt, while keeping every interpretation legible and reversible.",
      ui: "Sensory data fields, haptic encoding, visible provenance and reversible adaptation.",
      headline: "A trustworthy care interface can help the body settle and make complex data understandable without demanding another dashboard.",
      horizonNote: "Low-lux interfaces, spatial data visualisation, haptic feedback and explainable recommendations are plausible today. The combined opportunity is to turn verified data into a sensory language without hiding where it came from.",
      concept: "Sensory Sanctuary combines nervous-system regulation with Adaptive Trust. Light, texture, sound, motion and pressure become channels for data, while a legible evidence layer explains the source, confidence boundary and consent state behind every response.",
      practice: "A glowing vessel carries a verified cardiac pattern as a slow pulse rather than a number. A brain field translates changing activity into spatial colour and a soft haptic contour. Touching either surface reveals the underlying evidence, sharing boundary and option to pause or request human review.",
      values: [["Feels like", "Data the body can understand"], ["Removes", "Sensory overload and black-box anxiety"], ["Gives", "Regulation, comprehension and agency"], ["For", "Care spaces, recovery and complex decisions"], ["Tone", "Low-lux, explainable, reversible"]],
      lens: [
        ["Society is changing", "People need relief from information overload but also demand clearer proof of what automated systems are doing and why."],
        ["UX shift", "Move from chart-first data display to sensory encoding that supports regulation, while keeping provenance and interpretation one touch away."],
        ["Interface move", "Translate verified change into light rhythm, spatial colour, sound restraint and haptic pulse; reveal the underlying evidence on demand."],
        ["Guardrail", "Never make sensory feedback the only route to meaning. Every cue needs accessible alternatives, explicit consent, a pause state and human review."]
      ],
      evidence: ["Accenture Life Trends 2026 · Good vibrations", "Futurescape 2026 · Burnout becomes systemic", "Futurescape 2026 · Trust becomes universal currency"],
      interfaceEvolution: ["Multisensory · explainable · haptic · reversible", "Data moves from charts into paced light, spatial motion and haptic patterns; a deliberate touch reveals source, confidence and consent without breaking the sensory calm.", "Filament expands beyond visual components to include haptic grammars, low-lux data tokens, sensory preferences, provenance reveal, pause, undo and human-escalation states."],
      images: ["01-mirror-cue", "02-full-body-vitals-mirror", "03-brain-sensory-field", "04-glowing-vessel", "05-sensory-fabric", "06-breathing-light", "07-sound-object", "08-regulation-nook", "09-sunlight-bands", "10-light-landscape"],
      signalLabels: {
        "02-full-body-vitals-mirror": "Information everywhere",
        "03-brain-sensory-field": "Data becomes multisensory",
        "04-glowing-vessel": "Data gains physical presence"
      },
      interfaceExamples: [
        { shift: "Modality shift", title: "Data becomes felt", summary: "A trend becomes paced light, haptic rhythm or spatial sound, with numbers always available.", implication: "Define equivalent visual, haptic, sonic and text representations for every state.", tokens: ["Multisensory", "Equivalent", "Accessible"], demo: "multisensory-vital-wave", demoAlt: "One patient signal translated into light, sound, touch and text" },
        { shift: "Information shift", title: "Information is everywhere", summary: "Everyday surfaces show one calm status. Deliberate touch reveals evidence, confidence and consent.", implication: "Keep clinical detail one intentional action away through progressive disclosure.", tokens: ["Ambient", "Progressive", "Evidence-led"], demo: "surface-to-evidence-reveal", demoAlt: "A calm surface status opening into evidence and consent layers" },
        { shift: "Trust shift", title: "One meaning, many senses", summary: "The same meaning stays recognizable through color, motion, touch, sound and text.", implication: "Store sensory preferences as first-class accessibility tokens.", tokens: ["Personalized", "Recognizable", "Reversible"], demo: "cross-sensory-state-key", demoAlt: "The same care state expressed through several sensory channels" }
      ],
      base: "visual-library/sensory-empathy/",
      storyboardBase: "storyboards/sensory-empathy/",
      scenarios: [
        { image: "01-setup", title: "Before the decision", caption: "A person enters a care space carrying sensory load and uncertainty about what the system knows." },
        { image: "02-action", title: "A signal becomes sensory", caption: "Verified change is translated into a calm pulse, light field or haptic rhythm rather than another chart." },
        { image: "03-result", title: "Evidence beneath the feeling", caption: "A deliberate touch reveals the source, confidence boundary and consent state behind the sensory cue." },
        { image: "04-impact", title: "Calm with agency", caption: "The person can understand, pause or escalate the response without losing the restorative quality of the space." }
      ]
    },
    "adaptive-trust": {
      title: "Adaptive Trust", casting: "Plausible", horizon: "2027 → 2032", score: "86", tone: "trust", mergedInto: "sensory-sanctuary",
      kicker: "Legible intelligence · patient agency", persona: "The Stewards",
      description: "Trust becomes a designed capability: care systems explain, ask, remember boundaries and let people change their mind.",
      mandate: "Make every automation understandable, interruptible and easy to revisit.",
      ui: "Evidence cues, visible consent, clear handoffs and undo.",
      headline: "Trust is not a setting. It is the repeated experience of knowing what care is doing, why it is doing it, and how to change course.",
      horizonNote: "Explainable suggestions, consent controls and verified handoffs are technically plausible today. The future step is making them feel clear enough to use in a human moment.",
      concept: "Adaptive Trust turns hidden system logic into legible care. It gives people a clear boundary around sensing, a visible account of handoffs and a simple way to revisit an automated decision.",
      practice: "A shared care path separates verified facts from recommendations. A patient can pause sensing with a tangible control. A clinician can show where an insight came from without asking the person to decode a dashboard.",
      values: [["Feels like", "A trusted conversation"], ["Removes", "Black-box anxiety"], ["Gives", "Agency and informed confidence"], ["For", "Connected care across home and hospital"], ["Tone", "Clear, respectful, reversible"]],
      lens: [
        ["Society is changing", "When generated information is abundant and credibility is scarce, trust becomes a practical form of value."],
        ["UX shift", "Design explanation, verification and reversibility into the care journey instead of hiding them in policies or settings."],
        ["Interface move", "Separate facts from recommendations, show provenance at the moment of decision and make consent changes easy to revisit."],
        ["Guardrail", "No recommendation should outrun a person’s understanding. Offer human escalation and an audit trail for consequential automation."]
      ],
      evidence: ["Accenture Life Trends 2026 · Stability premium", "Futurescape 2026 · Trust becomes universal currency"],
      interfaceEvolution: ["Explainable · provenance-rich · reversible", "Every recommendation carries a visible source, confidence boundary, consent state and clear route to inspect, undo or escalate the decision.", "Filament treats provenance, consent, automation status, human review and reversal as first-class components rather than secondary policy screens."],
      images: ["01-shared-care-path", "02-consent-by-design", "03-clinician-priority-view", "04-hospital-to-home", "05-discreet-feedback", "06-ambient-staff-coordination", "07-ambient-shared-care", "08-shared-care-explanation", "09-continuity-control-surface", "10-ambient-care-route"],
      signalLabels: {
        "02-consent-by-design": "Consent becomes an interaction",
        "03-clinician-priority-view": "Interfaces prioritise attention",
        "04-hospital-to-home": "Context travels with care"
      },
      interfaceExamples: [
        { shift: "Evidence shift", title: "Provenance appears in context", summary: "Recommendations carry source, confidence and consent at the moment of action.", implication: "Build provenance and confidence into the component, not a secondary screen.", tokens: ["Traceable", "Legible", "Purpose-bound"], demo: "provenance-stack", demoAlt: "Recommendation connected to visible source, confidence and consent layers" },
        { shift: "Agency shift", title: "Control stays within reach", summary: "People can pause sensing, reverse automation and request human review.", implication: "Keep undo, pause and escalation persistent in consequential flows.", tokens: ["Reversible", "Interruptible", "Human review"], demo: "control-loop", demoAlt: "A visible control loop for pause, undo and human review" },
        { shift: "Continuity shift", title: "Context travels with care", summary: "Information moves between home and hospital with visible boundaries.", implication: "Show what travels, why it moves and how long it remains available.", tokens: ["Continuous", "Bounded", "Visible"], demo: "continuity-route", demoAlt: "A visible care-data route connecting home, handoff and hospital" }
      ],
      base: "visual-library/adaptive-trust/legacy/",
      storyboardBase: "storyboards/adaptive-trust/",
      scenarios: [
        { image: "01-setup", title: "A question of visibility", caption: "The patient needs to understand who sees their information and why." },
        { image: "02-action", title: "Consent in the hand", caption: "A tangible control makes privacy choices easy to make, inspect and revisit." },
        { image: "03-result", title: "Facts and recommendations apart", caption: "Patient and clinician can see what is known, what is suggested and where each begins." },
        { image: "04-impact", title: "A legible handoff", caption: "Home and hospital care connect through a path everyone can understand." }
      ]
    },
    "molecular-bespoke": {
      title: "Molecular Bespoke", casting: "Possible", horizon: "2030 → 2038", score: "72", tone: "molecular",
      kicker: "Precision rituals · deeply personal care", persona: "The Individualists",
      description: "Personal biology, materials and micro-diagnostics converge into care objects that feel singular rather than clinical.",
      mandate: "Translate precision medicine into calm, dignified daily rituals.",
      ui: "Personal baselines, discreet detail, patient-owned context.",
      headline: "Precision becomes humane when the most personal data in the world is translated into an everyday ritual people can own.",
      horizonNote: "Personal diagnostics, biomarkers and adaptive dosing are advancing quickly. The longer horizon is not simply technical accuracy, but the dignity of how precision enters daily life.",
      concept: "Molecular Bespoke brings deep biological insight down to the scale of a held object, a wearable or a personal vessel. The experience should feel specific without feeling exposed.",
      practice: "A biomaterial patch reflects a personal baseline through colour and touch. A dose ritual adapts quietly. The individual keeps the context, while care teams receive only what is needed.",
      values: [["Feels like", "Care tuned to me"], ["Removes", "One-size-fits-all routines"], ["Gives", "Personal relevance and control"], ["For", "Longitudinal and precision care"], ["Tone", "Intimate, discreet, exact"]],
      lens: [
        ["Society is changing", "Longer, more active lives are reshaping expectations of aging, prevention and the right to remain an author of one’s health story."],
        ["UX shift", "Make personal biology understandable as a chosen daily ritual, not an opaque score delivered by a system."],
        ["Interface move", "Show a personal baseline before a recommendation, use discreet held objects and let people decide what context travels to care teams."],
        ["Guardrail", "Precision must not become biometric exposure. Apply data minimisation, meaningful consent and equitable routes into advanced care."]
      ],
      evidence: ["Accenture Life Trends 2026 · Coming of age", "Futurescape 2026 · Aging becomes a choice"],
      interfaceEvolution: ["Biometric · baseline-aware · privacy-preserving", "The interface interprets a signal against the individual’s own baseline and communicates meaningful change without prescribing a particular ring, band, patch or device.", "Filament needs baseline-relative visualisation, uncertainty ranges, selective disclosure and patient-held sharing controls that work across biometric form factors."],
      images: ["00-bespoke-wearable-baseline", "01-biometric-ring", "02-personal-vessel", "03-biomaterial-patch", "04-personal-vial", "05-dose-ritual", "06-palm-scanner", "07-biometric-object", "08-wrist-band", "09-personal-diagnostic", "10-precision-ring"],
      signalLabels: {
        "01-biometric-ring": "Biometrics become continuous",
        "02-personal-vessel": "Personal baselines replace averages",
        "03-biomaterial-patch": "Interfaces become bioadaptive"
      },
      interfaceExamples: [
        { shift: "Reference shift", title: "Personal baselines replace averages", summary: "Interfaces show change from a person’s usual range before making a recommendation.", implication: "Visualize baseline, variation and uncertainty together.", tokens: ["Longitudinal", "Relative", "Uncertain"], image: "08-wrist-band", demo: "baseline-deviation-orbit", demoAlt: "A translucent personal-baseline trace layered over a quiet biometric wearable" },
        { shift: "Privacy shift", title: "Context travels selectively", summary: "People choose which signal, timeframe and explanation move between care settings.", implication: "Make disclosure granular, temporary and easy to revoke.", tokens: ["Selective", "Patient-held", "Revocable"], image: "09-personal-diagnostic", demo: "selective-disclosure-layers", demoAlt: "Portable personal diagnostics with a selective, temporary care-context interface" },
        { shift: "Adaptive-language shift", title: "Precision stays understandable", summary: "Density, prompts and thresholds adapt to biological context while showing the reason.", implication: "Adapt information density without changing the meaning of core states.", tokens: ["Adaptive", "Explainable", "Stable semantics"], image: "10-precision-ring", demo: "bioadaptive-state-timeline", demoAlt: "A precision biometric object with an interface that reveals sensing, meaning and choice in sequence" }
      ],
      base: "visual-library/molecular-bespoke/",
      storyboardBase: "storyboards/molecular-bespoke/",
      scenarios: [
        { image: "01-setup", title: "One person, one baseline", caption: "A personal signal becomes meaningful only when it is held in its individual context." },
        { image: "02-action", title: "Precision in a daily ritual", caption: "A diagnostic or dose cue enters the day as an intimate, understandable action." },
        { image: "03-result", title: "The person keeps the context", caption: "Care teams receive what is needed while the individual retains a sense of ownership." },
        { image: "04-impact", title: "Specific without exposure", caption: "Precision care feels personal and discreet rather than clinical or surveillant." }
      ]
    }
  }
};
