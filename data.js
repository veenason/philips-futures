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
      evidence: ["WGSN × Philips · Sensorial Reset (pp. 10–11, 34–35)", "frog Futurescape 2026 · AI breaks through the screen (PDF p. 17)"],
      researchBrief: {
        provenance: { publisher: "WGSN × Philips", report: "Generational Health & Wellbeing Trends", note: "Uploaded report · direct evidence and mapped interpretation" },
        mappingStatus: "Handcrafted Care is a Philips concept mapped to WGSN’s Sensorial Reset; it is not a theme named in the report.",
        bigIdeas: [
          { title: "Sensorial Reset", summary: "Tangibility, craft, touch and emotional materiality become signals of care, quality and human effort.", scores: [["2026", "79"], ["2027", "80"], ["2028", "82"]], citation: "WGSN × Philips, pp. 10–11 and 34–35" }
        ],
        persona: { title: "The Keepers", body: "Trust, stability and resilience shape this cross-generational persona. The report connects it with longevity, honest construction and carefully crafted texture.", citation: "WGSN × Philips, pp. 24–25" },
        cohorts: { title: "Gen X + Boomers", body: "Gen X values sensory-rich environments that support wellbeing; Boomers favour familiar, comforting cues that reinforce trust and stability.", citation: "WGSN × Philips, p. 11" },
        actions: ["Explore multiple senses", "Rework texture and materiality", "Offer sensory control", "Make technology use deliberate"],
        mandate: "Let emotional materiality become visible proof of care.",
        prompt: "How could Philips deliver care through a sensorial experience?",
        signals: [
          { publisher: "WGSN × Philips", title: "Design for permanence", finding: "The Keepers strategy points to long life, refined engineering, crafted texture and honest construction.", citation: "pp. 24–25", kind: "Direct report evidence" },
          { publisher: "WGSN × Philips", title: "Calibrated technology", finding: "The Restorers add a complementary need for calm, intentional technology and domestic warmth around care.", citation: "pp. 26–27", kind: "Supporting report evidence" },
          { publisher: "frog Futurescape 2026", title: "AI moves into objects and spaces", finding: "Ambient intelligence extends into physical objects and places, making dignity, boundaries and the texture of daily life central design questions.", citation: "PDF p. 17 · report p. 33", url: "https://www.frog.co/designmind/futurescape-2026-artificial-realities-human-ai-chemistry", kind: "Supporting perspective" }
        ],
        integrity: "Scores shown here belong to WGSN’s Sensorial Reset Big Idea. No survey percentage is claimed. Interface implications are Philips design synthesis."
      },
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
      title: "Invisible Wellness", casting: "Plausible", horizon: "2027 → 2030", score: "90", tone: "invisible",
      integrateInterfaceImages: true,
      kicker: "Micro-sensing · care at the edge of attention", persona: "The Ascendants",
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
      evidence: ["WGSN × Philips · AI Ordinary (pp. 8–9, 34–35)", "frog Futurescape 2026 · healthcare finally gets personal (PDF p. 8)"],
      researchBrief: {
        provenance: { publisher: "WGSN × Philips", report: "Generational Health & Wellbeing Trends", note: "Uploaded report · direct evidence and mapped interpretation" },
        mappingStatus: "Invisible Wellness is a Philips concept mapped to WGSN’s AI Ordinary; it is not a theme named in the report.",
        bigIdeas: [
          { title: "AI Ordinary", summary: "AI adoption grows when it feels ambient, intuitive and useful while strengthening convenience, personalisation and confidence.", scores: [["2026", "84"], ["2027", "84"], ["2028", "90"]], citation: "WGSN × Philips, pp. 8–9 and 34–35" }
        ],
        persona: { title: "The Ascendants", body: "Personal growth, adaptiveness and confidence define this persona. Its health priority is progress through intuitive, responsive experiences.", citation: "WGSN × Philips, pp. 22–23" },
        cohorts: { title: "All five cohorts", body: "Expectations range from seamless ambient participation for Gen Alpha to transparency for Gen Z, credibility for Millennials and human judgement plus reassurance for Gen X and Boomers.", citation: "WGSN × Philips, p. 9" },
        actions: ["Build emotionally aware UI", "Make system behaviour transparent", "Allow meaningful customisation"],
        mandate: "Make intelligence ambient without making it unknowable.",
        prompt: "How could Philips rebalance daily life and technology while enabling trust and privacy?",
        signals: [
          { publisher: "WGSN × Philips", title: "Omnipresent wellness", finding: "The report anticipates wellness working in symbiosis with daily life rather than remaining a separate activity.", citation: "p. 6", kind: "Direct report evidence" },
          { publisher: "WGSN × Philips", title: "Transparency remains essential", finding: "Ambient intelligence still needs visible control, understandable behaviour and opportunities to personalise the experience.", citation: "p. 9", kind: "Direct report evidence" },
          { publisher: "frog Futurescape 2026", title: "Healthcare becomes an adaptive ecosystem", finding: "Personal signals can support more adaptive care, while opt-in sharing and passive reporting keep the experience quieter and more continuous.", citation: "PDF p. 8 · report p. 15", url: "https://www.frog.co/designmind/futurescape-2026-artificial-realities-human-ai-chemistry", kind: "Supporting perspective" }
        ],
        integrity: "Scores shown here belong to WGSN’s AI Ordinary Big Idea. Rings and patches are illustrative interface forms, not products forecast by the report."
      },
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
      title: "Sensory Sanctuary", casting: "Plausible", horizon: "2026 → 2032", score: "92", tone: "sensory", trustLayer: true,
      kicker: "Sensory intelligence · adaptive trust", persona: "The Restorers · The Keepers",
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
      evidence: ["WGSN × Philips · Sensorial Reset + Restoring Trust (pp. 10–11, 18–19, 34–35)", "frog Futurescape 2026 · burnout and human sustainability (PDF p. 22)"],
      researchBrief: {
        provenance: { publisher: "WGSN × Philips", report: "Generational Health & Wellbeing Trends", note: "Uploaded report · two mapped Big Ideas" },
        mappingStatus: "Sensory Sanctuary combines two WGSN Big Ideas—Sensorial Reset and Restoring Trust—as a Philips interface synthesis.",
        bigIdeas: [
          { title: "Sensorial Reset", summary: "Multisensory calm, materiality and deliberate technology answer digital saturation.", scores: [["2026", "79"], ["2027", "80"], ["2028", "82"]], citation: "WGSN × Philips, pp. 10–11 and 34–35" },
          { title: "Restoring Trust", summary: "Trust shifts toward visible evidence, accountability, consistency and empowerment.", scores: [["2026", "90"], ["2027", "91"], ["2028", "92"]], citation: "WGSN × Philips, pp. 18–19 and 34–35" }
        ],
        persona: { title: "The Restorers + The Keepers", body: "The Restorers seek calm and intentional technology; The Keepers prioritise reliability, privacy, stability and integrity.", citation: "WGSN × Philips, pp. 24 and 26" },
        cohorts: { title: "Older Gen Z to Boomers", body: "Both personas span older Gen Z, Millennials, Gen X and Boomers, joining restorative sensory needs with stronger expectations of proof and privacy.", citation: "WGSN × Philips, pp. 24 and 26" },
        actions: ["Create sensory value", "Use technology deliberately", "Show evidence consistently", "Empower people through transparency"],
        mandate: "Translate verified change into sensory calm without hiding the evidence beneath it.",
        prompt: "How could Philips deliver a sensorial care experience that also enables trust and privacy?",
        signals: [
          { publisher: "WGSN × Philips", title: "A sanctuary of soothing technology", finding: "The Restorers strategy softens sterile devices through gentle form, low-reflection media and domestic warmth.", citation: "p. 27", kind: "Direct report evidence" },
          { publisher: "WGSN × Philips", title: "Sensory intelligence", finding: "The appendix shifts the goal from capturing attention to creating value through coordinated multisensory strategies.", citation: "p. 43", kind: "Direct report evidence" },
          { publisher: "frog Futurescape 2026", title: "Recovery becomes systemic", finding: "Always-on culture and technostress create demand for environments and organisations that support human sustainability and recovery.", citation: "PDF p. 22 · report p. 43", url: "https://www.frog.co/designmind/futurescape-2026-artificial-realities-human-ai-chemistry", kind: "Supporting perspective" }
        ],
        integrity: "The two score series belong to WGSN Big Ideas. The haptic, light and spatial data examples are Philips concept synthesis, not claims made by WGSN."
      },
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
      title: "Adaptive Trust", casting: "Plausible", horizon: "2027 → 2032", score: "92", tone: "trust", mergedInto: "sensory-sanctuary",
      kicker: "Legible intelligence · patient agency", persona: "The Keepers",
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
      evidence: ["WGSN × Philips · Restoring Trust (pp. 18–19, 34–35)", "frog Futurescape 2026 · trust as universal currency (PDF p. 19)"],
      researchBrief: {
        provenance: { publisher: "WGSN × Philips", report: "Generational Health & Wellbeing Trends", note: "Uploaded report · direct evidence and mapped interpretation" },
        mappingStatus: "Adaptive Trust is a Philips concept mapped to WGSN’s Restoring Trust; it is now carried into Sensory Sanctuary on the atlas home.",
        bigIdeas: [
          { title: "Restoring Trust", summary: "Trust becomes a proof economy built through transparency, accountability, evidence and consistent results.", scores: [["2026", "90"], ["2027", "91"], ["2028", "92"]], citation: "WGSN × Philips, pp. 18–19 and 34–35" }
        ],
        persona: { title: "The Keepers", body: "Reliability, privacy, integrity and stability matter more when systems mediate consequential care decisions.", citation: "WGSN × Philips, p. 24" },
        cohorts: { title: "Older Gen Z to Boomers", body: "The Keepers span older Gen Z, Millennials, Gen X and Boomers, with reassurance and protection needs increasing for older cohorts.", citation: "WGSN × Philips, pp. 19 and 24" },
        actions: ["Move from protection to empowerment", "Show up consistently", "Practise radical transparency", "Back innovation with evidence"],
        mandate: "Make the source, boundary and reversibility of every automated action visible.",
        prompt: "How could Philips enable trust and privacy throughout a connected care journey?",
        signals: [
          { publisher: "WGSN × Philips", title: "Proof over claims", finding: "The report foregrounds traceability, consistent delivery and transparent communication as practical trust builders.", citation: "pp. 18–19", kind: "Direct report evidence" },
          { publisher: "WGSN × Philips", title: "Privacy is part of stability", finding: "The Keepers connect trust with clear data protection, reliability and integrity rather than novelty alone.", citation: "p. 24", kind: "Direct report evidence" },
          { publisher: "frog Futurescape 2026", title: "Trust differentiates", finding: "When polished interfaces and generated content become abundant, verification and reputation become more valuable differentiators.", citation: "PDF p. 19 · report p. 37", url: "https://www.frog.co/designmind/futurescape-2026-artificial-realities-human-ai-chemistry", kind: "Supporting perspective" }
        ],
        integrity: "The score series belongs to WGSN’s Restoring Trust Big Idea. Clinical displays and consent controls on this page are illustrative design explorations."
      },
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
      title: "Molecular Bespoke", casting: "Possible", horizon: "2030 → 2038", score: "68", tone: "molecular",
      kicker: "Precision rituals · deeply personal care", persona: "The Challengers",
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
      evidence: ["WGSN × Philips · Fragmented Identities (pp. 16–17, 34–35)", "frog Futurescape 2026 · healthcare gets personal + aging becomes a choice (PDF pp. 8, 28)"],
      researchBrief: {
        provenance: { publisher: "WGSN × Philips", report: "Generational Health & Wellbeing Trends", note: "Uploaded report · partial mapping with explicit limits" },
        mappingStatus: "Molecular Bespoke is only partially supported by WGSN. The report supports individualisation and context-specific needs—not molecular diagnostics or precision dosing.",
        bigIdeas: [
          { title: "Fragmented Identities", summary: "Identity becomes interest-, mood- and context-specific, weakening the idea of a single standard consumer.", scores: [["2026", "64"], ["2027", "65"], ["2028", "68"]], citation: "WGSN × Philips, pp. 16–17 and 34–35" }
        ],
        persona: { title: "The Challengers", body: "This persona expects individualised adaptability because one size does not fit all; agency and recognition of different needs are central.", citation: "WGSN × Philips, p. 28" },
        cohorts: { title: "Older Gen Z to Boomers", body: "Needs diverge across life stages—from confidence and long-term vitality to hormonal transitions, independence and longer lives.", citation: "WGSN × Philips, pp. 6 and 28" },
        actions: ["Design for context-specific needs", "Recognise overlooked consumers", "Support flexible identities", "Make customisation understandable"],
        mandate: "Use a personal baseline, show why the experience changed and let context travel selectively.",
        prompt: "How could Philips support people whose needs and identities shift across life stages and contexts?",
        signals: [
          { publisher: "WGSN × Philips", title: "No single standard user", finding: "The report directs teams toward niche needs, greater visibility for overlooked consumers and stronger recognition of individuality.", citation: "pp. 16–17", kind: "Direct report evidence" },
          { publisher: "WGSN × Philips", title: "One size does not fit all", finding: "The Challengers place individualised adaptability and agency at the centre of health and wellbeing experiences.", citation: "p. 28", kind: "Direct report evidence" },
          { publisher: "frog Futurescape 2026", title: "Healthcare becomes responsive", finding: "A future health ecosystem combines personal data streams into more adaptive, preventative and person-specific support.", citation: "PDF pp. 8 and 28 · report pp. 15 and 55", url: "https://www.frog.co/designmind/futurescape-2026-artificial-realities-human-ai-chemistry", kind: "Supporting perspective" }
        ],
        integrity: "The score series belongs to WGSN’s Fragmented Identities Big Idea. Biomarkers, patches and dosing concepts are speculative and are not evidenced by the WGSN report."
      },
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
