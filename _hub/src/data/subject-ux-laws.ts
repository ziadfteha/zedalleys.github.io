import type { Subject } from '../types';

/**
 * "Laws of UX" — a path drawn from Jon Yablonski's "Laws of UX: Using
 * Psychology to Design Better Products & Services" (O'Reilly, 2020). Ten
 * cognitive and behavioural laws, one per step, each with its origin, its
 * design application, and the caveat the book raises. Deliberately avoids the
 * Gestalt grouping laws, which have their own subject.
 */
export const uxLawsSubject: Subject = {
  id: 'ux-laws',
  title: 'Laws of UX',
  description:
    'Ten laws from cognitive and behavioural psychology — Jakob, Fitts, Hick, Miller, Postel, Tesler, Peak-End, von Restorff, Doherty, aesthetic-usability — and how to design with each without misusing it.',
  icon: '⚖️',
  color: '#E76F51',
  levels: [
    {
      id: 'familiarity-and-decisions',
      title: 'Familiarity & Decisions',
      steps: [
        {
          id: 'jakobs-law',
          title: "Jakob's Law",
          summary:
            'Users spend most of their time on other products, so they expect yours to work the way those already do.',
          content: [
            'Jakob\'s Law was stated by usability expert Jakob Nielsen in 2000: users build up an expectation of how interfaces behave from the cumulative time they spend on every other site and app, and they bring that expectation to yours. It rests on the psychology of mental models — the picture a person carries of how a system works, assembled from past experience and applied to anything that looks similar. A good experience is one where the design matches the model the user already has, so they can transfer knowledge instead of relearning.',
            'When a design breaks that model, the cost is real. Yablonski\'s example is Snapchat\'s 2018 redesign, which merged stories and messaging into unfamiliar places overnight, with no opt-in and little beta testing; users revolted publicly, engagement and ad revenue fell, and many left for Instagram. The contrast is Google, which for years has let users preview a redesigned Gmail or YouTube, give feedback, and revert until they are ready — the same change, delivered without the "mental model discordance".',
            'Jakob\'s Law is not an argument that every product should look identical. Conventions exist for good reason — the position of search, footer navigation, a multi-step checkout — because they let people be productive immediately rather than first learning the interface. Novelty has its place, but it should be a deliberate choice made after weighing user needs and context, not a default, and it should be tested with real users before it ships.',
            'The practical rule from the book: start with the common pattern, and depart from it only when you can make a specific case that the change improves the core experience. If you go unconventional, usability-test it to confirm people still understand how it works. This is the same reasoning behind design patterns and conventions in UX Fundamentals.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "What psychological concept is Jakob's Law built on?",
              options: [
                'The magical number seven',
                'Mental models — the picture a user carries of how a system works, transferred from past experience',
                'Operant conditioning',
                'The peak-end rule',
              ],
              correctIndex: 1,
              explanation:
                'People apply a model formed from other products to a new one; a design that matches that model lets them transfer knowledge instead of relearning.',
            },
            {
              id: 'q2',
              question: "Does Jakob's Law mean every website should look the same?",
              options: [
                'Yes — total consistency across the web is the goal',
                'No — it says to start from familiar conventions and depart from them only when a change can be shown to improve the core experience',
                'Yes — novelty is never justified',
                'No — conventions should always be avoided in favour of original patterns',
              ],
              correctIndex: 1,
              explanation:
                'The law favours convention as a strong default because it lets people be productive immediately, but leaves room for deliberate, tested innovation.',
            },
          ],
        },
        {
          id: 'hicks-law',
          title: "Hick's Law",
          summary:
            'The time to make a decision grows with the number and complexity of the choices on offer.',
          content: [
            'Formulated by psychologists William Hick and Ray Hyman in 1952, Hick\'s Law found that reaction time increases logarithmically with the number of stimuli — more options, longer to choose. In interface terms, a busy screen forces the user to process every option and weigh it against their goal before acting, which raises cognitive load: the mental resources spent understanding and operating an interface rather than doing the actual task. Working memory is a small buffer, and when the demands exceed it, details drop, tasks get harder, and people abandon.',
            'The design response is not to strip everything out but to present the right choices at the right time. Google Search shows result-type filters (images, news, videos) only after a query has been entered, keeping the initial task simple. Slack\'s onboarding hides every feature except the message box and introduces the rest progressively through Slackbot, mirroring how people actually learn — building on what they already know.',
            'Hick\'s Law has a limit the book is careful to flag: simplification taken too far becomes abstraction. An interface reduced until it is no longer clear what actions exist or where information lives has traded one kind of difficulty for another. Unlabelled icons are the usual culprit — truly universal icons are rare, the same icon means different things across products, and a heart or star can mean favourite, bookmark, rate, or "featured" depending on the app.',
            'The fix is contextual cues: adding text labels to icons measurably improves both discovery and recognition, especially in navigation. The habit to build is reduction — removing anything that is not helping the user reach their goal — paired with enough signposting that the remaining choices stay legible. Card sorting is the research method for learning how people expect choices to be grouped.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "What does Hick's Law predict about decision time?",
              options: [
                'It stays constant no matter how many options are shown',
                'It increases as the number and complexity of choices increases',
                'It decreases as more options are added',
                'It depends only on the colour of the options',
              ],
              correctIndex: 1,
              explanation:
                'Hick and Hyman found reaction time rises logarithmically with the number of choices, because each must be processed and weighed against the goal.',
            },
            {
              id: 'q2',
              question: "What is the risk of over-applying Hick's Law?",
              options: [
                'The interface becomes too colourful',
                'Simplifying to the point of abstraction — removing so much that it is unclear what actions exist or where information is, as with unlabelled icons',
                'Users memorise the interface too quickly',
                'The page loads too fast to read',
              ],
              correctIndex: 1,
              explanation:
                'Reduction is valuable, but stripped past a point it removes the cues people need; the book recommends contextual clues such as text labels on icons.',
            },
          ],
        },
      ],
    },
    {
      id: 'movement-and-memory',
      title: 'Movement & Memory',
      steps: [
        {
          id: 'fittss-law',
          title: "Fitts's Law",
          summary:
            'The time to hit a target depends on how far away it is and how big it is.',
          content: [
            'Paul Fitts predicted in 1954 that the time to move to a target is a function of the ratio between the distance to it and its width — the further and the smaller, the longer and the less accurate the movement. He expressed the difficulty of a pointing task as an index that treats distance to the target as signal and target width as noise. It is one of the most durable models in human-computer interaction, and it applies to a finger on a screen as much as a cursor on a desktop.',
            'Three consequences follow for interfaces. Touch targets must be large enough to discern and hit accurately: Apple recommends 44x44 pt, Google 48x48 dp, WCAG a minimum of about 1x1 cm — and these are floors, not goals. Targets need generous spacing, because the MIT Touch Lab measured the average finger pad at 10 to 14 mm, so people routinely touch slightly outside a target, and a neighbour placed too close gets hit by mistake. And frequently used targets belong where they are cheap to reach.',
            'Undersized targets do double damage. They slow selection and raise the error rate, and even when the user manages to avoid errors, small targets make the whole interface feel less usable — a perception cost on top of the performance cost.',
            'Screen geometry matters too: edges and corners act as much larger targets because the pointer cannot overshoot them, which is why menu bars and system controls tend to live there. Fitts\'s Law is one of the concrete mechanics behind the usability heuristics in Interaction Design & Usability.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "According to Fitts's Law, what makes a target faster to acquire?",
              options: [
                'Making it a brighter colour',
                'Making it larger and closer to where the pointer or finger already is',
                'Adding an animation to it',
                'Placing it in the exact centre of the screen',
              ],
              correctIndex: 1,
              explanation:
                'Acquisition time is a function of distance and size — bigger and nearer is faster and more accurate; smaller and further is slower and more error-prone.',
            },
            {
              id: 'q2',
              question: 'Why does the book say touch targets need generous spacing, not just adequate size?',
              options: [
                'To make the layout look more balanced',
                'The average finger pad is 10 to 14 mm, so people touch slightly outside targets and a neighbour placed too close gets selected by accident',
                'Spacing improves page load time',
                'Screen readers require it',
              ],
              correctIndex: 1,
              explanation:
                'MIT Touch Lab data shows partial mis-touches are inevitable; spacing between targets is what prevents those mis-touches from triggering the wrong action.',
            },
          ],
        },
        {
          id: 'millers-law',
          title: "Miller's Law",
          summary:
            'People hold about seven chunks in working memory — but the useful lesson is chunking, not the number seven.',
          content: [
            'George Miller\'s 1956 paper "The Magical Number Seven, Plus or Minus Two" observed that short-term memory span in young adults was roughly seven, whether the items were digits, letters, or words — which told him that the number of chunks mattered more than the amount of information in each. Miller used "the magical number seven" rhetorically and was surprised how often it was taken literally. Later research showed memory span is not a constant even measured in chunks, and some studies put the practical average lower.',
            'The law is routinely misused as a hard cap — "no more than seven navigation links", "seven items per menu". That is not what it says. A navigation menu is visible the whole time, so nothing is being memorised; there is no usability gain from trimming it to seven. Nike.com\'s primary navigation runs well past seven items and stays perfectly scannable because it is categorised and separated with whitespace and dividers.',
            'The real value is chunking: grouping related content into visually distinct clusters with clear hierarchy so people can scan, find what matches their goal, and move on. A phone number is the simplest case — an unbroken string of digits is hard to hold, the same digits grouped are easy. A "wall of text" is the same problem at scale, fixed with headings, whitespace, shorter line length, and highlighted key terms.',
            'So chunking organises content for comprehension; it does not dictate how many items may appear. And how many chunks a given person can hold varies with their familiarity with the material and the situation — design for scannability, not for a magic number. This connects to the hierarchy and grouping work in Visual Design Basics.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "How is Miller's Law most commonly misunderstood?",
              options: [
                'As a claim that people cannot read more than seven words per line',
                'As a hard limit of 7±2 on the number of interface elements, e.g. navigation links, that may be shown at once',
                'As a rule about colour contrast',
                'As a statement about long-term memory',
              ],
              correctIndex: 1,
              explanation:
                'Visible menus are not memorised, so limiting them to seven gives no usability benefit; the finding was about chunks in short-term memory, not on-screen item counts.',
            },
            {
              id: 'q2',
              question: "What is the actual design takeaway from Miller's Law?",
              options: [
                'Never show more than seven of anything',
                'Chunk content into distinct groups with clear hierarchy so it is easy to scan and process',
                'Use exactly seven colours in a palette',
                'Limit every form to seven fields',
              ],
              correctIndex: 1,
              explanation:
                'Chunking — like formatting a phone number or breaking up a wall of text — makes content easier to comprehend without imposing a numeric limit.',
            },
          ],
        },
      ],
    },
    {
      id: 'complexity-and-robustness',
      title: 'Complexity & Robustness',
      steps: [
        {
          id: 'teslers-law',
          title: "Tesler's Law",
          summary:
            'Every process has an irreducible core of complexity; the only question is whether the system or the user carries it.',
          content: [
            'Larry Tesler, working on interaction design at Xerox PARC in the mid-1980s, observed that within any application or process there is a certain amount of complexity that cannot be removed — only moved. It ends up in one of two places: absorbed by the designers and developers up front, or pushed into the interface for the user to deal with. This is the Law of Conservation of Complexity.',
            'The humble email shows it. A message needs a sender and a recipient or it cannot be sent — necessary complexity. A modern client absorbs it: it prepopulates the "from" field because it knows your address, and it suggests recipients as you type from your contacts and history. The complexity did not vanish; the team that built the client took it on so the user does not have to.',
            'Checkout is the same pattern at larger scale. "Shipping address same as billing" spares the customer from re-typing; the engineering to support it was assumed by the team. Apple Pay removes address and card entry entirely at the cost of significant work behind the scenes, and Amazon Go removes the checkout step altogether by absorbing an enormous amount of computer-vision and sensor complexity so the customer can just walk out.',
            'The responsibility this implies: deal with inherent complexity during design and development, or you ship it to your users as confusion and frustration. The same caveat as Hick\'s Law applies — do not simplify to the point of abstraction, where unlabelled icons or missing cues leave people without enough information to act.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "What does Tesler's Law (conservation of complexity) claim?",
              options: [
                'All complexity can be designed away with enough effort',
                'Every process has a core of complexity that cannot be reduced, only shifted between the system and the user',
                'Complexity always increases over time',
                'Users prefer complex interfaces',
              ],
              correctIndex: 1,
              explanation:
                'The irreducible complexity has to sit somewhere — the design goal is to absorb it in development so the user does not have to carry it.',
            },
            {
              id: 'q2',
              question: 'How does an email client apply this law when you compose a message?',
              options: [
                'It removes the need for a subject line',
                'It prepopulates the sender and suggests recipients, so the team absorbed the necessary complexity instead of the user',
                'It limits emails to seven recipients',
                'It delays sending to feel more trustworthy',
              ],
              correctIndex: 1,
              explanation:
                'A sender and recipient are required; the client carries that burden through prefilled and suggested fields rather than making the user handle it.',
            },
          ],
        },
        {
          id: 'postels-law',
          title: "Postel's Law",
          summary:
            'Be conservative in what you send, and liberal in what you accept — design that absorbs messy human input.',
          content: [
            'Jon Postel wrote the robustness principle into the early TCP specification in 1981: "be conservative in what you do, be liberal in what you accept from others." Systems that send data should conform strictly to the spec; systems that receive it should accept and make sense of imperfect input as long as the meaning is clear. HTML and CSS inherited this — a browser silently ignores what it does not understand and carries on, which is a large part of why the web scaled.',
            'Applied to UX, the "conservative output" half means what you ship should be reliable and accessible to the widest possible range of people — any device size, input method, assistive technology, or connection speed should get something that works. Responsive web design and progressive enhancement are this principle in practice: everyone gets the core content and functionality, and capability-dependent layers are added on top where they are supported.',
            'The "liberal input" half means accepting whatever form a person\'s input arrives in and translating it to what the system needs. On forms, that starts with asking for as little as possible — every extra required field costs effort, feeds decision fatigue, and lowers completion — and continues with parsing variable input rather than rejecting it: accept the phone number with or without dashes, the name with unusual characters, the pasted card number with spaces.',
            'Being liberal in what you accept widens the surface for things to go wrong, so the book pairs it with design resiliency: plan for text that expands up to 300% when translated, for right-to-left and vertical scripts, for users who raise their default font size. Amazon\'s header, which drops lower-priority links as the font size grows, is the kind of graceful response this calls for. Much of this overlaps with Accessibility Basics.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "What is Postel's Law, applied to design?",
              options: [
                'Send as much data as possible and accept only perfectly formatted input',
                'Produce reliable, accessible output, and accept variable, imperfect human input and translate it for the system',
                'Always reject input that does not match the expected format exactly',
                'Design only for the latest browsers and devices',
              ],
              correctIndex: 1,
              explanation:
                'Conservative output (works for everyone) plus liberal input (accepts messy human entry and normalises it) shifts the burden away from the user.',
            },
            {
              id: 'q2',
              question: 'Why does the book pair "be liberal in what you accept" with design resiliency?',
              options: [
                'Because accepting more input widens the surface for things to go wrong, so you must plan for text expansion, RTL scripts, custom font sizes, and similar variation',
                'Because liberal input makes pages load faster',
                'Because it reduces the number of form fields automatically',
                'Because it is required by TCP',
              ],
              correctIndex: 0,
              explanation:
                'Flexibility invites edge cases; anticipating variation (a translated string 300% longer, a larger default font) is what keeps the flexible design from breaking.',
            },
          ],
        },
      ],
    },
    {
      id: 'emotion-and-attention',
      title: 'Emotion & Attention',
      steps: [
        {
          id: 'peak-end-rule',
          title: 'Peak-End Rule',
          summary:
            'People judge an experience by its most intense moment and its ending, not by the average of every moment.',
          content: [
            'The Peak-End Rule comes from Daniel Kahneman and colleagues. In a 1993 study, participants held a hand in painfully cold water for 60 seconds, and separately for 90 seconds — the last 30 with the water warmed slightly. Given the choice to repeat one, most chose the longer trial, because its ending was less unpleasant and that is what they remembered. Colonoscopy studies found the same: patients rated the whole procedure by its worst moment and its final moment, and a longer procedure with a gentler end was recalled as less aversive.',
            'It is a memory bias: we store an experience as a few emotional snapshots, average the peak and the end, and use that to decide whether we would do it again or recommend it. It is related to the recency effect, where items near the end of a sequence are easiest to recall. The design implication is to find the emotional high points and the last moments of a flow and invest there.',
            'Mailchimp is the book\'s example. The moment before sending a campaign is a peak — all the work, plus fear of a mistake — so instead of a plain confirmation, Freddie the mascot hovers a finger over the button and gets visibly nervous the longer you wait; after sending, a confirmation screen and a hidden high-five reward the effort. Those become the snapshots people keep.',
            'Negative peaks count too, and they weigh more heavily than positive ones. Uber treats waiting as an unavoidable low point and softens it with an animation (idleness aversion), a clear ETA and explanation of how it is calculated (operational transparency), and step-by-step progress (the goal-gradient effect) — enough to keep the wait from becoming the memory. Journey mapping is the technique for locating these moments.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Peak-End Rule say people base their memory of an experience on?',
              options: [
                'The total sum of every moment',
                'The average of every moment, weighted by duration',
                'The most emotionally intense moment and the final moment',
                'Only the very first moment',
              ],
              correctIndex: 2,
              explanation:
                'Kahneman\'s cold-water and colonoscopy studies showed recall is dominated by the peak and the end, largely independent of how long the experience lasted.',
            },
            {
              id: 'q2',
              question: 'How should the Peak-End Rule change where a team invests design effort?',
              options: [
                'Spread effort evenly across every screen',
                'Concentrate on the emotional high points and the final moments of a flow, and soften unavoidable negative peaks like waiting',
                'Focus only on the first screen a user sees',
                'Focus only on error messages',
              ],
              correctIndex: 1,
              explanation:
                'Since peaks and endings form the lasting impression, that is where delight (or damage control, for negative peaks) pays off most.',
            },
          ],
        },
        {
          id: 'von-restorff-effect',
          title: 'Von Restorff Effect',
          summary:
            'Among similar items, the one that stands out is the one people notice and remember.',
          content: [
            'Named for psychiatrist Hedwig von Restorff, whose 1933 isolation study found that an item visually or conceptually distinct from a list of similar items was best remembered. Humans are wired to notice small differences and are drawn to salient, novel, or surprising stimuli — a survival trait that now governs what gets attention in an interface. For designers this is a lever: visual emphasis on colour, shape, size, position, or motion can steer a user toward the primary action or the key piece of information.',
            'The lever only works with restraint. If many elements shout at once, they compete, the emphasis is diluted, and nothing stands out — the interface reads as noise. Emphasis is a budget: spend it on the one or two things that matter on a screen.',
            'There are traps. An element made very prominent can trigger banner blindness — users have learned to ignore anything that looks like an ad, so an over-styled call to action can be filtered out precisely because it stands out the wrong way. And distinctiveness carried only by colour excludes people with colour-vision deficiency or low vision, so pair colour with another cue (weight, size, an icon, a label).',
            'Motion is an especially strong differentiator and an especially risky one: it grabs attention reliably but can be distressing for people with motion sensitivity, so use it sparingly and respect reduced-motion preferences. This law sits alongside selective attention — people filter aggressively for what is relevant to their current goal — and complements the grouping work in Gestalt Principles.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the von Restorff (isolation) effect describe?',
              options: [
                'Items in the middle of a list are remembered best',
                'Among similar items, the one that differs most is the one most likely to be noticed and remembered',
                'People remember the first item in any list',
                'Colour has no effect on memory',
              ],
              correctIndex: 1,
              explanation:
                'Von Restorff\'s 1933 study showed a distinct item in a set of similar ones is recalled better; interfaces use emphasis to exploit this.',
            },
            {
              id: 'q2',
              question: 'Why should distinctiveness not rely on colour alone?',
              options: [
                'Colour is expensive to render',
                'It excludes people with colour-vision deficiency or low vision, so colour should be paired with another cue like weight, size, or a label',
                'Colour makes pages load slower',
                'Users prefer greyscale interfaces',
              ],
              correctIndex: 1,
              explanation:
                'A single-channel signal fails for part of the audience; combining colour with shape, size, iconography, or text keeps the emphasis perceivable by everyone.',
            },
          ],
        },
      ],
    },
    {
      id: 'speed-and-beauty',
      title: 'Speed & Beauty',
      steps: [
        {
          id: 'doherty-threshold',
          title: 'Doherty Threshold',
          summary:
            'Productivity soars when the system responds fast enough — under about 400 ms — that neither it nor the user is waiting.',
          content: [
            'In 1982, IBM researchers Walter Doherty and Ahrvind Thadani challenged the then-standard 2-second response time, showing that "productivity increases in more than direct proportion to a decrease in response time" once responses drop under 400 ms — fast enough that the person and the computer never wait on each other. Below roughly 100 ms feels instant; 100 to 300 ms is perceptible and people start to feel less in control; past 1 second attention wanders and task-relevant information starts to fall out of working memory. Speed is a design feature, not just an engineering detail, and page weight is its biggest enemy.',
            'When real processing genuinely exceeds 400 ms, the tool is perceived performance — making the wait feel shorter. Skeleton screens show placeholder blocks where content will land, so the page seems to load sooner and nothing jumps around. The "blur-up" technique loads a tiny blurred image first and swaps in the full one behind it. An optimistic UI shows the result immediately — Instagram displays your comment before the server confirms it — and only surfaces an error if the action actually fails.',
            'Progress bars deserve special mention: research shows that simply seeing one makes a wait more tolerable regardless of its accuracy, because it reassures, provides visual interest, and shifts attention onto the animation instead of the waiting. Beyond about 10 seconds people will switch tasks, so long waits should add an estimated time remaining and a description of the current step.',
            'The counterintuitive corner: a response can be too fast. An automatic change that happens instantly can be missed entirely, or be hard to comprehend, or read as untrustworthy — "it can\'t have really checked". Deliberately adding a short delay, as Facebook does with its Security Checkup while it explains what it is scanning, can raise the perceived value and build trust in a process.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the Doherty Threshold?',
              options: [
                'The maximum number of items in working memory',
                'About 400 ms — the response time under which system and user never wait on each other and productivity rises sharply',
                'The point at which a design becomes too abstract',
                'The 10-second limit on user attention',
              ],
              correctIndex: 1,
              explanation:
                'Doherty and Thadani (1982) found productivity increases more than proportionally as response time drops below ~400 ms.',
            },
            {
              id: 'q2',
              question: 'Why do progress bars help even when they are not accurate?',
              options: [
                'They make the processing genuinely faster',
                'Seeing one reassures the user, adds visual interest, and shifts attention onto the animation rather than the wait itself',
                'They reduce page weight',
                'They are required by accessibility guidelines',
              ],
              correctIndex: 1,
              explanation:
                'The book cites research that the mere presence of a progress indicator makes waiting more tolerable, independent of how precise it is.',
            },
          ],
        },
        {
          id: 'aesthetic-usability-effect',
          title: 'Aesthetic-Usability Effect',
          summary:
            'People perceive a good-looking design as more usable — which is powerful, and which can hide real problems.',
          content: [
            'The Aesthetic-Usability Effect is the tendency for users to believe that an attractive design works better than an unattractive one, even when their functionality is identical. It runs on fast, automatic (System 1) thinking: studies show people form an opinion of a site within about 50 milliseconds, that first impression is driven largely by visual appeal, and it rarely changes the longer they stay. A pleasing aesthetic creates a positive emotional response that makes people more patient and more forgiving of minor friction.',
            'Yablonski traces the lineage through Braun under Dieter Rams — "less but better", form following function — to Apple, whose reputation for interfaces that are both elegant and easy to use became a competitive advantage. Apple\'s products are not free of usability issues; people overlook them because the underlying aesthetic is strong. That is the effect working in a product\'s favour.',
            'The caveat is sharp, and it is about research. Sonderegger and Sauer ran a 2010 study with two functionally identical phone simulations, one attractive and one not: participants rated the attractive one as more usable and completed tasks on it faster. Beauty can mask genuine usability problems — which is a serious risk during usability testing, exactly when you are trying to find those problems.',
            'So mitigate it in evaluation: weight what participants do over what they say, and ask questions that push them to look past the surface, so real issues surface despite the halo of a polished visual design. Visual polish is a real asset — see Visual Design Basics — but it is applied on top of sound utility and usability, not as a substitute, and it must not be allowed to quiet your testing.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the Aesthetic-Usability Effect?',
              options: [
                'Attractive designs are always genuinely more usable',
                'Users perceive an attractive design as more usable and are more forgiving of its flaws, even when functionality is identical',
                'Usability testing is unnecessary for beautiful products',
                'Aesthetics have no measurable effect on perception',
              ],
              correctIndex: 1,
              explanation:
                'The effect is about perceived usability and tolerance for friction; a 50 ms first impression driven by visual appeal sets the tone and rarely shifts.',
            },
            {
              id: 'q2',
              question: 'Why is the Aesthetic-Usability Effect a problem for usability testing specifically?',
              options: [
                'It makes tests take longer to run',
                'A polished visual design can mask real usability problems, so participants overlook issues the test is meant to find',
                'It requires more participants',
                'It only affects unmoderated tests',
              ],
              correctIndex: 1,
              explanation:
                'Sonderegger and Sauer showed attractiveness raised both perceived usability and task speed; in testing, that halo hides defects, so watch behaviour and probe past the surface.',
            },
          ],
        },
      ],
    },
  ],
};
