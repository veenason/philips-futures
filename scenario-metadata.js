(function () {
  "use strict";

  var metadata = {
    "handcrafted-care": {
      sequenceMode: "representative-moments",
      disclosure: "Concept sketch · illustrative, not validated",
      items: {
        "01-setup": {
          title: "Recovery remains recognisably home",
          caption: "A familiar bedroom establishes the care context without visible clinical equipment.",
          depicts: "A person resting in a familiar bedroom with a wooden bed and domestic furnishings.",
          notShown: "Active sensing, a data source or a care-team view."
        },
        "02-action": {
          title: "A deliberate touch, one quiet cue",
          caption: "A hand rests on a familiar surface while a small light acknowledges the interaction.",
          depicts: "A hand touching a rounded bedside surface with a restrained circular light cue.",
          notShown: "What was sensed, what the light means or who receives any data."
        },
        "03-result": {
          title: "The room stays visually calm",
          caption: "The person rests without a dashboard or device array dominating the room.",
          depicts: "A person resting in an uncluttered bedroom with no prominent clinical display.",
          notShown: "Vitals, an alert or a caregiver-only information layer."
        },
        "04-impact": {
          title: "Care happens at the bedside",
          caption: "A familiar bedside gesture replaces managing a visible console.",
          depicts: "A caregiver at a wooden bedside rail in a quiet domestic setting.",
          notShown: "The relationship between the people, family interaction or a completed care action."
        }
      }
    },

    "invisible-wellness": {
      sequenceMode: "representative-moments",
      disclosure: "Concept sketch · illustrative, not validated",
      items: {
        "01-setup": {
          title: "A day with less to manage",
          caption: "An ordinary quiet moment establishes the routine in which support could recede.",
          depicts: "A person reading during an everyday moment at home.",
          notShown: "Active sensing, a care intervention or a data flow."
        },
        "02-action": {
          title: "The room notices softly",
          caption: "A restrained environmental light cue is represented at the edge of attention.",
          depicts: "A seated person beside an ambient lamp with a soft peripheral light effect.",
          notShown: "The sensor, source, confidence or reason for the response."
        },
        "03-result": {
          title: "Attention stays with the moment",
          caption: "No dashboard remains in view after the quiet intervention.",
          depicts: "A person sitting in an uncluttered room without a visible dashboard.",
          notShown: "The prompt itself, its timing or why it appeared."
        },
        "04-impact": {
          title: "The routine continues",
          caption: "The person returns to an ordinary morning while continuity remains in the background.",
          depicts: "A person opening bedroom curtains at the start of the day.",
          notShown: "Longitudinal sensing, continuity of care or an outcome measure."
        }
      }
    },

    "sensory-sanctuary": {
      sequenceMode: "representative-moments",
      disclosure: "Concept sketch · illustrative, not validated",
      continuityNote: "Representative people and settings; the woman and man are not one continuous individual.",
      items: {
        "01-setup": {
          title: "Entering a quieter care space",
          caption: "The environment reduces visual load before any interaction begins.",
          depicts: "A person entering a warm, minimally furnished room with a large mirror-like surface.",
          notShown: "Sensory load, uncertainty or what the system knows."
        },
        "02-action": {
          title: "A body state becomes a simple cue",
          caption: "A few body markers translate sensing into a calm, glanceable representation.",
          depicts: "A person facing a mirror-like surface with three simple body markers.",
          notShown: "Verification, provenance, clinical meaning or confidence."
        },
        "03-result": {
          title: "The cue supports self-awareness",
          caption: "The person pauses with the signal rather than reading a dense chart.",
          depicts: "A person pausing with one hand at the chest beside a minimal reflected cue.",
          notShown: "A deliberate evidence reveal, consent state or confidence boundary."
        },
        "04-impact": {
          title: "Calm is the visible outcome",
          caption: "A restorative state is shown after the interaction.",
          depicts: "A different representative person resting in a calm domestic interior.",
          notShown: "Pause, escalation or accessibility controls."
        }
      }
    },

    "adaptive-trust": {
      sequenceMode: "representative-moments",
      disclosure: "Concept sketch · illustrative, not validated",
      items: {
        "01-setup": {
          title: "The conversation starts at the bedside",
          caption: "A patient and clinician begin with a shared, human exchange.",
          depicts: "A patient and clinician speaking beside a hospital bed.",
          notShown: "Who can see the patient's information, why it is shared or a consent state."
        },
        "02-action": {
          title: "Who is connected becomes discussable",
          caption: "A simple relationship map makes participants in care visible before information moves.",
          depicts: "A patient and clinician reviewing a diagram of people connected around one individual.",
          notShown: "A selectable consent control, access level or sharing duration."
        },
        "03-result": {
          title: "Evidence and options get separate space",
          caption: "A shared interface separates input categories from possible next steps.",
          depicts: "A patient and clinician reviewing an abstract interface with inputs and option cards in separate areas.",
          notShown: "Exact fact and recommendation labels, provenance or confidence."
        },
        "04-impact": {
          title: "A legible handoff",
          caption: "A patient, coordinator and clinician are represented across home and hospital.",
          depicts: "A home patient, remote coordinator and hospital clinician connected by a dotted route.",
          notShown: "The data boundary, retention period, revocation state or handoff content."
        }
      }
    },

    "molecular-bespoke": {
      sequenceMode: "representative-moments",
      disclosure: "Concept sketch · illustrative, not validated",
      continuityNote: "Separate concept probes: the handheld object, ring, morning ritual and docking object are not one product journey.",
      items: {
        "01-setup": {
          title: "A personal object enters the day",
          caption: "A compact personal object is held at the bedside.",
          depicts: "A hand holding a small two-button object in a domestic setting.",
          notShown: "A personal baseline, biological context or data meaning."
        },
        "02-action": {
          title: "A quiet cue on a familiar wearable",
          caption: "A ring presents a minimal surface signal that invites attention.",
          depicts: "A ring held between two hands with a small wave-like cue on its surface.",
          notShown: "A diagnosis, dose, recommendation or biological context."
        },
        "03-result": {
          title: "A recommendation becomes a daily ritual",
          caption: "A person acts on a small cue during an ordinary morning routine.",
          depicts: "A person placing a small object into a cup at a kitchen counter.",
          notShown: "What the object contains, the recommendation source or care-team sharing."
        },
        "04-impact": {
          title: "The interface returns to rest",
          caption: "The object docks and the interaction recedes after use.",
          depicts: "A hand placing an oval object into a matching tabletop dock.",
          notShown: "Privacy, specificity, sensing or a measured outcome."
        }
      }
    }
  };

  window.CARE_FUTURES_SCENARIO_METADATA = metadata;

  if (!window.CARE_FUTURES || !window.CARE_FUTURES.themes) {
    return;
  }

  Object.keys(metadata).forEach(function (slug) {
    var theme = window.CARE_FUTURES.themes[slug];
    var themeMetadata = metadata[slug];

    if (!theme || !Array.isArray(theme.scenarios)) {
      return;
    }

    theme.scenarioSequenceMode = themeMetadata.sequenceMode;
    theme.scenarioDisclosure = themeMetadata.disclosure;

    if (themeMetadata.continuityNote) {
      theme.scenarioContinuityNote = themeMetadata.continuityNote;
    }

    theme.scenarios = theme.scenarios.map(function (scenario) {
      var scenarioMetadata = themeMetadata.items[scenario.image];
      return scenarioMetadata ? Object.assign({}, scenario, scenarioMetadata) : scenario;
    });
  });
})();
