import type { Subject } from '../types';

/**
 * "UX & UI for AI" — a path drawn from two books and reframed as its own thing:
 *   - Lew & Schumacher, "AI and UX: Why Artificial Intelligence Needs User
 *     Experience" (Apress, 2020)
 *   - Stackowiak & Kelly, "Design Thinking in Software and AI Projects" (Apress,
 *     2020)
 * Cross-links into the existing Design Thinking, User Research, Interaction
 * Design & Usability, and Visual Design Basics subjects.
 */
export const uxForAiSubject: Subject = {
  id: 'ux-for-ai',
  title: 'UX & UI for AI',
  description:
    'Designing the experience layer around AI — setting expectations, earning trust, handling a model that is confidently wrong, and running the workshops that decide what to build.',
  icon: '🤖',
  color: '#E76F51',
  levels: [
    {
      id: 'why-ai-needs-ux',
      title: 'Why AI Needs UX',
      steps: [
        {
          id: 'the-last-mile-problem',
          title: 'The Last-Mile Problem',
          summary:
            'AI teams pour effort into model accuracy, but adoption is won or lost in the thin layer of experience wrapped around it.',
          content: [
            'Artificial intelligence has been through this before. The field boomed in the late 1950s and collapsed a decade later when funding was cut almost entirely; a second wave around robotics crested and crashed in the 1980s. Each "AI winter" had less to do with the technology\'s ceiling than with a gap between what was promised and what people actually experienced. Today\'s wave carries the same risk: the benefits are real, but so is the public hesitance, and a product that disappoints on first contact does lasting damage.',
            'The pattern Lew and Schumacher describe in "AI and UX" is consistent — a team gets the model working, declares victory, and gives little thought to how an end user reaches the benefit. People are impatient. If the payoff is not visible almost immediately, they will not invest the attention needed to appreciate what the model can do. A bad experience with one AI feature "poisons the well": the user does not just abandon that feature, they paint a whole class of AI products with the same brush.',
            'It helps to treat the model as one element in an ecosystem rather than the product itself. A common AI output is a bare number — a fraud score of 0.86, a confidence of 0.72 — which means nothing to the person on the other end. Everything between that number and a useful outcome (the message, the timing, the wording, the next action offered) is design work, and it is usually where adoption is decided. The model is the engine; the experience is the car built around it.',
            'This is the same failure mode UX has watched in ordinary software for decades — capable products that go unused because the path to value was too steep — now repeating with higher stakes and less scrutiny, because reviewers who would normally push back tend to defer on anything labelled "AI". Naming the last mile as a design problem, and staffing it, is the first move.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'According to "AI and UX", why does a single bad experience with an AI feature do outsized damage?',
              options: [
                'It permanently corrupts the underlying model',
                'Users tend to generalise the disappointment to a whole category of AI products, not just that one feature',
                'It automatically lowers the model\'s accuracy score',
                'It only matters if the feature was expensive to build',
              ],
              correctIndex: 1,
              explanation:
                'The book calls this "poisoning the well" — a poor first experience makes people distrust and avoid AI-enabled products broadly, not only the one that let them down.',
            },
            {
              id: 'q2',
              question: 'What does the "last-mile problem" refer to for an AI product?',
              options: [
                'The final stage of training a model on the last batch of data',
                'The gap between a working model and a usable outcome for a real person — messaging, timing, and next actions',
                'The physical distance between a data centre and its users',
                'The last round of code review before release',
              ],
              correctIndex: 1,
              explanation:
                'A model can be accurate and still fail in practice if the experience that carries its output to the user — wording, timing, calls to action — is neglected.',
            },
          ],
        },
        {
          id: 'utility-usability-trust',
          title: 'Utility, Usability, and Trust',
          summary:
            'Every product rests on utility, then usability, then aesthetics; AI adds trust as a factor that can sink an otherwise sound design.',
          content: [
            '"AI and UX" frames any product\'s experience as a small stack. Utility comes first: does the thing do something the user actually needs — is there a real functional benefit, a fit for purpose? Usability comes next: can the user get that function done efficiently, effectively, and safely? Aesthetics and emotion come last: given equivalent utility and usability, people prefer — and, through the aesthetic-usability effect, even rate as more usable — the version that looks better. Visual polish is real value, but it goes on top of a sound foundation, not instead of one (this is the same ordering taught in Visual Design Basics).',
            'AI introduces a factor that cuts across all three: trust. People have a strikingly low tolerance for mistakes made by machines. An internal study the authors cite found humans dial a single digit correctly about 98% of the time — yet nobody says "this phone is broken" when they misdial, they say "I fat-fingered it". Hold a voice assistant to that same 98% wake-word accuracy and the errors read as "this thing is useless". The identical error rate is forgiven in a person and condemned in a system.',
            'Because of that asymmetry, an AI product can be useful and usable and still be abandoned if users do not trust its output. Alexa keeps a narrow foothold — timers, weather, news — precisely because those tasks are reliable; the tens of thousands of skills that overreach get deleted fast. Trust is not a screen you design; it is the cumulative result of utility and usability holding up over repeated use.',
            'Trust also connects to brand. Marketing can sell the sizzle — "powerful AI engine" — but the user only believes it once they experience the steak. When the promise outruns the reality, trust erodes and the brand takes the hit. For an AI feature that means being conservative about what you claim it can do, because the product has to deliver on the claim every time the user checks.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'In the utility / usability / aesthetics stack, where does visual design sit?',
              options: [
                'First — nothing else matters if it looks wrong',
                'Last — applied on top of a sound foundation of utility and usability, not as a substitute for them',
                'It is not part of the stack at all',
                'Level with utility, since both are equally fundamental',
              ],
              correctIndex: 1,
              explanation:
                'The book is explicit that graphical treatment comes only after the interaction model works; the aesthetic-usability effect adds value but "only takes a product so far".',
            },
            {
              id: 'q2',
              question: 'Why does the "fat-finger" phone-dialling example matter for AI design?',
              options: [
                'It shows phones are more reliable than AI',
                'It shows people forgive their own errors but condemn a machine for the same error rate, so trust is fragile for AI',
                'It proves 98% accuracy is always good enough',
                'It demonstrates that voice input is inherently unreliable',
              ],
              correctIndex: 1,
              explanation:
                'The asymmetry in how people judge human vs. machine mistakes means an AI product needs a higher bar — and deliberate trust-building — than its raw accuracy number suggests.',
            },
          ],
        },
      ],
    },
    {
      id: 'designing-for-a-probabilistic-system',
      title: 'Designing for a Probabilistic System',
      steps: [
        {
          id: 'setting-expectations',
          title: 'Setting Expectations',
          summary:
            'The interface has to tell the user what the system can do and how well it does it, before they rely on it.',
          content: [
            'A model produces a probability, not a verdict — and the design decision is what the user sees in its place. Lew and Schumacher use a credit-card example: the model returns 0.86, above the 0.8 fraud threshold. One team ships "WARNING. POTENTIAL FRAUD DETECTED ABOVE 0.80. CODE F00BE1DB". Another spends time on the interaction and ships "To authorise this purchase, reply YES." Same model output; completely different product. The work that matters is on what touches the user.',
            'The Microsoft and University of Washington "Guidelines for Human-AI Interaction" — a vetted set of 18 rules the book reproduces — open with two that are really about expectation-setting. Make clear what the system can do, and make clear how well it can do it: help the user understand the system\'s scope and how often it is likely to be wrong. A user who knows a feature is a helpful guess behaves very differently from one who assumes it is authoritative, and the interface is where that framing is set.',
            'Expectations are also shaped by onboarding, and by the fact that almost nothing is truly intuitive. The authors are blunt that "natural gestures are a myth" — swipe and pinch had to be taught at scale through television advertising. A probabilistic feature that behaves unlike the deterministic software around it needs the same deliberate introduction: a first-run explanation, a worked example, a low-stakes place to try it. User Research covers how to learn what that introduction should say.',
            'Concretely: name the feature\'s job in plain language, state its limits where the user will meet them rather than buried in a help article, and prefer wording that invites a check over wording that asserts a fact. "This looks like a duplicate — remove it?" ages better than "Duplicate detected."',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What are the first two Microsoft / UW Guidelines for Human-AI Interaction about?',
              options: [
                'Choosing a colour palette and a typeface',
                'Making clear what the system can do, and how well it can do it',
                'Logging every model prediction for audit',
                'Getting the model above 99% accuracy before launch',
              ],
              correctIndex: 1,
              explanation:
                'Guidelines 1 and 2 are expectation-setting: help users understand the system\'s capabilities and its likely error rate so they calibrate how much to rely on it.',
            },
            {
              id: 'q2',
              question: 'Why does the book prefer "This looks like a duplicate — remove it?" over "Duplicate detected"?',
              options: [
                'It is shorter',
                'It frames a probabilistic result as a checkable suggestion rather than an asserted fact, which fits how the model actually works',
                'It avoids the word "duplicate"',
                'Questions always test better than statements',
              ],
              correctIndex: 1,
              explanation:
                'Wording that invites a check matches a model that is confident but not certain, and keeps the user in the loop instead of asking them to trust an assertion.',
            },
          ],
        },
        {
          id: 'designing-for-the-wrong-answer',
          title: 'Designing for the Wrong Answer',
          summary:
            'Assume the model will be confidently wrong sometimes, and design the recovery path as carefully as the happy path.',
          content: [
            'A probabilistic system fails differently from a bug: it produces a plausible, well-formatted, wrong result and no error is raised. Several of the Human-AI Interaction guidelines exist for exactly this moment. Support efficient correction — make it easy to edit, refine, or recover when the system is wrong. Scope services when in doubt — when the model is unsure of the user\'s intent, ask a clarifying question or degrade gracefully rather than guessing confidently. Make clear why the system did what it did — give the user access to a reason, not just a result.',
            'The shape of the recovery depends on the cost of each kind of error. A false positive in spam filtering (a real email hidden) and a false negative (a spam email shown) are not equal, and the interface should reflect which one hurts more — for instance, sending "probably spam" to a visible, recoverable folder rather than deleting it. Deciding, per feature, what a wrong answer costs and who pays for it is a core AI-UX task.',
            'Feedback belongs in the failure path too. Guideline 15, encourage granular feedback, means letting the user tell the system what was wrong during normal use — a thumbs-down that captures which part of the output missed, not just that it missed. That signal is both a better recovery for this user and training data for the next version, covered in "Garbage In, Garbage Out".',
            'A useful test during design: for every AI-generated output on the screen, ask "what does the user do when this is wrong, and how many steps does it take?" If the answer is "start over" or "contact support", the feature is not finished. This is the same rigour Interaction Design & Usability applies to error states, extended to outputs that look correct.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the guideline "scope services when in doubt" ask a system to do when it is uncertain about the user\'s intent?',
              options: [
                'Pick the most likely option and proceed confidently',
                'Ask a disambiguating question or gracefully degrade, rather than guessing',
                'Shut the feature off entirely',
                'Log the uncertainty and do nothing visible',
              ],
              correctIndex: 1,
              explanation:
                'When confidence is low, the guideline favours engaging the user to disambiguate, or offering a reduced-but-safe response, over a confident guess that may be wrong.',
            },
            {
              id: 'q2',
              question: 'Why does the cost of a false positive vs. a false negative matter to the UI design?',
              options: [
                'It does not — both are just errors',
                'The more harmful error type should shape the recovery path, e.g. routing "probably spam" to a recoverable folder instead of deleting it',
                'It only matters to the data science team',
                'False negatives are always worse than false positives',
              ],
              correctIndex: 1,
              explanation:
                'Designing the failure path means weighing which mistake hurts the user more and making that one cheap to catch and undo.',
            },
          ],
        },
      ],
    },
    {
      id: 'proactivity-trust-and-the-creepy-line',
      title: 'Proactivity, Trust & the Creepy Line',
      steps: [
        {
          id: 'the-weirdness-scale',
          title: 'The Weirdness Scale',
          summary:
            'When AI acts on its own initiative, a rough continuum from helpful to creepy keeps the team honest about which actions to take.',
          content: [
            'Once a system can recognise patterns in someone\'s behaviour, it can act without being asked — and that is where products get uncomfortable. Lew and Schumacher propose a "weirdness scale": a deliberately imprecise continuum from clearly helpful to clearly creepy, used as a team reflection tool during design. Their example — a car that notices traffic on your usual route and offers a detour sits at the helpful end; the same car noticing you visit the gym every other day and offering directions there sits somewhere uncomfortable; extrapolate to places you would rather it not mention and you are off the scale.',
            'The mechanics are worth naming. A trigger is the moment a pattern is recognised and the system is ready to offer something. Guardrails are the boundaries the team decides in advance about which triggers get acted on and which are left alone. Patterns come from two kinds of signal: explicit (the user typed an address, set a preference) and passive (the car parked in a shopping district for 45 minutes). Passive signals are the richer source and the riskier one.',
            'The scale is not a metric; it is a way to force the conversation. Running candidate triggers past it during design surfaces the boundaries early, gets the team to write down guardrails, and — importantly — establishes that some things the model could predict are things the product chooses not to say.',
            'There is a feedback dividend. Every time a user explicitly dismisses a proactive suggestion — presses or says "No" — that is a signal the action was over the line for them. Capturing those refusals both tunes the model and calibrates where the team drew the guardrails.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the "weirdness scale" used for?',
              options: [
                'Measuring model accuracy to three decimal places',
                'A team reflection tool: a rough helpful-to-creepy continuum for judging which proactive AI actions are appropriate',
                'Ranking users by how much data they generate',
                'A/B testing two visual designs',
              ],
              correctIndex: 1,
              explanation:
                'It is deliberately imprecise — its value is forcing the team to discuss appropriateness and write down guardrails, not to produce a number.',
            },
            {
              id: 'q2',
              question: 'In this model, what is a "trigger"?',
              options: [
                'A bug that crashes the AI feature',
                'The moment a pattern is recognised and the system is ready to offer a recommendation',
                'A user tapping the app icon',
                'The event that starts model training',
              ],
              correctIndex: 1,
              explanation:
                'A trigger is a recognised pattern that could prompt a proactive action; guardrails are the team\'s advance decisions about which triggers to act on.',
            },
          ],
        },
        {
          id: 'transparency-and-control',
          title: 'Transparency & Control',
          summary:
            'Give the user visible controls over what the system watches and does, and be honest about when its behaviour changes.',
          content: [
            'Several Human-AI Interaction guidelines are about keeping the user in charge of a system that adapts. Provide global controls: let the user customise what the AI monitors and how it behaves, in one findable place. Notify users about changes: when the system adds or updates a capability, say so — silent change is where "is it always listening?" fear comes from. Update and adapt cautiously: limit disruptive shifts in behaviour between versions, because a feature that worked yesterday and behaves differently today feels unreliable even if it is technically better.',
            'Timing is part of transparency. Guideline 3, time services based on context, says act or interrupt based on what the user is doing right now — a suggestion popped mid-task in a clinical record is not just annoying, it can cause the user to forget to enter something critical. Guideline 12, remember recent interactions, lets the user refer back ("no, the other one") instead of restating context the system just had.',
            'Then there are the social guidelines: match relevant social norms so the experience meets cultural expectations, and mitigate social biases so the system\'s language and behaviour do not reinforce unfair stereotypes. These are not polish — a system that violates a norm or echoes a bias loses trust in a way that is hard to win back.',
            'The through-line is that "Big Brother" unease is mostly a design problem, not a surveillance fact. Visible controls, honest change notes, conservative updates, and well-timed interventions are what let a proactive system feel like an assistant rather than a watcher.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does "notify users about changes" matter for trust?',
              options: [
                'It is a legal requirement in all regions',
                'Silent changes in an adaptive system\'s behaviour are a main source of "is it spying on me?" unease; disclosure defuses it',
                'Users enjoy reading changelogs',
                'It lets the team skip usability testing',
              ],
              correctIndex: 1,
              explanation:
                'When capabilities change without a word, users fill the gap with suspicion; announcing changes keeps an adaptive product feeling accountable.',
            },
            {
              id: 'q2',
              question: 'What does "time services based on context" (Guideline 3) guard against?',
              options: [
                'The model running too slowly',
                'Interrupting the user at a bad moment — e.g. distracting someone mid-task so they forget a critical step',
                'Showing the wrong language',
                'Collecting too much data',
              ],
              correctIndex: 1,
              explanation:
                'A correct suggestion delivered at the wrong moment can do real harm; the guideline ties the timing of AI actions to the user\'s current task and environment.',
            },
          ],
        },
      ],
    },
    {
      id: 'research-for-ai-products',
      title: 'Research for AI Products',
      steps: [
        {
          id: 'users-environments-tasks',
          title: 'Users, Environments, and Tasks',
          summary:
            'Before designing an AI feature, understand who it is for, where it is used, and the real steps it has to fit into.',
          content: [
            '"AI and UX" reduces user-centred design to three things worth documenting: the users (their goals, knowledge, skills, attitudes — often captured as personas, ideally more than one), the environments (where and under what conditions the product is used — noise, lighting, time pressure, whether hands are free), and the tasks (the actual steps people take to reach a goal, as a task analysis or journey map). Few teams write these down; the ones that do design better AI.',
            'Environment is the element AI teams underrate. The authors\' case: France\'s SNCF trained a ticket-booking chatbot on transcripts of real ticket-window conversations, where impatient queues had trained travellers to be terse and precise. In testing, users faced with a friendly blank chat box opened with "Hi, I\'d like to buy a ticket" and browsed — "what times are available?" — because a chat window has no queue behind it. The model was fine; the environment of use had changed the interaction, and only testing caught it.',
            'Tasks gain a wrinkle with AI. A conventional product\'s use cases are defined by the team; an AI system that learns can surface use cases nobody scoped — the model infers, from screens viewed and errors hit, where help might be wanted. Those inferences are directionally useful and still need to be checked against real users, because a plausible pattern is not a validated need.',
            'Research here also has veto power. The book is candid that after interviewing and observing users of an electronic health record, a team might conclude the proposed chatbot is the wrong solution and users would be better served another way. Discovering that early is a good outcome, not a failed study. The interview and observation techniques for getting there live in User Research.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What went wrong with the SNCF ticket-booking chatbot?',
              options: [
                'The model\'s accuracy was too low',
                'It was trained on terse ticket-window transcripts, but users treated the relaxed chat environment conversationally and browsed instead of stating a precise request',
                'It only supported one language',
                'The servers could not handle the load',
              ],
              correctIndex: 1,
              explanation:
                'The environment of use — no impatient queue behind a chat box — changed how people interacted, so behaviour modelled from the ticket window did not transfer.',
            },
            {
              id: 'q2',
              question: 'How do tasks differ for an AI-enabled product compared with conventional software?',
              options: [
                'They do not differ at all',
                'A learning system can surface use cases the product team never scoped, which then have to be validated with real users',
                'AI products have no tasks, only outputs',
                'Tasks must all be defined by the model, not the team',
              ],
              correctIndex: 1,
              explanation:
                'AI introduces "AI-originated use cases" inferred from behaviour; they are a starting point that still needs checking against actual user needs.',
            },
          ],
        },
        {
          id: 'garbage-in-garbage-out',
          title: 'Garbage In, Garbage Out',
          summary:
            'A model is only as good as its data, and the interface is what shapes the data the next version learns from.',
          content: [
            'Assume the algorithm works; the question becomes what it was fed. "AI and UX" likens it to Formula One — a strong engine still underperforms on low-grade fuel, a poor pit crew, an unskilled driver. Data is AI\'s fuel, and it is often bought or repurposed from somewhere it "was not perfect, but good enough", far from the people who collected it. UX researchers have an advantage here: they know first-hand that data drawn from human behaviour is messy — question wording, missing cells, and the context of collection all leave marks.',
            'The book offers a checklist for any dataset before you trust it to train a feature: where did it come from; what was the collection method; if it is survey data, what assumptions and conditions applied; were any values imputed (missing cells filled algorithmically); what other datasets could be joined for context; and what do subject-matter experts know about it that is not in the file. Weak answers are early warnings.',
            'Actively solicited data (a survey, a rating) and passively acquired data (dwell time, a route taken) have different properties and different failure modes, and a feature built on one should not silently assume the other. Knowing which kind is driving a prediction tells you how much to trust it and how to explain it.',
            'The design connection is the feedback loop. Every correction, dismissal, and thumbs-down the interface collects is a training signal for the next model. If the UI makes it hard to correct a wrong answer (see "Designing for the Wrong Answer"), the model is starved of exactly the data that would fix it. Designing good feedback affordances is a data-quality decision as much as a usability one.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Which question does the book NOT list as part of evaluating a training dataset?',
              options: [
                'Where did the dataset come from and how was it collected?',
                'Were any values imputed (missing cells filled algorithmically)?',
                'What is the model\'s parameter count?',
                'What do subject-matter experts know about it that is not in the file?',
              ],
              correctIndex: 2,
              explanation:
                'Parameter count is a property of the model, not the data. The dataset checklist is about provenance, collection method, imputation, joinable context, and expert knowledge.',
            },
            {
              id: 'q2',
              question: 'How does interface design affect data quality for an AI product?',
              options: [
                'It does not; data quality is purely a back-end concern',
                'The corrections and feedback the UI collects become the next model\'s training signal, so hard-to-use feedback affordances starve the model of fixes',
                'A prettier UI produces more accurate data automatically',
                'Only the colour of error messages matters',
              ],
              correctIndex: 1,
              explanation:
                'The feedback loop runs through the interface — if users cannot easily correct a wrong result, that correction never reaches the model.',
            },
          ],
        },
      ],
    },
    {
      id: 'the-design-thinking-workshop',
      title: 'The Design-Thinking Workshop',
      steps: [
        {
          id: 'framing-the-problem',
          title: 'Framing the Problem',
          summary:
            'A structured workshop turns a vague AI ambition into one agreed problem statement worth solving.',
          content: [
            'Stackowiak and Kelly\'s "Design Thinking in Software and AI Projects" treats the opening phase as its own discipline. Its job is to diverge and then converge on the problem — the first diamond of the Double Diamond, echoing the d.school\'s empathise/define and IDEO\'s desirability/feasibility/viability lenses (all covered in Design Thinking). For an AI project this matters more, because "let\'s use AI" is a solution masquerading as a problem.',
            'Preparation is half the work: define the workshop\'s value and outcomes in advance, set ground rules, and — the authors are firm on this — confirm the right participants will be in the room, meaning people with the domain knowledge and the authority to act, not just whoever was free. A shared tool like the ELMO card ("Enough, Let\'s Move On") keeps discussion from stalling.',
            'The problem-definition methods stack up: How Might We to turn complaints into openings; the Abstraction Ladder to move a problem up toward "why" or down toward "how" until it is the right size; Stakeholder Mapping and Proto-Personas to name who is affected; Rose-Bud-Thorn to surface what is working, what has potential, and what hurts; clustering to find themes. Voting narrows the field.',
            'The phase ends with one problem statement the group commits to — narrow enough to act on, framed around a user need rather than a technology. Everything downstream is measured against it, which is also what stops an AI project from quietly becoming a demo in search of a use.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why do the authors insist on confirming "the right participants" before an AI workshop?',
              options: [
                'To fill every seat in the room',
                'The session needs people with the domain knowledge and the authority to act, or its output cannot be carried forward',
                'Larger groups always produce better ideas',
                'To reduce catering costs',
              ],
              correctIndex: 1,
              explanation:
                'A workshop of whoever was available produces decisions nobody can own; the book ties outcomes directly to having knowledgeable, empowered participants present.',
            },
            {
              id: 'q2',
              question: 'What is the Abstraction Ladder used for in problem definition?',
              options: [
                'Ranking team members by seniority',
                'Moving a problem statement up toward "why" or down toward "how" until it is framed at the right level',
                'Estimating engineering effort',
                'Choosing a colour scheme for the prototype',
              ],
              correctIndex: 1,
              explanation:
                'The ladder adjusts a problem\'s altitude — too abstract and it is unactionable, too concrete and it presupposes a solution.',
            },
          ],
        },
        {
          id: 'prototyping-to-decide',
          title: 'Prototyping to Decide',
          summary:
            'Cheap prototypes — including faked AI — let you test an experience and kill weak ideas before building the model.',
          content: [
            'The second half of the workshop diverges on solutions and converges on one to build. Ideation methods like the Creative Matrix (solutions by user group or channel) force breadth; the Effort/Value Matrix then narrows by plotting each idea against how much it helps and how hard it is. Each surviving idea is written as a testable hypothesis and checked against a Value Map, so the team is honest about what would prove it right or wrong.',
            'Prototyping is about buying certainty cheaply. Start with rough sketches and paper, move to clickable UI only once the interaction model holds, and decide early whether the solution is a configuration of existing applications or a custom build. For AI specifically, a "Wizard of Oz" prototype — a human quietly producing the "AI" responses behind a real-looking interface — lets you test whether the experience is even worth having before a model exists to power it.',
            'When you do test, test the AI content, not just the chrome. It is not enough to check that the buttons work; put representative users on representative tasks and evaluate whether the model\'s actual outputs are trusted, understood, and recoverable when wrong. The book\'s rule is that once the design cycle starts, every part of the experience — including the AI-generated substance — is in play.',
            'Define what success looks like before you build: a concrete, measurable target on a critical task, such as "95% of users complete registration in under two minutes without error". Hitting it in usability testing is what licenses the move to full development. And the standing reminder from "AI and UX" — design begins in the field with research, not in Photoshop; the visual layer goes on last.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is a "Wizard of Oz" prototype for an AI feature?',
              options: [
                'A fully trained model deployed to a small test group',
                'A real-looking interface where a hidden human produces the "AI" responses, used to test the experience before a model exists',
                'A visual mockup with no interactivity',
                'An automated test suite for the model',
              ],
              correctIndex: 1,
              explanation:
                'Faking the intelligence with a person lets the team validate whether the experience is worth having — and how it should behave — before investing in the model.',
            },
            {
              id: 'q2',
              question: 'Why define a measurable success target before building?',
              options: [
                'To satisfy the finance department',
                'A concrete target on a critical task gives usability testing a pass/fail bar and is what licenses moving to full development',
                'Targets are only needed after launch',
                'It replaces the need for user testing',
              ],
              correctIndex: 1,
              explanation:
                'Without a stated target ("95% through registration in two minutes"), testing has no clear finish line and the team cannot know when the design is ready to build.',
            },
          ],
        },
      ],
    },
  ],
};
