(() => {
  const QUIZZES = {
  "1": {
    "title": "Read the material",
    "questions": [
      {
        "id": "p1q1",
        "question": "A handbuilt cup has a thin rim and a much thicker base. The rim is already firm leather-hard while the base is still soft. What is the best immediate response?",
        "hint": "Manage the difference in drying rate, not just the total drying time.",
        "options": [
          {
            "value": "A",
            "label": "Put it in direct sun so the base catches up quickly.",
            "feedback": "Direct sun will usually accelerate the already-exposed rim and increase the moisture gradient."
          },
          {
            "value": "B",
            "label": "Brush water onto the base and leave the cup uncovered.",
            "feedback": "Added water makes the base wetter and does not control the fast-drying rim."
          },
          {
            "value": "C",
            "label": "Loosely cover the cup, protect the rim more than the base, and allow moisture to equalize slowly.",
            "feedback": "Slowing and selectively protecting the advanced area reduces differential shrinkage and gives moisture time to redistribute."
          },
          {
            "value": "D",
            "label": "Score a line around the base so it can shrink separately.",
            "feedback": "Scoring creates a stress concentration rather than correcting uneven moisture and thickness."
          }
        ],
        "correct": "C"
      },
      {
        "id": "p1q2",
        "question": "A kiln controller reports that the programmed peak temperature was reached, but the witness cone beside the work barely moved. What is the most defensible conclusion?",
        "hint": "A temperature reading and the clay's thermal experience are related but not identical.",
        "options": [
          {
            "value": "A",
            "label": "The clay definitely reached maturity because the controller reached its target.",
            "feedback": "A controller reading alone does not establish the heat work experienced by the ware."
          },
          {
            "value": "B",
            "label": "The load likely received less heat work than intended at that location, so the firing record and cone placement should be reviewed.",
            "feedback": "Witness cones respond to time and temperature at their location and provide direct evidence of heat work."
          },
          {
            "value": "C",
            "label": "The cone must be defective because cones measure atmosphere rather than heat work.",
            "feedback": "Pyrometric cones are specifically used as heat-work indicators, though placement and cone handling still matter."
          },
          {
            "value": "D",
            "label": "The glaze should be applied more thickly during the next firing.",
            "feedback": "Glaze thickness does not explain the under-responsive witness cone."
          }
        ],
        "correct": "B"
      },
      {
        "id": "p1q3",
        "question": "You want to determine the total wet-to-fired shrinkage of a new studio-approved clay body. Which procedure gives the most useful evidence?",
        "hint": "A percentage needs a stable reference before and after the change.",
        "options": [
          {
            "value": "A",
            "label": "Estimate the size difference by holding one wet pot beside one fired pot.",
            "feedback": "Different handmade pots introduce uncontrolled differences in starting dimensions."
          },
          {
            "value": "B",
            "label": "Measure a marked test bar when wet and after the intended firing, then calculate the percentage change between the same marks.",
            "feedback": "A fixed gauge length on the same specimen supports a reproducible shrinkage calculation."
          },
          {
            "value": "C",
            "label": "Weigh a lump of clay before and after wedging.",
            "feedback": "Mass change during wedging does not measure dimensional drying-plus-firing shrinkage."
          },
          {
            "value": "D",
            "label": "Look up a shrinkage number for any stoneware fired to the same cone.",
            "feedback": "Shrinkage depends on the exact clay body and firing, so a generic stoneware value is not adequate evidence."
          }
        ],
        "correct": "B"
      }
    ]
  },
  "2": {
    "title": "Pinch and pressure",
    "questions": [
      {
        "id": "p2q1",
        "question": "A learner repeatedly pinches only the upper half of a bowl because the rim still looks thick. The rim soon becomes wavy and begins to split. What is the best correction?",
        "hint": "Trace where the clay has already been displaced before applying more pressure.",
        "options": [
          {
            "value": "A",
            "label": "Add more water and continue pinching the same area.",
            "feedback": "More water weakens the already overworked rim and does not redistribute the wall."
          },
          {
            "value": "B",
            "label": "Stop, support the form, and resume with measured rotations and pressure beginning lower on the wall only if sufficient thickness remains.",
            "feedback": "The correction restores a whole-wall pressure path instead of repeatedly thinning and stretching the rim."
          },
          {
            "value": "C",
            "label": "Cut the rim level immediately and ignore the wall below it.",
            "feedback": "Trimming may hide waviness but does not address the uneven wall that caused it."
          },
          {
            "value": "D",
            "label": "Squeeze the rim closed so the split overlaps.",
            "feedback": "Folding a stressed rim traps weakness and changes the form without correcting pressure control."
          }
        ],
        "correct": "B"
      },
      {
        "id": "p2q2",
        "question": "A pinch cup looks balanced from the outside but feels unexpectedly heavy and cracks through the center of its base while drying. Which finding would best support the most likely construction cause?",
        "hint": "Compare the hidden structure with the visible profile.",
        "options": [
          {
            "value": "A",
            "label": "A sectioned practice cup reveals a base three times thicker than its walls.",
            "feedback": "Hidden base mass dries and shrinks more slowly than the walls, creating stress at their transition."
          },
          {
            "value": "B",
            "label": "The rim is visually circular.",
            "feedback": "Rim circularity does not explain a central base crack."
          },
          {
            "value": "C",
            "label": "The outside carries visible finger marks.",
            "feedback": "Finger marks alone do not establish a damaging thickness gradient."
          },
          {
            "value": "D",
            "label": "The clay is a warm brown color.",
            "feedback": "Color does not diagnose the structural cause described."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p2q3",
        "question": "You want three pinched vessels to feel related without becoming duplicates. Which plan best tests intentional variation?",
        "hint": "Keep enough stable that the changed decision can be perceived.",
        "options": [
          {
            "value": "A",
            "label": "Use three unrelated clay bodies, three techniques, and three firing temperatures.",
            "feedback": "Too many changing variables obscure what creates the relationship."
          },
          {
            "value": "B",
            "label": "Make the same vessel three times and change only the glaze color at the end.",
            "feedback": "This produces repetition with decoration, not meaningful formal variation in pinching."
          },
          {
            "value": "C",
            "label": "Hold clay mass and rim language constant while varying the vessel's degree and direction of asymmetry.",
            "feedback": "Shared constraints establish kinship while one deliberate variable develops form judgment."
          },
          {
            "value": "D",
            "label": "Stop each vessel whenever the clay becomes difficult to pinch.",
            "feedback": "Unplanned stopping makes the differences accidental rather than investigable."
          }
        ],
        "correct": "C"
      }
    ]
  },
  "3": {
    "title": "Coil and structure",
    "questions": [
      {
        "id": "p3q1",
        "question": "A coiled vessel looks smooth, but a horizontal split follows one entire coil seam during drying. What is the most useful next test?",
        "hint": "Appearance at the surface does not prove continuity through the wall.",
        "options": [
          {
            "value": "A",
            "label": "Make paired seam samples, changing only the degree of interior/exterior integration while matching moisture and drying.",
            "feedback": "The comparison directly tests whether the apparently smooth seam lacked structural integration."
          },
          {
            "value": "B",
            "label": "Make another full vessel with twice as much slip everywhere.",
            "feedback": "A full remake changes too much, and excess slip may add water without improving compression."
          },
          {
            "value": "C",
            "label": "Sand the crack after firing.",
            "feedback": "Sanding cannot restore a structurally separated seam. Uncontrolled dry sanding can also generate hazardous clay or glaze dust; follow studio wet or HEPA controls, and reject or remake structurally separated ware."
          },
          {
            "value": "D",
            "label": "Fire the next vessel hotter regardless of its clay rating.",
            "feedback": "This is unsafe and does not address a crack that developed during drying."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p3q2",
        "question": "The lower wall of a tall coil vessel begins to bulge after the sixth course, although each new coil is evenly made. What is the best response?",
        "hint": "Consider the strength of the lower wall relative to the load being added.",
        "options": [
          {
            "value": "A",
            "label": "Add several more courses quickly so the top balances the bulge.",
            "feedback": "Additional wet weight increases the load on the soft lower wall."
          },
          {
            "value": "B",
            "label": "Push the bulge inward repeatedly while the wall remains unsupported.",
            "feedback": "Reworking a loaded soft wall can stretch and weaken it further."
          },
          {
            "value": "C",
            "label": "Pause, support the profile if needed, let the lower courses firm evenly, and resume when they can carry more load.",
            "feedback": "Staged construction matches added load to the developing strength of the clay."
          },
          {
            "value": "D",
            "label": "Cut vertical slots through the lower wall to release pressure.",
            "feedback": "Slots damage continuity and do not solve insufficient load-bearing strength."
          }
        ],
        "correct": "C"
      },
      {
        "id": "p3q3",
        "question": "A coil vessel must narrow into a neck without becoming abruptly pinched. Which strategy is most likely to produce a controlled transition?",
        "hint": "A profile change is accumulated over courses, not corrected all at once.",
        "options": [
          {
            "value": "A",
            "label": "Stack every coil directly above the last, then force the final course sharply inward.",
            "feedback": "Concentrating the change at the top creates an abrupt, highly stressed transition."
          },
          {
            "value": "B",
            "label": "Place successive coils slightly inward, integrate each seam, and check the silhouette from multiple views as the clay firms.",
            "feedback": "Small cumulative offsets and repeated profile checks create a supported, gradual inward movement."
          },
          {
            "value": "C",
            "label": "Thin only the outside of the neck until it appears narrower.",
            "feedback": "Removing exterior material alone risks an uneven, weakened wall without reliably moving the profile."
          },
          {
            "value": "D",
            "label": "Attach a separately made wet neck to a bone-dry body.",
            "feedback": "The extreme moisture mismatch makes a sound transition unlikely."
          }
        ],
        "correct": "B"
      }
    ]
  },
  "4": {
    "title": "Slab and geometry",
    "questions": [
      {
        "id": "p4q1",
        "question": "Two identical broad slabs are dried differently. Slab X stays flat between absorbent boards; Slab Y rests uncovered on a nonabsorbent plastic sheet and curls upward at its edges. What is the best-supported explanation?",
        "hint": "Ask which surfaces could lose water and shrink first.",
        "options": [
          {
            "value": "A",
            "label": "Slab Y's exposed top and edges dried sooner than its underside, creating a moisture and shrinkage gradient.",
            "feedback": "Unequal exposure across the slab is consistent with the direction and timing of the curl."
          },
          {
            "value": "B",
            "label": "Plastic always chemically reacts with clay and permanently bends it.",
            "feedback": "The issue is unequal drying against a nonabsorbent surface, not an inevitable chemical reaction."
          },
          {
            "value": "C",
            "label": "Slab X stayed flat because absorbent boards prevent all shrinkage.",
            "feedback": "Boards do not prevent shrinkage; they help make moisture loss and support more even."
          },
          {
            "value": "D",
            "label": "Curling proves the clay was fired too hot.",
            "feedback": "The distortion occurred during drying, before firing."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p4q2",
        "question": "A firm-slab box repeatedly opens along its corner seams. The wall panels are firm leather-hard, but the maker attaches freshly rolled soft coils over very wet slip. What is the best first correction?",
        "hint": "A sound joint depends on the state of both parts, not only on adhesive material.",
        "options": [
          {
            "value": "A",
            "label": "Use even wetter slip so it penetrates the firm slabs.",
            "feedback": "More local water increases mismatch and does not guarantee structural integration."
          },
          {
            "value": "B",
            "label": "Match the attachment clay more closely to the panels' moisture, prepare the surfaces, compress the joint, and dry it evenly.",
            "feedback": "Moisture compatibility plus pressure and compression addresses the joint as a connected structure."
          },
          {
            "value": "C",
            "label": "Apply glaze over the green seam to hold it shut.",
            "feedback": "Glaze is not a greenware structural adhesive and introduces firing risks."
          },
          {
            "value": "D",
            "label": "Make the walls thicker without changing the seam process.",
            "feedback": "Greater wall mass may increase stress while leaving the weak interface unchanged."
          }
        ],
        "correct": "B"
      },
      {
        "id": "p4q3",
        "question": "A paper model shows that a flat wall must curve inward without overlapping. What is the most informative step before cutting the clay slab?",
        "hint": "Resolve the transformation cheaply before the material imposes timing pressure.",
        "options": [
          {
            "value": "A",
            "label": "Add random cuts to the clay until the wall closes.",
            "feedback": "Random cuts prevent repeatability and may create unnecessary seams."
          },
          {
            "value": "B",
            "label": "Develop and test a paper template with a deliberate dart or removed wedge, then transfer the resolved geometry to clay.",
            "feedback": "A paper maquette isolates planar geometry before clay state and joining complicate the problem."
          },
          {
            "value": "C",
            "label": "Roll the slab thinner until it collapses into the curve.",
            "feedback": "Loss of structure is not the same as controlled geometric conversion."
          },
          {
            "value": "D",
            "label": "Wait until the slab is bone dry and bend it then.",
            "feedback": "Bone-dry clay cannot be safely bent into a new curve."
          }
        ],
        "correct": "B"
      }
    ]
  },
  "5": {
    "title": "Components and function",
    "questions": [
      {
        "id": "p5q1",
        "question": "A leather-hard jar lid fits perfectly before firing but becomes difficult to remove after glaze firing. Which redesign is most defensible?",
        "hint": "A fit that survives firing must accommodate more than greenware dimensions.",
        "options": [
          {
            "value": "A",
            "label": "Eliminate all clearance so the lid and gallery shrink into the same position.",
            "feedback": "Zero clearance ignores variation, glaze thickness, and distortion."
          },
          {
            "value": "B",
            "label": "Add measured clearance, keep glaze away from bearing surfaces as appropriate to the tested system, and evaluate a fired test pair.",
            "feedback": "Fired fit must be designed and tested with shrinkage, glaze, and warpage in mind."
          },
          {
            "value": "C",
            "label": "Use a wetter lid on a drier jar so the lid shrinks more tightly.",
            "feedback": "Moisture mismatch increases distortion and cracking risk."
          },
          {
            "value": "D",
            "label": "Sand any glaze-fired lid until it fits, regardless of clay or glaze hazards.",
            "feedback": "Uncontrolled fired-ceramic abrasion can be hazardous and substitutes repair for fit design."
          }
        ],
        "correct": "B"
      },
      {
        "id": "p5q2",
        "question": "A large mug handle survives firing but twists the mug uncomfortably when full. Which prototype change most directly addresses the problem?",
        "hint": "Evaluate the force path between hand, handle, load, and vessel.",
        "options": [
          {
            "value": "A",
            "label": "Test the attachment spacing and handle clearance with a weighted mock-up before remaking.",
            "feedback": "A loaded mock-up reveals leverage, wrist angle, and grip clearance before committing to clay."
          },
          {
            "value": "B",
            "label": "Add decorative texture to the opposite side of the mug.",
            "feedback": "Visual balance does not necessarily correct torque or grip geometry."
          },
          {
            "value": "C",
            "label": "Make the mug wall thicker everywhere.",
            "feedback": "Added mass increases the load and may worsen handling."
          },
          {
            "value": "D",
            "label": "Use brighter glaze on the handle.",
            "feedback": "Color does not change the mechanical relationship causing discomfort."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p5q3",
        "question": "A covered pouring vessel releases liquid in repeated surges even though its spout is open and unobstructed. What feature should be tested first?",
        "hint": "Liquid leaving a closed volume must be replaced by something.",
        "options": [
          {
            "value": "A",
            "label": "A larger foot ring.",
            "feedback": "The foot affects stance, not airflow during pouring."
          },
          {
            "value": "B",
            "label": "A secure air path or vent that allows air to enter as liquid leaves.",
            "feedback": "Inadequate air replacement commonly causes glugging or pulsed flow in a covered vessel."
          },
          {
            "value": "C",
            "label": "A heavier lid with no vent.",
            "feedback": "More weight does not provide the missing airflow and may make handling worse."
          },
          {
            "value": "D",
            "label": "A rougher exterior texture.",
            "feedback": "Exterior texture may affect grip but does not explain the interrupted stream."
          }
        ],
        "correct": "B"
      }
    ]
  },
  "6": {
    "title": "Surface and voice",
    "questions": [
      {
        "id": "p6q1",
        "question": "Four test tiles vary clay body, slip thickness, glaze, and firing schedule simultaneously. One result is excellent. What can you conclude with confidence?",
        "hint": "Ask whether the successful factor can be separated from the other changes.",
        "options": [
          {
            "value": "A",
            "label": "The glaze alone caused the result.",
            "feedback": "Several variables changed, so the glaze's independent effect is unknown."
          },
          {
            "value": "B",
            "label": "The firing schedule alone caused the result.",
            "feedback": "The design cannot isolate firing from clay, slip, or glaze."
          },
          {
            "value": "C",
            "label": "That exact tested combination produced the observed result, but a controlled follow-up is needed to identify which variable mattered.",
            "feedback": "The tile supports reproduction of the combination, not a causal claim about one factor."
          },
          {
            "value": "D",
            "label": "Any clay body will produce the same result if the color looks similar before firing.",
            "feedback": "Clay composition and firing response can substantially change the result."
          }
        ],
        "correct": "C"
      },
      {
        "id": "p6q2",
        "question": "A learner tries to carve crisp sgraffito lines through slip. On one sample the wet surface drags and closes behind the tool; on another the slip flakes away from a very dry body. What is the best next step?",
        "hint": "The technique has a useful timing window between two failure modes.",
        "options": [
          {
            "value": "A",
            "label": "Compare matched samples at several intermediate clay/slip states and record edge quality.",
            "feedback": "A state ladder isolates timing and identifies when the coating is firm enough to cut but still well bonded."
          },
          {
            "value": "B",
            "label": "Add more water to both samples immediately before carving.",
            "feedback": "Rewetting changes local moisture and may worsen dragging or adhesion."
          },
          {
            "value": "C",
            "label": "Fire both samples first and carve through the fired glaze.",
            "feedback": "That is a different and potentially hazardous process, not a timing correction for sgraffito."
          },
          {
            "value": "D",
            "label": "Use a deeper cut regardless of the clay state.",
            "feedback": "More force does not resolve a surface that is either too wet or poorly bonded from dryness."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p6q3",
        "question": "A high-contrast pattern is attractive on a flat test tile but makes the transitions of a finished vessel difficult to read. What is the most productive revision?",
        "hint": "A successful tile is evidence about materials, not automatic proof of compositional fit.",
        "options": [
          {
            "value": "A",
            "label": "Apply more of the same pattern uniformly so the form disappears consistently.",
            "feedback": "Uniformly intensifying the competition does not integrate surface with form."
          },
          {
            "value": "B",
            "label": "Keep the tested material system but vary placement, scale, or density in response to the vessel's major transitions.",
            "feedback": "This preserves verified material behavior while redesigning visual hierarchy around the three-dimensional form."
          },
          {
            "value": "C",
            "label": "Change clay, glaze, pattern, and firing all at once.",
            "feedback": "Multiple simultaneous changes destroy useful evidence and make the next result hard to interpret."
          },
          {
            "value": "D",
            "label": "Judge the vessel only from a close-up photograph of the pattern.",
            "feedback": "Surface–form integration must be evaluated across the whole object and from multiple views."
          }
        ],
        "correct": "B"
      }
    ]
  },
  "7": {
    "title": "Fire and diagnose",
    "questions": [
      {
        "id": "p7q1",
        "question": "A crack is visible after glaze firing. Glossy glaze has flowed into and rounded the crack's interior. Which inference is best supported?",
        "hint": "Use the glaze as a timestamp, but do not claim more precision than it provides.",
        "options": [
          {
            "value": "A",
            "label": "The crack was open early enough in the glaze firing for molten glaze to enter it.",
            "feedback": "Glaze inside the crack supports formation before or during glaze melting, though it does not by itself identify the original cause."
          },
          {
            "value": "B",
            "label": "The crack definitely formed after the kiln was completely cool.",
            "feedback": "A post-cooling crack would not normally contain glaze that had melted and flowed into it."
          },
          {
            "value": "C",
            "label": "The crack was caused only by glaze colorant.",
            "feedback": "Glaze presence helps with timing but does not isolate the cause."
          },
          {
            "value": "D",
            "label": "The crack proves the kiln controller was inaccurate.",
            "feedback": "The crack provides no direct evidence about controller accuracy."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p7q2",
        "question": "Pinholes appear mainly on thickly glazed areas, while thinner areas of the same pots are smooth. What is the best next diagnostic test?",
        "hint": "Change the variable that matches the location pattern while holding the rest stable.",
        "options": [
          {
            "value": "A",
            "label": "Apply the same glaze in controlled thickness bands on matched tiles and fire them together in documented locations.",
            "feedback": "The test directly examines the association between application thickness and pinholing while controlling other factors."
          },
          {
            "value": "B",
            "label": "Change clay body, glaze recipe, bisque schedule, and firing atmosphere simultaneously.",
            "feedback": "Multiple changes prevent the result from discriminating among causes."
          },
          {
            "value": "C",
            "label": "Add a second thick coat only where pinholes occurred.",
            "feedback": "Increasing the associated variable without a comparison may worsen the fault and yields weak evidence."
          },
          {
            "value": "D",
            "label": "Conclude that every pinhole is caused by kiln dirt.",
            "feedback": "The thickness-location pattern argues for testing application and gas escape rather than assuming a universal cause."
          }
        ],
        "correct": "A"
      },
      {
        "id": "p7q3",
        "critical": true,
        "question": "Small sharp flakes of glaze are detaching from the rim of a fired cup. What is the safest and most appropriate response?",
        "hint": "Consider both glaze–body fit and the consequence of loose sharp material.",
        "options": [
          {
            "value": "A",
            "label": "Use the cup until enough glaze flakes off to stabilize it.",
            "feedback": "Detaching glaze can be sharp and signals a potentially serious fit problem."
          },
          {
            "value": "B",
            "label": "Coat the rim with household sealant and call it food safe.",
            "feedback": "An unverified coating does not correct glaze fit or establish safe food use."
          },
          {
            "value": "C",
            "label": "Remove the cup from use, document the shivering pattern, and consult the studio or glaze specialist before controlled fit testing.",
            "feedback": "Isolation and conservative escalation protect the user and the kiln workflow while evidence is gathered."
          },
          {
            "value": "D",
            "label": "Refire it hotter without checking the clay or glaze limits.",
            "feedback": "An unsupervised hotter firing may be unsafe and does not reliably correct fit."
          }
        ],
        "correct": "C"
      }
    ]
  },
  "8": {
    "title": "Independent practice",
    "questions": [
      {
        "id": "p8q1",
        "question": "Five capstone vessels share a clay body and glaze, but their construction methods, silhouettes, scales, and conceptual aims are unrelated. What is the strongest revision strategy?",
        "hint": "Material sameness alone is not necessarily a governing series logic.",
        "options": [
          {
            "value": "A",
            "label": "Add the same stamped logo to every vessel.",
            "feedback": "A repeated mark creates branding, not a substantive formal or conceptual relationship."
          },
          {
            "value": "B",
            "label": "Select one inquiry, identify two or three constants, and remake or remove pieces so one meaningful variable can develop across the group.",
            "feedback": "A shared question and controlled constants allow each piece to contribute a distinct, comparable answer."
          },
          {
            "value": "C",
            "label": "Keep all five because anything made by one artist is automatically a coherent series.",
            "feedback": "Authorship alone does not make relationships legible within a collection."
          },
          {
            "value": "D",
            "label": "Change every work to a different glaze color to emphasize individuality.",
            "feedback": "Additional variation is likely to make the already-unrelated group less coherent."
          }
        ],
        "correct": "B"
      },
      {
        "id": "p8q2",
        "question": "An artist admires a contemporary vessel's distinctive silhouette, black-and-red finish, and raised nodules. Which response best demonstrates precedent research without copying?",
        "hint": "Transfer the problem or relationship, not the recognizable package of solutions.",
        "options": [
          {
            "value": "A",
            "label": "Reproduce the silhouette and nodules but use blue instead of red.",
            "feedback": "A color substitution does not meaningfully transform the source's distinctive visual solution."
          },
          {
            "value": "B",
            "label": "Omit the artist's name so viewers judge the new object independently.",
            "feedback": "Removing attribution makes the ethical and research problem worse."
          },
          {
            "value": "C",
            "label": "Identify an underlying principle—such as gesture created through profile—then test that principle with a different structure, silhouette, surface, and contextual source while crediting the precedent.",
            "feedback": "This converts close looking into an independently developed investigation and preserves attribution."
          },
          {
            "value": "D",
            "label": "Avoid looking at any existing work so influence becomes impossible.",
            "feedback": "Independent practice requires informed precedent research, not isolation from the field."
          }
        ],
        "correct": "C"
      },
      {
        "id": "p8q3",
        "question": "During critique, one viewer says, “I dislike rough surfaces, so you should glaze all of these.” What is the best use of this feedback?",
        "hint": "Identify the kind of claim before deciding whether it should control the work.",
        "options": [
          {
            "value": "A",
            "label": "Treat it as a universal technical requirement and glaze everything.",
            "feedback": "The statement is a personal preference, not evidence of technical failure."
          },
          {
            "value": "B",
            "label": "Ignore the entire critique because one comment was subjective.",
            "feedback": "Other observations may still reveal how the work is read or used."
          },
          {
            "value": "C",
            "label": "Label it as preference, ask what visible effect the rough surface creates, and revise only if evidence shows that effect conflicts with the series inquiry or intended use.",
            "feedback": "The response separates taste from observation while remaining open to relevant formal or functional evidence."
          },
          {
            "value": "D",
            "label": "Defend the surface by explaining how long it took to make.",
            "feedback": "Effort does not establish whether the surface supports the work's intent or use."
          }
        ],
        "correct": "C"
      }
    ]
  }
};
  window.HANDBUILDING_QUIZZES = QUIZZES;

  const shell = document.querySelector('[data-quiz]');
  if (!shell) return;
  const phase = document.body.dataset.phase;
  const quiz = QUIZZES[phase];
  if (!quiz) return;
  const target = shell.querySelector('[data-quiz-body]');
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const intro = shell.querySelector('.quiz-intro');
  if (intro) intro.textContent = 'One question at a time. Use Previous and Next to review your choices, then check all answers for your results.';

  target.innerHTML = `<form class="quiz-form" novalidate>
    <p class="quiz-step" data-quiz-step aria-live="polite"></p>
    ${quiz.questions.map((q, index) => `
      <fieldset class="quiz-question" data-question="${escape(q.id)}" ${index ? 'hidden' : ''}>
        <legend class="sr-only">Question ${index + 1} of ${quiz.questions.length}: ${escape(q.question)}</legend>
        <p class="module-index">Question ${index + 1} of ${quiz.questions.length}</p>
        <h3 class="quiz-prompt">${escape(q.question)}</h3>
        ${q.options.map(o => `<label class="quiz-option"><input type="radio" name="${escape(q.id)}" value="${escape(o.value)}"><span>${escape(o.value)} · ${escape(o.label)}</span></label>`).join('')}
        <details class="quiz-hint"><summary>Need a hint?</summary><p>${escape(q.hint)}</p></details>
      </fieldset>`).join('')}
    <div class="quiz-actions" data-quiz-actions>
      <button class="button secondary" type="button" data-quiz-prev>← Previous</button>
      <button class="button" type="button" data-quiz-next>Next →</button>
      <button class="button" type="submit" data-quiz-submit hidden>Check answers</button>
    </div>
    <p class="quiz-result review" data-quiz-message role="status" aria-live="polite"></p>
    <section class="quiz-summary" data-quiz-summary hidden tabindex="-1" aria-label="Quiz results"></section>
    <button class="button secondary quiz-restart" type="button" data-quiz-reset hidden>Try again</button>
  </form>`;

  const form = target.querySelector('form');
  const fields = [...form.querySelectorAll('.quiz-question')];
  const step = form.querySelector('[data-quiz-step]');
  const actions = form.querySelector('[data-quiz-actions]');
  const previous = form.querySelector('[data-quiz-prev]');
  const next = form.querySelector('[data-quiz-next]');
  const submit = form.querySelector('[data-quiz-submit]');
  const message = form.querySelector('[data-quiz-message]');
  const summary = form.querySelector('[data-quiz-summary]');
  const restart = form.querySelector('[data-quiz-reset]');
  let current = 0;

  function focusView(element) {
    if (!element) return;
    element.focus({preventScroll:true});
    window.scrollTo({top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - 112), behavior:'auto'});
  }

  function showQuestion(index, focus = true) {
    current = Math.max(0, Math.min(fields.length - 1, index));
    fields.forEach((field, i) => { field.hidden = i !== current; });
    step.textContent = `Question ${current + 1} of ${fields.length}`;
    previous.hidden = current === 0;
    next.hidden = current === fields.length - 1;
    submit.hidden = current !== fields.length - 1;
    message.textContent = '';
    if (focus) focusView(fields[current].querySelector('.quiz-prompt'));
  }
  fields.forEach(field => field.querySelector('.quiz-prompt').tabIndex = -1);
  previous.addEventListener('click', () => showQuestion(current - 1));
  next.addEventListener('click', () => showQuestion(current + 1));

  function showResults(answers, persist = true, focus = true) {
    let score = 0;
    let criticalMiss = false;
    const rows = quiz.questions.map((q, index) => {
      const selected = answers[q.id];
      const correct = selected === q.correct;
      if (correct) score++;
      if (q.critical && !correct) criticalMiss = true;
      const selectedOption = q.options.find(o => o.value === selected);
      const correctOption = q.options.find(o => o.value === q.correct);
      return `<article class="quiz-summary-item ${correct ? 'is-correct' : 'needs-review'}">
        <p class="module-index">Question ${index + 1} · ${correct ? 'Correct' : 'Review'}</p>
        <h4>${escape(q.question)}</h4>
        <p><strong>Your answer:</strong> ${selectedOption ? `${escape(selected)} · ${escape(selectedOption.label)}` : 'Not answered'}</p>
        <p><strong>Correct answer:</strong> ${escape(q.correct)} · ${escape(correctOption.label)}</p>
        <p class="quiz-explanation">${escape(correctOption.feedback)}</p>
      </article>`;
    });
    const pass = score >= Math.ceil(quiz.questions.length * 2 / 3) && !criticalMiss;
    const note = criticalMiss ? 'Review the safety-critical question before continuing.' : pass ? 'Strong result. Continue when the practical work also meets its rubric.' : 'Review the explanations and try once more.';
    summary.innerHTML = `<p class="kicker">Your results</p><h3>${score} of ${quiz.questions.length} correct</h3><p class="quiz-outcome">${escape(note)}</p><div class="quiz-summary-list">${rows.join('')}</div>`;
    fields.forEach(field => field.hidden = true);
    step.hidden = true;
    actions.hidden = true;
    message.textContent = '';
    summary.hidden = false;
    restart.hidden = false;
    if (focus) focusView(summary);
    if (persist) {
      try {
        const key = 'handbuilding-course-v1';
        const state = JSON.parse(localStorage.getItem(key) || '{}');
        state.quizzes ||= {};
        state.quizzes[phase] = {score,total:quiz.questions.length,passed:pass,answers,updatedAt:new Date().toISOString()};
        localStorage.setItem(key, JSON.stringify(state));
      } catch (_) {}
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const unanswered = quiz.questions.find(q => !form.elements[q.id].value);
    if (unanswered) {
      showQuestion(quiz.questions.indexOf(unanswered));
      message.textContent = 'Choose an answer for this question before checking.';
      return;
    }
    showResults(Object.fromEntries(quiz.questions.map(q => [q.id, form.elements[q.id].value])));
  });
  restart.addEventListener('click', () => {
    form.reset();
    summary.hidden = true;
    restart.hidden = true;
    step.hidden = false;
    actions.hidden = false;
    showQuestion(0);
    try {
      const key = 'handbuilding-course-v1';
      const state = JSON.parse(localStorage.getItem(key) || '{}');
      if (state.quizzes) delete state.quizzes[phase];
      localStorage.setItem(key, JSON.stringify(state));
    } catch (_) {}
  });
  try {
    const state = JSON.parse(localStorage.getItem('handbuilding-course-v1') || '{}');
    const saved = state.quizzes?.[phase];
    if (saved?.answers) {
      for (const [id, value] of Object.entries(saved.answers)) {
        const input = form.querySelector(`[name="${id}"][value="${value}"]`);
        if (input) input.checked = true;
      }
      showResults(saved.answers, false, false);
    } else showQuestion(0, false);
  } catch (_) { showQuestion(0, false); }
})();
