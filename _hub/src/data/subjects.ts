import type { Subject } from '../types';
import { uxForAiSubject } from './subject-ux-for-ai';

export const subjects: Subject[] = [
  {
    id: 'ux-fundamentals',
    title: 'UX Design Fundamentals',
    description: 'Learn what UX design actually is, how the design process works, and how to understand the people you design for.',
    icon: '🧭',
    color: '#E76F51',
    levels: [
      {
        id: 'foundations',
        title: 'Foundations of UX',
        steps: [
          {
            id: 'what-is-ux',
            title: 'What Is UX Design?',
            summary: 'The difference between UX and UI, and why UX starts before any screen exists.',
            content: [
              'User Experience (UX) design is the practice of shaping how a person feels when they interact with a product — whether that product is an app, a website, a physical device, or a service. It covers the entire journey: how easy something is to find, how clearly it communicates, how it responds to mistakes, and whether it leaves the user feeling capable or frustrated.',
              'UX is often confused with UI (User Interface) design, but they are not the same thing. UI is the surface — the buttons, colors, typography, and layout the user actually sees and touches. UX is everything underneath that: the research that informs what to build, the structure of the information, the flow between screens, and the reasoning behind every decision. A beautiful interface built on a confusing flow is still bad UX.',
              'Don Norman, who coined the term "user experience" in the 1990s while at Apple, described it as covering "all aspects of the end-user\'s interaction with the company, its services, and its products." That framing matters: UX is not a design step you do at the end, it is a lens you apply from the very first conversation about a problem.',
              'A useful way to remember the distinction: UI is how it looks, UX is how it works — and how it makes someone feel while it\'s working.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which statement best describes the difference between UX and UI?',
                options: [
                  'UX and UI are two names for the same discipline',
                  'UI is the visual surface of a product; UX is the entire experience of using it, including structure and flow',
                  'UX only applies to mobile apps, UI only applies to websites',
                  'UI comes before UX in the design process',
                ],
                correctIndex: 1,
                explanation: 'UI is the visible surface (buttons, color, layout). UX encompasses the whole experience — research, structure, flow, and feeling — that the UI sits on top of.',
              },
              {
                id: 'q2',
                question: 'A product can have a beautiful, polished interface and still deliver bad UX. Why?',
                options: [
                  'Because visual polish always guarantees good UX',
                  'Because UX is unrelated to how a product looks',
                  'Because the underlying flow, structure, or logic can still confuse or frustrate users regardless of visual polish',
                  'Because bad UX only happens in early prototypes',
                ],
                correctIndex: 2,
                explanation: 'Visual polish lives at the UI layer. If the flow beneath it is confusing or the structure doesn\'t match how users think, the experience still fails — no matter how good it looks.',
              },
            ],
          },
          {
            id: 'ux-process',
            title: 'The UX Design Process',
            summary: 'The Double Diamond model: how designers move from a vague problem to a validated solution.',
            content: [
              'Good UX rarely comes from jumping straight to a solution. Most professional teams follow some version of the "Double Diamond" — a model developed by the UK Design Council that has two phases of diverging and converging thinking.',
              'The first diamond is about the problem. "Discover" means widening your view: talking to users, observing behavior, gathering data, without judging any of it yet. "Define" means narrowing back down — taking everything you learned and distilling it into a clear, specific problem statement.',
              'The second diamond is about the solution. "Develop" means widening again: sketching many possible solutions, prototyping, exploring ideas that might seem unconventional. "Deliver" means narrowing down once more — testing those ideas with real users, refining the strongest one, and shipping it.',
              'The reason this back-and-forth matters is that it protects teams from the most common UX failure: designing a polished answer to the wrong question. Diverging before converging, twice, forces the team to earn the right to build something before they build it.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'In the Double Diamond model, what happens during "Discover"?',
                options: [
                  'The team narrows down to one final design',
                  'The team widens its understanding of the problem through research and observation',
                  'The team writes production code',
                  'The team picks colors and fonts',
                ],
                correctIndex: 1,
                explanation: '"Discover" is a divergent phase — the goal is to gather as much context as possible before narrowing anything down.',
              },
              {
                id: 'q2',
                question: 'Why does the Double Diamond include two separate cycles of diverging and converging?',
                options: [
                  'To make the process take longer for no reason',
                  'Because designers are required to sketch twice',
                  'To separate "finding the right problem" from "finding the right solution," so teams don\'t solve the wrong thing',
                  'Because the first diamond is for UI and the second is for UX',
                ],
                correctIndex: 2,
                explanation: 'The first diamond defines the problem; the second explores and validates solutions. Splitting them prevents teams from solving a problem they never properly defined.',
              },
            ],
          },
        ],
      },
      {
        id: 'understanding-users',
        title: 'Understanding Users',
        steps: [
          {
            id: 'user-research-basics',
            title: 'User Research Basics',
            summary: 'Qualitative vs. quantitative research, and when to use each.',
            content: [
              'User research is how teams replace assumptions with evidence. It generally splits into two categories: qualitative and quantitative research.',
              'Qualitative research answers "why." Methods like user interviews, contextual inquiries, and usability testing produce rich, detailed stories about behavior and motivation — but from a small number of people. You can\'t use qualitative research to say "73% of users prefer X," but you can use it to understand what confused someone and why.',
              'Quantitative research answers "how many" or "how often." Methods like analytics, surveys, and A/B tests produce numbers from large sample sizes, but without the depth of explanation. You might learn that 40% of users drop off at checkout, but not why they left.',
              'The strongest research practice combines both: quantitative data points you toward where a problem exists, and qualitative research tells you why it\'s happening. Relying on only one type is one of the most common mistakes new UX practitioners make.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which type of research is best suited to answering "why do users abandon this form"?',
                options: [
                  'Quantitative research, because it uses large sample sizes',
                  'Qualitative research, because it captures reasoning and context behind behavior',
                  'Neither — this can only be answered by the engineering team',
                  'A/B testing alone',
                ],
                correctIndex: 1,
                explanation: 'Qualitative methods like interviews or usability tests reveal the reasoning behind behavior, which pure numbers can\'t explain on their own.',
              },
              {
                id: 'q2',
                question: 'What is a key limitation of quantitative research on its own?',
                options: [
                  'It never involves real users',
                  'It tells you where a problem exists but not why it\'s happening',
                  'It cannot be collected at scale',
                  'It always contradicts qualitative research',
                ],
                correctIndex: 1,
                explanation: 'Quantitative data is great at surfacing patterns and scale, but it doesn\'t explain the underlying motivations — that\'s where qualitative research fills the gap.',
              },
            ],
          },
          {
            id: 'personas-empathy',
            title: 'Personas & Empathy Maps',
            summary: 'Turning research into tools that keep a team designing for real people.',
            content: [
              'Once research is gathered, teams need a way to keep that understanding alive throughout a project — because it\'s easy for a team to slip back into designing for themselves rather than their users. Two common tools for this are personas and empathy maps.',
              'A persona is a fictional, composite character built from research patterns — not a single real user, but a representative archetype. A good persona includes goals, frustrations, and context of use, not just demographics like age or job title. The demographic details matter far less than the behaviors and needs behind them.',
              'An empathy map is a simpler, faster tool that organizes what\'s known about a user into quadrants: what they Say, Think, Do, and Feel. It\'s especially useful early in a project, or in workshops, to align a team\'s understanding before personas are fully built out.',
              'Both tools share the same purpose: they are not deliverables to decorate a wall, they are decision-making aids. A well-used persona gets referenced in design reviews — "would Sarah actually understand this label?" — not just filed away after being created.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What makes a persona useful, according to UX best practice?',
                options: [
                  'It accurately represents one specific real user',
                  'It includes goals, frustrations, and context of use — not just demographics',
                  'It is created once and never referenced again',
                  'It focuses primarily on age and job title',
                ],
                correctIndex: 1,
                explanation: 'Demographics alone rarely drive good design decisions. Goals, frustrations, and context are what actually help teams make user-centered choices.',
              },
              {
                id: 'q2',
                question: 'What are the four quadrants of a typical empathy map?',
                options: [
                  'Discover, Define, Develop, Deliver',
                  'Say, Think, Do, Feel',
                  'Plan, Build, Test, Ship',
                  'Awareness, Consideration, Decision, Retention',
                ],
                correctIndex: 1,
                explanation: 'Empathy maps organize research into what a user Says, Thinks, Does, and Feels, giving a fast, shared snapshot of their mindset.',
              },
            ],
          },
        ],
      },
      {
        id: 'structuring-the-experience',
        title: 'Structuring the Experience',
        steps: [
          {
            id: 'information-architecture',
            title: 'Information Architecture Basics',
            summary: 'How content and features get organized so people can actually find them.',
            content: [
              'Information architecture (IA) is the practice of organizing, structuring, and labeling content so that it supports findability and understanding. Before any screen is designed, IA answers a more basic question: given everything this product needs to contain, how should it be grouped, and what should it be called?',
              'A few common organizational schemes recur across products: hierarchical (a tree of categories and subcategories, like a file system), sequential (a fixed step-by-step order, like a checkout flow), and matrix (letting users filter or sort content along multiple independent dimensions, like a product catalog filterable by price, size, and color). Most real products combine more than one scheme in different areas.',
              'A widely used research method for validating an IA is card sorting: participants are given content items on individual cards and asked to group them in a way that makes sense to them (open card sort), or to sort them into categories the team has already proposed (closed card sort). The resulting patterns reveal whether the team\'s mental model of the content actually matches users\' mental models — a mismatch here causes navigation problems no amount of visual polish can fix.',
              'Labeling deserves as much attention as structure. A perfectly organized hierarchy still fails if its category names use internal jargon instead of the words users actually search for or expect.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the main purpose of a card-sorting exercise?',
                options: [
                  'To decide what colors to use in the final interface',
                  'To reveal whether the team\'s proposed content grouping matches users\' own mental models',
                  'To test how fast users can complete a checkout flow',
                  'To measure server response times',
                ],
                correctIndex: 1,
                explanation: 'Card sorting exposes gaps between how the team has organized content and how users naturally expect it to be grouped and labeled.',
              },
              {
                id: 'q2',
                question: 'A checkout flow that moves through a fixed series of steps in order is an example of which organizational scheme?',
                options: [
                  'Matrix',
                  'Hierarchical',
                  'Sequential',
                  'Alphabetical',
                ],
                correctIndex: 2,
                explanation: 'A sequential scheme organizes content or steps in a fixed, linear order — exactly how most checkout flows are structured.',
              },
            ],
          },
          {
            id: 'user-flows-journey-maps',
            title: 'User Flows & Journey Maps',
            summary: 'Two related but distinct tools for visualizing how someone moves through a product.',
            content: [
              'A user flow is a diagram of the specific path a user takes through a product to complete one task — the screens, decisions, and actions involved in, say, resetting a password or completing a purchase. It\'s narrow and task-focused, usually drawn as a flowchart with decision points ("if payment fails, go here").',
              'A journey map is broader. It plots a user\'s experience over an extended arc — sometimes an entire relationship with a company, not just one app session — including stages before and after actually using the product (discovering a need, researching options, onboarding, ongoing use, eventual churn or renewal). Crucially, journey maps typically track emotional state alongside actions: where does the user feel confident, where do they feel friction or anxiety?',
              'The two tools answer different questions. A user flow helps a team design or debug one specific interaction. A journey map helps a team see the bigger picture — including moments entirely outside the product itself, like a confusing pricing page found via a search engine, or a support call that happens after checkout.',
              'A practical reason to build both: a user flow can look perfectly efficient in isolation (few steps, no errors) while a journey map reveals that users arrive already frustrated from an earlier stage, which changes what "success" for that flow should even mean.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What distinguishes a journey map from a user flow?',
                options: [
                  'A journey map only covers technical error states',
                  'A journey map spans a broader arc of the user\'s experience, often including stages before and after using the product, and tracks emotional state',
                  'They are two names for the exact same artifact',
                  'A user flow is used only for mobile apps',
                ],
                correctIndex: 1,
                explanation: 'User flows are narrow and task-specific; journey maps are broader, spanning more of the user\'s relationship with a product and typically capturing emotion alongside actions.',
              },
              {
                id: 'q2',
                question: 'Why might a journey map reveal a problem that a user flow diagram would miss?',
                options: [
                  'Journey maps are always more visually appealing',
                  'A user flow can look efficient in isolation while missing that users arrive already frustrated from an earlier, out-of-product stage',
                  'User flows cannot include decision points',
                  'Journey maps replace the need for any research',
                ],
                correctIndex: 1,
                explanation: 'Because journey maps include context outside the immediate task, they can surface friction (like confusion from an earlier stage) that a narrowly-scoped user flow would never capture.',
              },
            ],
          },
        ],
      },
      {
        id: 'from-idea-to-prototype',
        title: 'From Idea to Prototype',
        steps: [
          {
            id: 'wireframes-prototype-fidelity',
            title: 'Wireframes & Prototype Fidelity',
            summary: 'Choosing how polished a design should look before testing it.',
            content: [
              'Fidelity describes how closely a design artifact resembles the finished product. Low-fidelity wireframes use boxes, rough shapes, and placeholder text to represent structure and layout without any real visual design — the point is to work fast and keep feedback focused on layout and flow rather than color choices. High-fidelity mockups look like the real, finished interface: real copy, real typography, real spacing.',
              'Fidelity applies to interaction as much as visuals. A static image is the lowest interactive fidelity — it shows what a screen looks like but nothing responds to a click. A clickable prototype, even built from low-fidelity wireframes, lets someone tap through a flow and experience sequence and feedback, which is often more valuable for early testing than beautiful static screens.',
              'Choosing fidelity is a tradeoff, not a quality ladder where higher is always better. Low fidelity is fast to produce and change, and — importantly — makes reviewers more comfortable giving structural feedback ("should this be a separate screen?") instead of only cosmetic feedback ("I don\'t like that blue"), because a rough sketch doesn\'t look "finished" enough to feel precious.',
              'A common mistake is jumping to high fidelity too early: polishing visuals before the underlying flow and structure have been validated means any structural change discovered later is far more expensive to make.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why might a team deliberately choose to test a low-fidelity wireframe instead of a polished mockup?',
                options: [
                  'Low fidelity always produces more accurate results',
                  'It\'s faster to produce and tends to keep feedback focused on structure and flow rather than cosmetics',
                  'Low-fidelity wireframes are required by law for user testing',
                  'High-fidelity designs cannot be tested at all',
                ],
                correctIndex: 1,
                explanation: 'Rough, clearly unfinished-looking wireframes invite structural feedback and are cheap to iterate on, which is often exactly what\'s needed early in a project.',
              },
              {
                id: 'q2',
                question: 'What is the risk of jumping straight to a high-fidelity, fully polished design before validating the flow?',
                options: [
                  'There is no risk, higher fidelity is always better',
                  'Any structural problems discovered later become far more expensive to fix, since visual polish must be redone too',
                  'High-fidelity designs cannot include real copy',
                  'It makes the design impossible to prototype',
                ],
                correctIndex: 1,
                explanation: 'Investing in visual polish before the underlying structure is validated means structural changes discovered later cost much more to make.',
              },
            ],
          },
          {
            id: 'usability-testing-fundamentals',
            title: 'Usability Testing Fundamentals',
            summary: 'Watching real people attempt real tasks — and why a handful of testers goes a long way.',
            content: [
              'A usability test asks a small number of representative users to attempt real tasks with a design — a prototype or a live product — while a researcher observes where they succeed, struggle, or get confused. It\'s one of the most direct ways to find out whether a design actually works, as opposed to whether the team believes it works.',
              'A common technique is the think-aloud protocol: participants are asked to verbalize their thoughts as they work through a task ("I\'m looking for a way to change my email... I don\'t see it here, let me check settings"). This surfaces reasoning and confusion that would be invisible from simply watching where someone clicks.',
              'Tests can be moderated (a researcher guides the session live, asking follow-up questions in real time) or unmoderated (a participant completes tasks independently, often remotely, with the session recorded for later review). Moderated tests allow deeper follow-up; unmoderated tests scale faster and cheaper.',
              'A frequently cited finding from Jakob Nielsen\'s research is that testing with about five users uncovers roughly 85% of usability problems in a single round — beyond that, additional users increasingly surface issues already found. The practical implication isn\'t "five is a magic number to hit exactly," it\'s that several small rounds of testing, with fixes in between, tend to find more problems than one large round.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the "think-aloud" protocol ask participants to do during a usability test?',
                options: [
                  'Fill out a written survey after the session',
                  'Verbalize their thoughts and reasoning while attempting the task',
                  'Stay completely silent so as not to bias the researcher',
                  'Only interact with the prototype using voice commands',
                ],
                correctIndex: 1,
                explanation: 'Thinking aloud surfaces the reasoning and confusion behind a user\'s actions, which pure observation of clicks alone would miss.',
              },
              {
                id: 'q2',
                question: 'What is the practical takeaway from research suggesting ~5 users uncover most usability problems in a round of testing?',
                options: [
                  'Testing with more than 5 users is always a waste of time',
                  'Several smaller rounds of testing with fixes in between tend to find more problems overall than one large round',
                  'Usability testing should never involve more than one participant',
                  'Five users is a legal requirement for usability testing',
                ],
                correctIndex: 1,
                explanation: 'Since a small round already catches most issues, iterating across multiple small rounds — fixing issues between each — tends to be more effective than one large study.',
              },
            ],
          },
        ],
      },
      {
        id: 'closing-the-loop',
        title: 'Closing the Loop',
        steps: [
          {
            id: 'synthesizing-research-findings',
            title: 'Synthesizing Research Findings',
            summary: 'Turning a pile of raw notes and observations into insights a team can act on.',
            content: [
              'Research produces raw material — interview notes, session recordings, survey responses — but raw material isn\'t the same as an insight. Synthesis is the process of finding patterns across that material and turning them into something specific enough to inform a design decision.',
              'A widely used technique is affinity mapping: individual observations are written on separate notes (physical sticky notes or a digital equivalent), then grouped by theme through discussion rather than a predetermined category scheme. Themes that emerge organically from the data tend to be more trustworthy than ones the team assumed going in.',
              'A common trap is over-weighting one especially vivid or vocal data point — a single user who complained loudly about something sticks in memory far more than five users who quietly struggled with a different, more common issue. Good synthesis looks for patterns across multiple sources, and explicitly notes how many people experienced each issue, rather than treating every quote as equally significant.',
              'The output of synthesis should be specific enough to act on. "Users found the flow confusing" isn\'t an actionable insight; "4 of 6 participants missed the save button because it appeared below the fold on smaller screens" is.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is affinity mapping typically done by letting themes emerge from grouping, rather than sorting notes into categories decided in advance?',
                options: [
                  'It\'s purely a matter of visual preference',
                  'Categories decided in advance risk imposing the team\'s existing assumptions instead of surfacing what the data actually shows',
                  'Predetermined categories are always more accurate',
                  'Affinity mapping cannot be done digitally',
                ],
                correctIndex: 1,
                explanation: 'Letting themes emerge from the actual data reduces the risk of confirmation bias compared to force-fitting observations into categories chosen beforehand.',
              },
              {
                id: 'q2',
                question: 'Why is "users found the flow confusing" a weak research insight?',
                options: [
                  'Because it uses the word "confusing," which is against best practice',
                  'It isn\'t specific enough to point to a concrete design decision — an actionable insight identifies what, where, and roughly how many people were affected',
                  'Because it is too short to be written down',
                  'Because usability testing cannot detect confusion',
                ],
                correctIndex: 1,
                explanation: 'A specific, actionable insight names the exact problem, where it occurred, and its prevalence — vague summaries don\'t give a team enough to act on.',
              },
            ],
          },
          {
            id: 'iterating-measuring-success',
            title: 'Iterating & Measuring Success',
            summary: 'UX work doesn\'t stop at launch — it loops back into discovery.',
            content: [
              'Shipping a design isn\'t the end of the UX process, it\'s a checkpoint. The Double Diamond model covered earlier isn\'t a one-time journey — teams cycle through discover-define-develop-deliver repeatedly, with each release generating new signals that feed the next round of discovery.',
              'Measuring success after launch usually blends quantitative and qualitative signals, echoing the research methods covered earlier in this path. Common quantitative measures include task success rate (did users complete the intended action), time on task, and error rate. A structured survey like the System Usability Scale (SUS) — a standardized 10-question questionnaire — gives a comparable usability score across releases or competing designs.',
              'Qualitative signals still matter after launch: support tickets, app store reviews, and follow-up interviews often explain the "why" behind a quantitative dip that analytics alone can\'t.',
              'The core habit this step is meant to build: treat every release as a hypothesis, not a finished answer. A launched feature that doesn\'t meet its goal isn\'t a failure of the process — failing to measure it, or failing to feed what was learned back into the next round of discovery, is.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the System Usability Scale (SUS)?',
                options: [
                  'A programming framework for building interfaces',
                  'A standardized 10-question questionnaire that produces a comparable usability score',
                  'A type of wireframing tool',
                  'A method for conducting card sorts',
                ],
                correctIndex: 1,
                explanation: 'SUS is a widely used, standardized questionnaire that yields a single comparable score, useful for tracking usability across releases or against competitors.',
              },
              {
                id: 'q2',
                question: 'According to this step, what should happen after a launched feature fails to meet its goal?',
                options: [
                  'The feature should always be removed immediately',
                  'Nothing — post-launch performance isn\'t worth tracking',
                  'The findings should feed back into the next round of discovery, treating the release as a hypothesis rather than a final answer',
                  'The team should stop measuring anything going forward',
                ],
                correctIndex: 2,
                explanation: 'The Double Diamond process is cyclical — post-launch learning is meant to feed the next discovery phase, not be treated as a dead end.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'visual-design-basics',
    title: 'Visual Design Basics',
    description: 'Build an eye for color, typography, hierarchy, and layout — the building blocks that make interfaces feel clear and intentional.',
    icon: '🎨',
    color: '#E76F51',
    levels: [
      {
        id: 'design-principles',
        title: 'Design Principles',
        steps: [
          {
            id: 'color-theory',
            title: 'Color Theory for Interfaces',
            summary: 'How color communicates meaning, hierarchy, and state in digital products.',
            content: [
              'Color in interface design isn\'t decoration — it\'s communication. Before choosing colors, it helps to understand a few core relationships. Complementary colors sit opposite each other on the color wheel and create high contrast; analogous colors sit next to each other and feel harmonious; a single hue at different saturations and lightness values can carry an entire interface on its own.',
              'In practice, most interfaces are built from a restrained system: a primary color for key actions and brand identity, a neutral palette (grays) for text and backgrounds, and a small set of semantic colors — usually red for error/destructive, green for success, yellow/orange for warning, and blue for informational states.',
              'Consistency matters more than the specific hues chosen. If a warning is orange in one screen and red in another, users lose the ability to build a mental shortcut for what a color means. Consistent, restrained use of color is what allows color to actually function as a signal instead of noise.',
              'Accessibility is non-negotiable: color should never be the only way information is conveyed (a colorblind user may not distinguish red from green), and text needs sufficient contrast against its background to meet WCAG guidelines.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why should color rarely be the only way to convey information in an interface?',
                options: [
                  'Because color is purely decorative and carries no meaning',
                  'Because colorblind users may not be able to distinguish certain colors, so meaning can be lost',
                  'Because designers are not allowed to use more than one color',
                  'Because color always slows down page load times',
                ],
                correctIndex: 1,
                explanation: 'Relying solely on color excludes colorblind users. Pairing color with icons, text, or patterns keeps meaning accessible to everyone.',
              },
              {
                id: 'q2',
                question: 'What problem occurs if a "warning" state is orange on one screen and red on another?',
                options: [
                  'Nothing — colors can vary freely between screens',
                  'It improves visual variety and keeps the UI interesting',
                  'Users lose the ability to build a reliable mental shortcut for what that color signals',
                  'It has no effect on usability',
                ],
                correctIndex: 2,
                explanation: 'Consistent semantic color use lets users learn a shortcut ("red = danger"). Inconsistent use breaks that shortcut and forces users to re-read every time.',
              },
            ],
          },
          {
            id: 'typography-essentials',
            title: 'Typography Essentials',
            summary: 'How type choices shape readability, tone, and hierarchy.',
            content: [
              'Typography is one of the highest-leverage tools in interface design because nearly every screen is dominated by text. Three fundamentals drive most typographic decisions: typeface, scale, and line length/spacing.',
              'Typeface sets tone before a single word is read — a geometric sans-serif feels modern and neutral, a serif feels editorial or trustworthy, a rounded sans feels friendly and approachable. Most products limit themselves to one or two typefaces to avoid visual noise.',
              'Scale creates a type hierarchy: a well-built system defines a small set of sizes and weights (e.g., a heading scale, body text, captions) so that importance is instantly readable at a glance, without the user needing to consciously parse it.',
              'Line length and line-height affect pure readability: lines that are too long make it hard for the eye to track back to the start of the next line, and tight line-height makes paragraphs feel cramped. A commonly cited guideline is 45–75 characters per line for comfortable reading, with line-height around 1.4–1.6x the font size for body text.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the primary purpose of a type scale (defined heading, body, and caption sizes)?',
                options: [
                  'To make the interface look more colorful',
                  'To create a hierarchy so importance is instantly readable without conscious effort',
                  'To slow down the reading speed of users',
                  'To reduce the number of fonts available',
                ],
                correctIndex: 1,
                explanation: 'A type scale gives every piece of text a clear role, letting users scan and understand structure and importance at a glance.',
              },
              {
                id: 'q2',
                question: 'What issue does an excessively long line length (very wide paragraph) typically cause?',
                options: [
                  'It makes text load faster',
                  'It makes it harder for the eye to track back to the start of the next line, hurting readability',
                  'It automatically improves accessibility',
                  'It has no effect on reading comfort',
                ],
                correctIndex: 1,
                explanation: 'Long lines force more effort from the eye to find the next line, which is why comfortable reading widths are usually kept around 45–75 characters.',
              },
            ],
          },
        ],
      },
      {
        id: 'layout-hierarchy',
        title: 'Layout & Hierarchy',
        steps: [
          {
            id: 'visual-hierarchy-gestalt',
            title: 'Visual Hierarchy & Gestalt Principles',
            summary: 'How the eye is guided through a screen, and the perceptual rules behind it.',
            content: [
              'Visual hierarchy is the deliberate ordering of elements so a user\'s attention lands where it should, in the order it should. It\'s built from a handful of levers: size (bigger draws attention first), contrast (higher contrast stands out from its surroundings), color, whitespace, and position (top-left is typically scanned first in left-to-right reading cultures).',
              'Much of how hierarchy works traces back to Gestalt psychology — a set of principles describing how humans naturally group visual elements. Proximity says elements placed close together are perceived as related. Similarity says elements sharing a visual trait (color, shape) are perceived as part of the same group even if spaced apart. Common region says elements enclosed in a shared boundary (like a card) are seen as one unit.',
              'These aren\'t abstract theory — they explain very practical decisions. Why does a form label sit close to its input rather than centered between two fields? Proximity. Why do all primary buttons across an app share the same color? Similarity. Why does grouping settings inside bordered cards feel more organized than a flat list? Common region.',
              'Good visual hierarchy is often invisible when done well — the user simply "knows" where to look next without being able to explain why.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which Gestalt principle explains why a label placed directly above its input field is understood as belonging to it?',
                options: [
                  'Similarity',
                  'Proximity',
                  'Closure',
                  'Continuation',
                ],
                correctIndex: 1,
                explanation: 'Proximity states that elements placed close together are perceived as related — which is exactly why labels sit near their fields.',
              },
              {
                id: 'q2',
                question: 'Which of the following is NOT typically a lever used to establish visual hierarchy?',
                options: [
                  'Size',
                  'Contrast',
                  'Whitespace',
                  'The programming language used to build the interface',
                ],
                correctIndex: 3,
                explanation: 'Hierarchy is established through visual and spatial levers — size, contrast, color, whitespace, and position — not the underlying tech stack.',
              },
            ],
          },
          {
            id: 'grids-spacing',
            title: 'Grids & Spacing Systems',
            summary: 'Why consistent spacing scales make interfaces feel calm and intentional.',
            content: [
              'A grid gives a layout invisible structure — a set of columns and consistent gutters that elements align to, so a screen feels organized even when it contains many different components. Most web and app interfaces use a 12-column grid because it divides evenly into halves, thirds, and quarters, giving designers flexibility without breaking alignment.',
              'Alongside grids, most design systems define a spacing scale — a fixed set of values (commonly a 4px or 8px base, e.g., 4, 8, 12, 16, 24, 32, 48) used for all margins and padding, rather than arbitrary numbers. This keeps spacing visually consistent and makes a system easier for a whole team to use predictably.',
              'Consistent spacing is one of the fastest ways to make an interface look more "professional" without changing a single color or font — uneven, arbitrary spacing is one of the biggest tells of an unpolished design, even to viewers who couldn\'t articulate why something looks off.',
              'Whitespace itself is an active design tool, not empty leftover space. Generous whitespace around a key action draws attention to it; tight whitespace groups related items and signals density.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why do design systems typically use a fixed spacing scale (e.g., multiples of 4 or 8) instead of arbitrary pixel values?',
                options: [
                  'It has no real benefit, it\'s just a convention',
                  'It keeps spacing visually consistent and predictable across a whole product and team',
                  'It makes the interface load faster',
                  'It is required by all programming languages',
                ],
                correctIndex: 1,
                explanation: 'A constrained spacing scale removes guesswork and keeps every screen visually consistent, even when built by different people.',
              },
              {
                id: 'q2',
                question: 'How should whitespace be thought of in interface design?',
                options: [
                  'As wasted space that should be minimized wherever possible',
                  'As an active design tool that can draw attention or signal grouping/density',
                  'As something only relevant to print design',
                  'As irrelevant to visual hierarchy',
                ],
                correctIndex: 1,
                explanation: 'Whitespace actively shapes attention and grouping — generous space highlights importance, tight space signals relatedness or density.',
              },
            ],
          },
        ],
      },
      {
        id: 'iconography-imagery',
        title: 'Iconography & Imagery',
        steps: [
          {
            id: 'iconography-basics',
            title: 'Iconography Basics',
            summary: 'Icons are a compressed language — and like any language, ambiguity breaks communication.',
            content: [
              'An icon is a small piece of visual shorthand meant to be recognized instantly. That works well for a handful of nearly universal symbols — a magnifying glass for search, an envelope for mail — but breaks down quickly for anything less standardized. A "settings" gear is fairly well understood; an icon invented specifically for one app\'s unique feature usually isn\'t.',
              'The safest rule of thumb: pair an icon with a text label whenever the icon\'s meaning isn\'t close to universally recognized, especially for primary or destructive actions. Icon-only buttons save space, but that space savings isn\'t worth it if a meaningful fraction of users have to tap it just to find out what it does.',
              'Consistency within an icon set matters as much as the individual icons. A shared grid size, stroke weight, corner radius, and level of detail (fully outlined vs. filled, simple vs. ornate) keeps a set feeling like one coherent language rather than icons borrowed from several different libraries — which, visually, is exactly what mismatched stroke weights and styles look like.',
              'Icons should also carry the same accessibility treatment as any other meaningful visual: an icon-only button needs an accessible name (via an `aria-label` or equivalent) so a screen reader announces what it does, not just that an unlabeled button exists.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'When should an icon be paired with a text label rather than used alone?',
                options: [
                  'Always — icons should never be used without a label',
                  'Whenever its meaning isn\'t close to universally recognized, especially for primary or destructive actions',
                  'Only on desktop, never on mobile',
                  'Only when the icon is decorative',
                ],
                correctIndex: 1,
                explanation: 'Icon-only design only works reliably for near-universal symbols; anything less standardized risks users not understanding — or not even noticing — the control.',
              },
              {
                id: 'q2',
                question: 'Why does consistent stroke weight and style across an icon set matter?',
                options: [
                  'It has no real effect, it\'s purely a stylistic nitpick',
                  'Mismatched icon styles read as if they were borrowed from different libraries, breaking the sense of one coherent visual language',
                  'It only matters for animated icons',
                  'It is required for icons to load correctly',
                ],
                correctIndex: 1,
                explanation: 'A consistent grid, stroke weight, and level of detail is what makes a set of icons feel like one designed system rather than a mismatched collection.',
              },
            ],
          },
          {
            id: 'working-with-imagery',
            title: 'Working with Imagery',
            summary: 'Photography and illustration set tone — and can just as easily undermine hierarchy if left unchecked.',
            content: [
              'Images do more communication work than they\'re often given credit for. Photography tends to read as authentic, specific, and grounded in reality; illustration tends to read as friendly, abstract, and flexible for representing ideas that don\'t have an obvious real-world photo (like "productivity" or "security"). Choosing between them — and staying consistent with that choice — shapes the overall tone of a product as much as color or type does.',
              'Consistency of treatment matters just as much as the choice of style: a single mix of harsh, flash-lit stock photography sitting next to soft, warm-toned custom photography reads as visually disjointed, even if each individual image is fine on its own. The same applies to illustrations — consistent line weight, color palette, and level of detail across a whole illustration set.',
              'Imagery should support hierarchy, not fight it. A large, high-contrast hero image can easily out-compete the actual call-to-action for attention if placed without care — the same size and contrast levers covered in visual hierarchy apply to images exactly as they apply to text and buttons.',
              'Every meaningful image also needs a plan for its text alternative (alt text) from the start, not as an afterthought — this connects directly to accessibility, since a screen reader has no way to interpret an image\'s content unless it\'s described in words.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is a common reason a team might choose illustration over photography for a concept like "security" or "productivity"?',
                options: [
                  'Illustration is always cheaper to produce',
                  'Illustration can represent abstract ideas that don\'t have an obvious, specific real-world photo',
                  'Photography cannot be used in digital products',
                  'Illustration is required by accessibility guidelines',
                ],
                correctIndex: 1,
                explanation: 'Illustration is well-suited to abstract concepts precisely because it isn\'t tied to depicting one specific real scene the way photography is.',
              },
              {
                id: 'q2',
                question: 'What can happen if a large, high-contrast hero image is placed near a page\'s primary call-to-action without care?',
                options: [
                  'Nothing — images never affect visual hierarchy',
                  'The image can out-compete the call-to-action for attention, undermining the intended hierarchy',
                  'It automatically improves conversion rates',
                  'It has no impact since images and buttons use different visual levers',
                ],
                correctIndex: 1,
                explanation: 'Images use the same hierarchy levers as everything else — size, contrast, position — so a dominant image can easily pull attention away from the actual priority on the page.',
              },
            ],
          },
        ],
      },
      {
        id: 'motion-microinteractions',
        title: 'Motion & Micro-interactions',
        steps: [
          {
            id: 'intro-to-motion-design',
            title: 'Introduction to Motion in Interfaces',
            summary: 'Motion should explain something — continuity, feedback, or attention — not just decorate.',
            content: [
              'Motion in interfaces earns its place when it does functional work: showing where something came from or went to (continuity), confirming that an action registered (feedback), or directing attention to something that needs it. Motion added purely for visual flair, with no functional purpose, tends to just slow the interface down and can actively distract from the task at hand.',
              'A common continuity example: when a card expands into a full-screen detail view, animating that transition (rather than an abrupt cut) helps the user understand that the detail view is a magnified version of the card they tapped, not a completely unrelated screen — preserving their mental model of where they are.',
              'Two basic motion properties do most of the work: duration and easing. Very short durations (100–200ms) suit small, frequent interactions like a button press; longer durations (300–500ms) suit larger transitions like a screen change — durations much beyond that start to feel sluggish rather than smooth. Easing describes how speed changes over the animation: elements entering the screen typically use "ease-out" (fast start, slow finish, feeling like they\'re settling into place), while elements leaving typically use "ease-in" (slow start, fast finish, feeling like they\'re being pulled away).',
              'Motion is also an accessibility concern, covered in more depth in the Accessibility subject: some users experience real discomfort (dizziness, nausea) from large-scale motion, which is why respecting a system-level "reduce motion" preference matters, not just visual taste.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the primary justification for adding motion to an interface, according to this step?',
                options: [
                  'Motion should always be added purely to look more modern',
                  'Motion earns its place when it communicates continuity, feedback, or directs attention — not decoration for its own sake',
                  'More motion is always better regardless of purpose',
                  'Motion should never be used in interfaces at all',
                ],
                correctIndex: 1,
                explanation: 'Functional motion — showing where something came from, confirming an action, or guiding attention — is what justifies the added complexity; purely decorative motion tends to just slow things down.',
              },
              {
                id: 'q2',
                question: 'Which easing is typically used for an element entering the screen, and why?',
                options: [
                  '"Ease-in," because it should start fast and end slow',
                  '"Ease-out," because it feels like the element is settling into place — fast start, slow finish',
                  'No easing at all — entering elements should move at a constant speed',
                  'Easing only applies to elements leaving the screen',
                ],
                correctIndex: 1,
                explanation: 'Ease-out (fast start, gradually slowing) reads as an element settling naturally into its resting position, which is why it\'s the common default for entrances.',
              },
            ],
          },
          {
            id: 'microinteractions',
            title: 'Micro-interactions',
            summary: 'The small, self-contained moments — like a like-button animation — that make software feel considered.',
            content: [
              'A micro-interaction is a small, self-contained product moment built around accomplishing one specific task — liking a post, toggling a setting, pulling down to refresh a feed. Designer Dan Saffer\'s widely referenced framework breaks every micro-interaction into four parts: a trigger (what starts it — a tap, a system event, a time-based condition), rules (what happens and in what order once triggered), feedback (what the user sees, hears, or feels to understand what\'s happening), and loops/modes (what happens on repeat use, or in edge cases, such as a "no items" mode of an empty list).',
              'Pull-to-refresh is a commonly cited example: the trigger is a downward drag past a threshold; the rules define what counts as "far enough" to release; the feedback is the visual stretch and loading spinner; and the mode covers what happens if there\'s nothing new to show.',
              'Good micro-interactions are usually invisible in the sense that they don\'t call attention to themselves — but their absence is very noticeable. A "like" button with no animation at all still works, but feels flat and mechanical compared to one with a small, satisfying bounce or fill.',
              'The risk with micro-interactions is treating them as a checklist of delight to sprinkle everywhere. Overusing elaborate animation on every minor interaction adds up to a slower, more distracting interface overall — the same restraint principle from typography and color applies here too.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'According to Dan Saffer\'s framework, what are the four parts of a micro-interaction?',
                options: [
                  'Discover, Define, Develop, Deliver',
                  'Trigger, Rules, Feedback, Loops/Modes',
                  'Plan, Design, Build, Ship',
                  'Input, Process, Output, Storage',
                ],
                correctIndex: 1,
                explanation: 'Saffer\'s framework describes every micro-interaction as a trigger that starts it, rules that govern what happens, feedback shown to the user, and loops/modes covering repeat use and edge cases.',
              },
              {
                id: 'q2',
                question: 'What is the risk of overusing elaborate micro-interaction animation across an entire interface?',
                options: [
                  'There is no risk, more animation is always better',
                  'It can make the interface feel slower and more distracting overall, the same way excessive color or type variety hurts restraint',
                  'It automatically breaks accessibility for all users',
                  'It reduces the number of triggers available',
                ],
                correctIndex: 1,
                explanation: 'Treating every interaction as an opportunity for elaborate animation adds cumulative friction and distraction — restraint matters here just as it does with color and typography choices.',
              },
            ],
          },
        ],
      },
      {
        id: 'layout-for-every-screen',
        title: 'Layout for Every Screen',
        steps: [
          {
            id: 'responsive-design-basics',
            title: 'Responsive Design Basics',
            summary: 'Designing a layout that adapts to the huge range of screen sizes people actually use.',
            content: [
              'Responsive design means a single layout adapts its structure across different screen sizes, rather than a design being built once and simply shrunk or clipped. The core mechanism is the breakpoint — a defined screen width at which the layout intentionally changes, such as a three-column grid collapsing into a single column on narrow screens.',
              'A "mobile-first" approach designs and builds the smallest, most constrained layout first, then progressively adds complexity as more screen space becomes available — rather than designing the ideal large-screen layout first and then trying to cram it into a small one as an afterthought. This tends to produce cleaner small-screen experiences, since the smallest layout was never treated as a compromise.',
              'Responsive design isn\'t only about resizing — it often means genuinely restructuring content. A sidebar that sits next to main content on a desktop screen might need to move below it, or into a collapsible drawer, on mobile, rather than just becoming a narrower sidebar that squeezes its content uncomfortably.',
              'Touch targets need their own consideration on small screens: interactive elements need to be large enough to tap accurately with a finger (commonly cited guidance suggests at least roughly 44×44 points), which is a substantially larger and more forgiving target than a precise mouse cursor needs.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does a "mobile-first" approach to responsive design mean?',
                options: [
                  'Only building a product for mobile devices, ignoring desktop entirely',
                  'Designing and building the smallest, most constrained layout first, then progressively adding complexity for larger screens',
                  'Designing the desktop layout first, then shrinking it down',
                  'Using the same exact layout regardless of screen size',
                ],
                correctIndex: 1,
                explanation: 'Mobile-first starts from the most constrained case and builds outward, rather than treating the small-screen version as an afterthought squeezed out of a large-screen design.',
              },
              {
                id: 'q2',
                question: 'Why do touch targets on mobile typically need to be larger than what\'s needed for a precise mouse cursor?',
                options: [
                  'They don\'t — target size is identical across input types',
                  'A finger is far less precise than a mouse cursor, so targets need more forgiving size to be tapped accurately',
                  'Larger targets are only a visual preference with no functional reason',
                  'Touch targets are only relevant for icon buttons',
                ],
                correctIndex: 1,
                explanation: 'Fingers are much less precise than a mouse pointer, so touch targets need generous minimum sizing (commonly around 44×44 points) to be reliably tappable.',
              },
            ],
          },
          {
            id: 'dark-mode-theming',
            title: 'Dark Mode & Theming',
            summary: 'Dark mode is not simply an inverted color scheme — it has its own contrast and depth rules.',
            content: [
              'A common misconception is that dark mode is just a light theme with colors inverted. In practice, a good dark theme needs its own deliberate palette: pure black backgrounds with pure white text create harsh, fatiguing contrast for many users and can cause a visual effect called "halation" around text, so dark themes commonly use a very dark gray rather than true black, and an off-white rather than pure white for text.',
              'Depth and elevation, normally communicated with drop shadows in a light theme, don\'t read well against a dark background — shadows are barely visible on dark surfaces. Dark themes typically communicate elevation instead by making higher surfaces progressively lighter in shade as they get "closer" to the viewer, since shadows can\'t do that visual work anymore.',
              'Semantic colors need re-tuning for dark backgrounds too: a saturated red or green that looks fine on white can appear overly harsh or vibrate uncomfortably against a dark background, so themes typically desaturate or adjust the lightness of status colors specifically for dark mode.',
              'The practical implication for how this app itself is built is worth noting directly: defining color as tokens (as covered in the theming section of this project\'s own README) rather than hardcoding hex values throughout components is exactly what makes supporting both a light and dark theme manageable instead of a full rewrite.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why do most dark themes avoid using pure black backgrounds with pure white text?',
                options: [
                  'Pure black and white are more expensive to render',
                  'The extreme contrast can feel harsh and fatiguing, and can cause a visual halation effect around text',
                  'Pure black is not supported on most screens',
                  'There is no real reason, it\'s an arbitrary trend',
                ],
                correctIndex: 1,
                explanation: 'Very high contrast between pure black and pure white can be visually harsh and tiring for many users, which is why dark themes commonly use dark gray and off-white instead.',
              },
              {
                id: 'q2',
                question: 'How do dark themes typically communicate elevation (depth) instead of using drop shadows?',
                options: [
                  'By making higher, closer surfaces progressively lighter in shade',
                  'By adding a colored border to every single element',
                  'Dark themes cannot represent elevation at all',
                  'By increasing the font size of elevated elements',
                ],
                correctIndex: 0,
                explanation: 'Since shadows are barely visible against dark backgrounds, dark themes commonly use lighter shading on surfaces meant to feel closer to the viewer instead.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'interaction-design',
    title: 'Interaction Design & Usability',
    description: 'Learn how interfaces communicate what\'s clickable, how they respond to actions, and the heuristics experts use to judge usability.',
    icon: '🖱️',
    color: '#E76F51',
    levels: [
      {
        id: 'core-interaction-principles',
        title: 'Core Interaction Principles',
        steps: [
          {
            id: 'affordances-signifiers',
            title: 'Affordances & Signifiers',
            summary: 'Why some things "look clickable" and others don\'t — and why that distinction matters.',
            content: [
              'An affordance is a property of an object that suggests how it can be used — a chair affords sitting, a door handle affords pulling. Don Norman applied this idea to interface design: a button affords pressing, a scrollbar affords dragging. The affordance is the actual possibility for action.',
              'A signifier is different: it\'s a perceivable cue that tells you where that action is possible. A drop shadow under a button, an underline on a link, a slight color change on hover — these don\'t create the affordance, they communicate it. Norman later emphasized that in design, signifiers matter more day-to-day than affordances themselves, because a hidden affordance most people never discover is functionally useless.',
              'This distinction explains a common failure mode in "flat design": stripping away shadows, borders, and other visual cues in the name of minimalism can leave a button looking identical to plain text. The affordance (it\'s still clickable) hasn\'t changed, but the signifier has vanished — so users simply never realize they can interact with it. Good interaction design keeps enough signifier even inside a minimal visual style.',
              'A quick test for any interactive element: if you removed all context, would a first-time user still be able to guess it responds to a click or tap? If not, it needs a stronger signifier — not necessarily more decoration, just a clearer cue.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the difference between an affordance and a signifier?',
                options: [
                  'They are the same thing, just different names',
                  'An affordance is the actual possibility for an action; a signifier is the perceivable cue that communicates it',
                  'A signifier is a type of animation; an affordance is a type of color',
                  'Affordances only apply to physical objects, never to interfaces',
                ],
                correctIndex: 1,
                explanation: 'The affordance is what\'s actually possible (a button can be pressed); the signifier is the visual cue (a shadow, underline, or color) that lets someone discover that possibility.',
              },
              {
                id: 'q2',
                question: 'Why can overly minimal "flat design" cause usability problems?',
                options: [
                  'Because flat design is always slower to load',
                  'Because removing shadows, borders, and other cues can strip away signifiers, leaving clickable elements looking like plain text',
                  'Because flat design removes affordances entirely, making buttons non-functional',
                  'Because minimalism is only a problem on mobile devices',
                ],
                correctIndex: 1,
                explanation: 'The element can still technically be clicked (the affordance remains), but without a signifier, users have no visual cue that it\'s interactive at all.',
              },
            ],
          },
          {
            id: 'feedback-system-status',
            title: 'Feedback & System Status',
            summary: 'Why every action deserves a visible response, and how fast that response needs to be.',
            content: [
              'One of the most fundamental rules in interaction design is that the system should always keep users informed about what is happening, through appropriate feedback within a reasonable time. Without it, users are left guessing whether their tap registered, whether something is loading, or whether it\'s safe to try again.',
              'Feedback takes many forms: a button visibly changing state when pressed, a spinner or progress bar during a wait, a toast notification confirming an action succeeded, or a red outline flagging an invalid form field. The specific form matters less than the fact that some response happens immediately.',
              'Response time itself follows well-established guidelines, often traced to research popularized by Jakob Nielsen. Around 0.1 seconds feels instantaneous — no extra feedback is needed beyond the direct visual change. Around 1 second, users notice a delay but their flow of thought stays uninterrupted, though a subtle indicator helps. Beyond about 10 seconds, users lose focus on the task entirely — at that point, a progress indicator with a sense of completion (not just a generic spinner) becomes necessary, or users will assume something has failed.',
              'The cost of skipping feedback isn\'t just annoyance — it\'s repeated actions (users clicking a submit button five times because nothing appeared to happen), lost trust, and users abandoning tasks they assume are broken.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'According to standard response-time guidelines, what generally needs to happen once a delay passes about 10 seconds?',
                options: [
                  'Nothing — users will always wait patiently',
                  'The interface should show a progress indicator with a sense of completion, or users will assume it failed',
                  'The action should be cancelled automatically',
                  'The page should reload from scratch',
                ],
                correctIndex: 1,
                explanation: 'Past roughly 10 seconds, users lose focus and start doubting the system is working — a meaningful progress indicator (not just a spinner) is needed to keep them engaged and confident.',
              },
              {
                id: 'q2',
                question: 'What commonly happens when an interface gives no feedback after a user taps a submit button?',
                options: [
                  'Users instinctively know to wait exactly as long as needed',
                  'Users may tap the button multiple times, assuming the first attempt failed',
                  'The lack of feedback has no real effect on behavior',
                  'Users will always assume the action succeeded',
                ],
                correctIndex: 1,
                explanation: 'Without visible confirmation, users often can\'t tell if their action registered, leading to repeated clicks/taps and, frequently, duplicate submissions.',
              },
            ],
          },
        ],
      },
      {
        id: 'usability-heuristics',
        title: 'Usability Heuristics',
        steps: [
          {
            id: 'nielsen-heuristics-part-1',
            title: 'Nielsen\'s Usability Heuristics (Part 1)',
            summary: 'The first five of Jakob Nielsen\'s ten general principles for interaction design.',
            content: [
              'In 1994, Jakob Nielsen published ten broad principles for usability, meant as general "rules of thumb" rather than strict guidelines — they\'re still one of the most widely used heuristic sets for evaluating interfaces today. The first five are:',
              '1. Visibility of system status — the system should always keep users informed about what\'s going on, through appropriate feedback within reasonable time (this is the same principle covered in the previous step).',
              '2. Match between system and the real world — the system should speak the user\'s language, with familiar words, phrases, and concepts, following real-world conventions rather than system-oriented terms. A trash-can icon for delete makes sense because it maps to a real-world concept; an icon of a "kill -9" command would not.',
              '3. User control and freedom — users often choose functions by mistake and need a clearly marked "emergency exit" to leave an unwanted state without going through an extended process. This is why undo, cancel buttons, and back navigation matter so much.',
              '4. Consistency and standards — users shouldn\'t have to wonder whether different words, situations, or actions mean the same thing. Following platform conventions (and staying internally consistent within your own product) reduces this cognitive load.',
              '5. Error prevention — even better than good error messages is a careful design that prevents a problem from occurring in the first place, such as disabling a submit button until a form is valid, or confirming before a destructive action.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which heuristic is illustrated by using a trash-can icon (instead of a technical term) to represent "delete"?',
                options: [
                  'Visibility of system status',
                  'Match between system and the real world',
                  'Error prevention',
                  'User control and freedom',
                ],
                correctIndex: 1,
                explanation: 'This heuristic is about using familiar, real-world concepts and language rather than system- or implementation-oriented terms.',
              },
              {
                id: 'q2',
                question: 'Disabling a "Submit" button until a required field is filled in is a direct application of which heuristic?',
                options: [
                  'Consistency and standards',
                  'Error prevention',
                  'User control and freedom',
                  'Match between system and the real world',
                ],
                correctIndex: 1,
                explanation: 'Error prevention favors designs that stop a problem from happening at all, rather than only showing a good error message after the fact.',
              },
            ],
          },
          {
            id: 'nielsen-heuristics-part-2',
            title: 'Nielsen\'s Usability Heuristics (Part 2)',
            summary: 'The remaining five of Nielsen\'s ten heuristics.',
            content: [
              'Continuing from the previous step, the last five of Nielsen\'s ten usability heuristics are:',
              '6. Recognition rather than recall — minimize the user\'s memory load by making objects, actions, and options visible, rather than forcing them to remember information from one part of the interface to another. A visible list of recent items beats asking a user to recall and retype something.',
              '7. Flexibility and efficiency of use — accelerators, invisible to novice users, can speed up interaction for experts (keyboard shortcuts, saved presets, batch actions), allowing a system to serve both infrequent and frequent users well.',
              '8. Aesthetic and minimalist design — interfaces shouldn\'t contain information that is irrelevant or rarely needed; every extra unit of information competes with the relevant units and diminishes their visibility.',
              '9. Help users recognize, diagnose, and recover from errors — error messages should be expressed in plain language (not codes), precisely indicate the problem, and constructively suggest a solution.',
              '10. Help and documentation — even though it\'s best if a system can be used without documentation, it may be necessary to provide help; such information should be easy to search, focused on the user\'s task, and not overly large.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Showing a dropdown of previously used values instead of requiring a user to retype something they entered earlier is an example of which heuristic?',
                options: [
                  'Recognition rather than recall',
                  'Aesthetic and minimalist design',
                  'Help and documentation',
                  'Flexibility and efficiency of use',
                ],
                correctIndex: 0,
                explanation: 'Making previously available information visible again — instead of relying on the user\'s memory — is the core idea behind "recognition rather than recall."',
              },
              {
                id: 'q2',
                question: 'What does the "aesthetic and minimalist design" heuristic actually argue for?',
                options: [
                  'Interfaces should have zero visual styling',
                  'Every screen should contain as much information as possible',
                  'Irrelevant or rarely needed information should be avoided, since it competes with and dilutes relevant information',
                  'Only large enterprises need to worry about this heuristic',
                ],
                correctIndex: 2,
                explanation: 'It\'s not about visual minimalism for its own sake — it\'s about avoiding low-value information that crowds out and reduces the visibility of what actually matters.',
              },
            ],
          },
        ],
      },
      {
        id: 'input-navigation-patterns',
        title: 'Input & Navigation Patterns',
        steps: [
          {
            id: 'forms-and-input-design',
            title: 'Forms & Input Design',
            summary: 'The small decisions in form design that determine whether people finish or abandon them.',
            content: [
              'Forms are one of the highest-friction moments in any product — every extra field is a small tax on the user\'s patience. The first, most effective lever is simply asking for less: every field should earn its place by being genuinely necessary right now, not "might be useful someday." Deferring optional information to later (after a core task is complete) is usually better than asking for it upfront.',
              'Layout research consistently favors a single-column form over multi-column layouts for anything beyond very short forms — a single column keeps a clear, unambiguous reading and completion order, while multiple columns force the eye to jump around and increase the chance of a field being skipped by mistake.',
              'Input types matter more on mobile than desktop: setting the correct input type (numeric, email, phone) determines which keyboard layout appears, saving users from hunting for the "@" symbol on a default keyboard. Autofill and appropriate autocomplete attributes further cut down the physical effort of typing.',
              'Validation timing is its own design decision. Validating too early (flagging an email as invalid while the user is still mid-way through typing it) feels punishing and premature; validating only after a full-form submit means users discover every problem at once, in a wall of errors. A common effective pattern is validating a field once the user has finished with it (on blur), giving feedback close to when the mistake was made without interrupting active typing.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why do single-column form layouts generally outperform multi-column layouts for most forms?',
                options: [
                  'Multi-column layouts are always technically impossible to build',
                  'A single column keeps a clear, unambiguous reading and completion order, reducing skipped fields',
                  'Single-column forms load faster',
                  'Multi-column layouts are only a problem on desktop, never on mobile',
                ],
                correctIndex: 1,
                explanation: 'A single column avoids the eye needing to jump between columns, which keeps the intended order clear and reduces the chance a field gets missed.',
              },
              {
                id: 'q2',
                question: 'What is a common downside of validating a field the instant a user starts typing into it?',
                options: [
                  'It has no downside and should always be done this way',
                  'It can feel premature and punishing, flagging an answer as wrong before the user has even finished typing it',
                  'It is technically impossible to implement',
                  'It only works for numeric fields',
                ],
                correctIndex: 1,
                explanation: 'Validating too early interrupts the user mid-thought and flags incomplete input as if it were a final, wrong answer — validating on blur (after leaving the field) is a common middle ground.',
              },
            ],
          },
          {
            id: 'navigation-patterns',
            title: 'Navigation Patterns',
            summary: 'Choosing between tab bars, hamburger menus, and other structures based on what they actually cost and offer.',
            content: [
              'Navigation patterns aren\'t interchangeable skins — each comes with real tradeoffs in discoverability and efficiency. A visible tab bar (persistent icons/labels for a handful of top-level destinations) keeps every major section one tap away and constantly visible, which is why it\'s the standard for the small number of primary destinations in a mobile app.',
              'A hamburger menu (a hidden list of options behind a menu icon) trades that visibility for screen space: it can hold far more items, but every one of them becomes invisible until a user thinks to open it. Research has repeatedly found this pattern reduces engagement with the items it hides, compared to the same items being visible — hidden functionality effectively becomes undiscovered functionality for a meaningful share of users.',
              'Breadcrumbs solve a different problem: showing a user their current location within a deep hierarchy (Home > Category > Subcategory > Item), and letting them jump back up multiple levels at once, which is especially valuable in content-heavy, hierarchical sites.',
              'The right choice depends on how many top-level destinations exist and how often each is used: a small number of frequently-used destinations favors a persistent tab bar; a large number of secondary or rarely-used options is a more reasonable fit for a hidden menu, ideally alongside easier access to the highest-frequency items.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is a well-documented downside of hiding navigation items behind a hamburger menu?',
                options: [
                  'Hamburger menus are technically impossible to implement on mobile',
                  'It tends to reduce engagement with the hidden items, since they\'re no longer visible as a reminder that they exist',
                  'It has no measurable effect on user behavior',
                  'It only affects desktop users, not mobile',
                ],
                correctIndex: 1,
                explanation: 'Multiple studies on navigation patterns have found that hiding options behind a menu reduces how often users interact with them, compared to keeping those same options persistently visible.',
              },
              {
                id: 'q2',
                question: 'What specific problem do breadcrumbs solve?',
                options: [
                  'They speed up page load times',
                  'They show a user\'s current location within a deep hierarchy and let them jump back up multiple levels at once',
                  'They replace the need for a search feature',
                  'They are primarily a decorative footer element',
                ],
                correctIndex: 1,
                explanation: 'Breadcrumbs give users a clear sense of where they are within a nested structure and a fast way to navigate back up, which is especially useful in deep, hierarchical content.',
              },
            ],
          },
        ],
      },
      {
        id: 'errors-edge-cases',
        title: 'Errors & Edge Cases',
        steps: [
          {
            id: 'error-messages-recovery',
            title: 'Error Messages & Recovery',
            summary: 'A good error message names the problem, avoids blame, and offers a way out.',
            content: [
              'An error message has one real job beyond stating that something went wrong: helping the user recover. A message like "Error 4029" or "Something went wrong" tells a user that a problem exists but gives them nothing to act on. A stronger message names what happened in plain language and, wherever possible, suggests a concrete next step: "We couldn\'t save your changes because the file is too large. Try a file under 10MB."',
              'Tone matters as much as content. Messages that imply user fault ("You entered an invalid value") read more harshly than framing the same information neutrally ("This field needs a value between 1 and 100"). Small wording choices like this shape whether a user feels supported or scolded at exactly the moment they\'re already frustrated.',
              'Errors also need the right scope and placement. A field-level error (a typo in an email field) should appear right next to that field, not buried in a generic banner at the top of the page that forces the user to hunt for which field it actually refers to. A system-level error (the whole save operation failed) belongs in a more prominent, page-level location since no single field is responsible.',
              'This connects directly back to error prevention, covered earlier in this subject\'s heuristics: the best error message is often the one that never needs to appear, because the interface stopped the mistake before it happened.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the main problem with an error message like "Error 4029" shown with no further explanation?',
                options: [
                  'It is too long for most screens',
                  'It confirms something went wrong but gives the user nothing actionable to do about it',
                  'It uses too much technical jargon that scares users away entirely',
                  'Numeric error codes are against accessibility guidelines',
                ],
                correctIndex: 1,
                explanation: 'A message needs to explain what happened in plain language and, ideally, what to do next — a bare code leaves the user stuck without any path to recovery.',
              },
              {
                id: 'q2',
                question: 'Where should a field-level error (like an invalid email format) typically be shown?',
                options: [
                  'In a single generic banner at the very top of the page',
                  'Directly next to the field it refers to',
                  'Only in the browser\'s console log',
                  'It should never be shown until the user tries to leave the page entirely',
                ],
                correctIndex: 1,
                explanation: 'Placing the error next to its field keeps the connection between the message and the problem obvious, instead of forcing users to hunt for which field a generic banner is about.',
              },
            ],
          },
          {
            id: 'empty-states-edge-cases',
            title: 'Empty States & Edge Cases',
            summary: 'The "unhappy paths" — no data, no connection, first use — that are easy to design around and skip.',
            content: [
              'Most design attention naturally goes to the "happy path" — the ideal case where everything works and there\'s plenty of content to show. But a huge share of real usage happens outside that ideal case: a brand-new user with zero data yet, a search with no results, a list after everything in it has been deleted, or a connection that just dropped.',
              'A first-use empty state (before a user has any content) is a genuine design opportunity, not just a blank screen to tolerate — it can explain what the section is for and prompt the very first action that gets a new user started, which matters a lot for onboarding.',
              'A "no results" empty state (after a search or filter that matched nothing) should distinguish itself clearly from a first-use empty state, and ideally suggest a next step — broadening a filter, checking spelling, or clearing search terms — rather than just repeating "no results found" with no path forward.',
              'Offline and error states deserve the same deliberate design as any other screen: a generic broken-looking screen with no explanation reads as the product being broken, while a clear "you\'re offline — we\'ll retry automatically" message reads as an anticipated, handled situation. Designing these states late, or not at all, is one of the most common gaps between a polished demo and a product that holds up in the real world.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is a first-use empty state considered a design opportunity rather than just a blank screen?',
                options: [
                  'Because it should always be left completely blank for simplicity',
                  'Because it can explain the section\'s purpose and prompt the first action, which matters for onboarding new users',
                  'Because empty states are never seen by real users',
                  'Because it is required to be identical to the "no results" state',
                ],
                correctIndex: 1,
                explanation: 'A thoughtfully designed first-use state helps orient brand-new users and nudge them toward their first meaningful action, rather than leaving them looking at nothing.',
              },
              {
                id: 'q2',
                question: 'What distinguishes a well-designed "no results" state from simply showing an unexplained blank/broken-looking screen?',
                options: [
                  'Nothing, they should look identical',
                  'A well-designed "no results" state clearly explains the situation and suggests a next step, like adjusting a filter or search term',
                  'A "no results" state should never mention search or filters at all',
                  'It should always redirect the user to the homepage automatically',
                ],
                correctIndex: 1,
                explanation: 'Clearly naming the situation and offering a next step (broaden the search, clear a filter) helps users recover, instead of leaving them to guess whether something is broken.',
              },
            ],
          },
        ],
      },
      {
        id: 'evaluating-interactions',
        title: 'Evaluating Interactions',
        steps: [
          {
            id: 'heuristic-evaluation-vs-testing',
            title: 'Heuristic Evaluation vs. Usability Testing',
            summary: 'Expert review and real-user testing catch different kinds of problems — which is why strong teams use both.',
            content: [
              'A heuristic evaluation is an expert review: one or more evaluators, familiar with established usability principles (such as Nielsen\'s ten heuristics from earlier in this subject), systematically inspect an interface and flag violations — a missing loading indicator, inconsistent button styles, no visible way to undo an action. It\'s fast, relatively cheap, and doesn\'t require recruiting any outside participants.',
              'Usability testing, covered in the UX Fundamentals subject, instead observes real, representative users attempting real tasks. It reliably surfaces problems that heuristic evaluation can miss — confusion specific to a particular audience\'s vocabulary or mental model, a workflow that technically follows every heuristic but still doesn\'t match how actual users think about the task.',
              'The two methods have a complementary blind spot: a heuristic evaluation is limited by the evaluator\'s own knowledge and assumptions, and can miss issues that only appear when someone unfamiliar with the product actually tries to use it. Usability testing, in turn, is limited by how many participants and tasks are practical to test, and can miss issues in areas nobody happened to interact with during a session.',
              'A well-resourced process runs both, often in sequence: a heuristic evaluation early to catch known, well-understood problems cheaply, followed by usability testing to catch the unknown problems that only emerge from real behavior.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is a heuristic evaluation?',
                options: [
                  'A test where real users attempt tasks while being observed',
                  'An expert review where evaluators inspect an interface against established usability principles',
                  'A method for measuring server load times',
                  'A type of A/B test',
                ],
                correctIndex: 1,
                explanation: 'A heuristic evaluation relies on expert reviewers systematically checking an interface against known usability principles, without involving outside participants.',
              },
              {
                id: 'q2',
                question: 'Why do many teams use heuristic evaluation and usability testing together rather than choosing just one?',
                options: [
                  'Because they always produce identical findings, so using both provides confirmation',
                  'Because each method has a different blind spot — heuristic evaluation is limited by evaluator knowledge, testing is limited by session/task coverage',
                  'Because usability testing is being phased out entirely',
                  'Because heuristic evaluation cannot be performed by more than one person',
                ],
                correctIndex: 1,
                explanation: 'The two methods complement each other\'s weaknesses — expert review catches known issues cheaply, while real-user testing catches problems that only surface from actual behavior.',
              },
            ],
          },
          {
            id: 'ab-testing-basics',
            title: 'A/B Testing Basics',
            summary: 'Comparing two versions with real traffic — and understanding exactly what that comparison can and can\'t tell you.',
            content: [
              'An A/B test shows two variants of a design — a control ("A") and a challenger ("B") — to different, randomly assigned segments of real traffic, then compares a target metric (click-through rate, conversion rate, time on task) between the two groups to see which performs better.',
              'A result only means something if it reaches statistical significance — a measure of how likely the observed difference is to be real, rather than random noise from natural variation in behavior. A difference that "looks" bigger from a small sample can easily be pure chance; stopping a test too early, before enough data has accumulated, is one of the most common ways A/B testing gets misused.',
              'A/B testing has a specific, narrow strength: it\'s very good at telling you which of two options performs better on a metric you can already measure at scale. It\'s not good at telling you why — a variant might win by accident, for an unrelated or even superficial reason, while some other underlying usability problem remains completely invisible in the numbers.',
              'Because of that gap, A/B testing pairs naturally with qualitative methods rather than replacing them: quantitative results tell a team where a difference exists, and qualitative research (interviews, usability testing) explains why users responded the way they did — the same complementary relationship between quantitative and qualitative research covered back in the User Research basics.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why does stopping an A/B test too early pose a risk?',
                options: [
                  'It saves money, so there is no real risk',
                  'A difference observed on too little data may just be random noise rather than a statistically significant, real effect',
                  'Early results are always more accurate than later ones',
                  'A/B tests are not affected by sample size at all',
                ],
                correctIndex: 1,
                explanation: 'Without enough data to reach statistical significance, an apparent difference between variants could easily be random variation rather than a genuine effect.',
              },
              {
                id: 'q2',
                question: 'What is a key limitation of A/B testing on its own?',
                options: [
                  'It cannot be run on real user traffic',
                  'It can show which variant performs better on a measured metric, but doesn\'t explain why users responded that way',
                  'It always requires a very small sample size',
                  'It can only be used for pricing pages',
                ],
                correctIndex: 1,
                explanation: 'A/B testing is strong at measuring "which one wins" at scale, but explaining the underlying reasons requires pairing it with qualitative research.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'accessibility-basics',
    title: 'Accessibility Basics',
    description: 'Design and build interfaces that work for people with a wide range of abilities — the principles, patterns, and pitfalls of accessible UX.',
    icon: '♿',
    color: '#E76F51',
    levels: [
      {
        id: 'foundations-of-accessibility',
        title: 'Foundations of Accessibility',
        steps: [
          {
            id: 'why-accessibility-matters',
            title: 'Why Accessibility Matters',
            summary: 'Disability is more common and more varied than most people assume — and the POUR framework that guides accessible design.',
            content: [
              'Accessibility (often abbreviated a11y) means designing products that people with a wide range of abilities can use. It\'s easy to picture "disability" narrowly — someone permanently blind, or a wheelchair user — but the reality is broader. The Microsoft Inclusive Design framework usefully splits disability into permanent (missing a limb, blindness), temporary (an eye infection, an arm in a cast), and situational (holding a baby in one arm, using a phone in bright sunlight, a noisy environment making audio hard to hear). Everyone experiences at least the situational category regularly — which means accessible design benefits far more people than a "compliance checkbox" framing suggests.',
              'The most widely referenced accessibility standard is the Web Content Accessibility Guidelines (WCAG), organized around four principles known by the acronym POUR: content must be Perceivable (available through at least one sense — sight isn\'t the only option), Operable (usable via multiple input methods, not just a mouse), Understandable (predictable, with clear language and instructions), and Robust (works reliably across different browsers, devices, and assistive technologies).',
              'Each principle maps to concrete practices covered in later steps: perceivable connects to color contrast and alt text, operable connects to keyboard navigation, understandable connects to clear labels and error messages, and robust connects to using correct, semantic HTML.',
              'A common misconception is that accessibility is a final "pass" done right before launch. In practice, it\'s far cheaper and more effective to build with POUR in mind from the start — retrofitting accessibility into a finished, inaccessible product usually means redoing structural decisions, not just adding a few ARIA attributes at the end.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the "situational" category of disability refer to, in frameworks like Microsoft\'s Inclusive Design?',
                options: [
                  'A rare, permanent medical condition',
                  'A temporary limitation like a broken arm',
                  'A limitation caused by someone\'s current context, like holding a baby or being in bright sunlight',
                  'A disability that only affects elderly users',
                ],
                correctIndex: 2,
                explanation: 'Situational limitations come from context, not the person\'s body itself — and nearly everyone experiences them, which is part of why accessible design has such broad benefit.',
              },
              {
                id: 'q2',
                question: 'What does the "P" in the WCAG POUR framework stand for?',
                options: [
                  'Practical',
                  'Perceivable',
                  'Predictable',
                  'Portable',
                ],
                correctIndex: 1,
                explanation: 'Perceivable means content must be presented in ways users can perceive through at least one sense — for example, providing text alternatives for non-text content.',
              },
            ],
          },
          {
            id: 'contrast-perceivable-content',
            title: 'Color Contrast & Perceivable Content',
            summary: 'How much contrast text needs, and why color alone is never enough to convey meaning.',
            content: [
              'For text to be perceivable to users with low vision or color-vision deficiencies, it needs sufficient contrast against its background. WCAG 2 defines specific ratios: at the commonly targeted "AA" level, normal text needs at least a 4.5:1 contrast ratio against its background, while large text (roughly 18pt+, or 14pt+ bold) needs at least 3:1, since larger text is inherently easier to distinguish at lower contrast.',
              'These ratios apply to more than body copy — placeholder text, disabled-looking-but-actually-active buttons, and icon-only controls are common places contrast gets overlooked, precisely because designers often want them to look "quiet" or de-emphasized.',
              'A separate, equally important rule: color should never be the sole way information is conveyed. A form field that turns red on error, with no icon or text explaining what went wrong, fails for anyone with red-green color blindness (the most common form, affecting roughly 1 in 12 men). The fix is usually simple — pair the color with an icon, a label, or a text message, so the color reinforces meaning rather than carrying it alone.',
              'The same logic extends to non-text content generally: images need meaningful alt text (describing what the image conveys, not just "image123.jpg"), and purely decorative images should have empty alt text so screen readers skip over them instead of reading out unhelpful filler.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'At WCAG\'s "AA" level, what is the minimum contrast ratio required for normal-sized body text?',
                options: [
                  '1.5:1',
                  '3:1',
                  '4.5:1',
                  '10:1',
                ],
                correctIndex: 2,
                explanation: 'Normal text requires at least 4.5:1 contrast against its background at the AA level; large text has a lower bar of 3:1 since it\'s inherently easier to read.',
              },
              {
                id: 'q2',
                question: 'Why is it a problem for a form to indicate an error using only a red border, with no icon or text?',
                options: [
                  'Red borders are against most design systems',
                  'It fails for users with color blindness, who can\'t rely on color alone to detect the error state',
                  'It has no real accessibility impact, only a visual one',
                  'Red is not a valid CSS color for borders',
                ],
                correctIndex: 1,
                explanation: 'Color-blind users (most commonly with red-green color blindness) may not perceive the red cue at all, so the error becomes invisible unless it\'s paired with a non-color signal.',
              },
            ],
          },
        ],
      },
      {
        id: 'building-accessible-interfaces',
        title: 'Building Accessible Interfaces',
        steps: [
          {
            id: 'keyboard-navigation-focus',
            title: 'Keyboard Navigation & Focus',
            summary: 'Why every interaction needs to work without a mouse, and how visible focus makes that usable.',
            content: [
              'Many people don\'t use a mouse or touchscreen at all — because of a motor impairment, because they use a switch device or voice control, or simply because they prefer the keyboard. WCAG\'s "Operable" principle requires that all functionality be available from a keyboard, with no exceptions that trap a user in one part of the page.',
              'Two things make keyboard navigation actually usable: a logical tab order (moving through interactive elements in the order they visually appear, not scattered by an unrelated DOM order) and a clearly visible focus indicator — the outline or highlight that shows which element is currently focused. It\'s tempting to remove the default focus outline for aesthetic reasons (`outline: none` in CSS), but doing so without providing a replacement leaves keyboard users with no way to tell where they are on the page at all.',
              'A related, frequently missing pattern is the "skip link" — a link, often visually hidden until focused, that lets a keyboard user jump straight to the main content instead of having to tab through an entire navigation menu on every single page.',
              'A useful way to test this yourself: put the mouse aside and try to complete a core task using only Tab, Shift+Tab, Enter, and arrow keys. Any point where you get stuck, lose track of where focus is, or simply can\'t reach something is a real accessibility gap — not a hypothetical one.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What problem does removing the default focus outline (e.g. via `outline: none`) cause if nothing replaces it?',
                options: [
                  'It has no meaningful effect on usability',
                  'Keyboard users lose all visual indication of which element is currently focused',
                  'It only affects mouse users, not keyboard users',
                  'It automatically improves accessibility scores',
                ],
                correctIndex: 1,
                explanation: 'Keyboard users rely entirely on the focus indicator to know where they are on the page — removing it without a replacement makes keyboard navigation effectively unusable.',
              },
              {
                id: 'q2',
                question: 'What is the purpose of a "skip link" at the top of a page?',
                options: [
                  'To skip past required form fields',
                  'To let a keyboard user jump directly to the main content instead of tabbing through the entire navigation first',
                  'To skip loading images for faster performance',
                  'To automatically log the user out',
                ],
                correctIndex: 1,
                explanation: 'A skip link saves keyboard users from having to tab through every navigation item on every page just to reach the actual page content.',
              },
            ],
          },
          {
            id: 'semantic-html-screen-readers',
            title: 'Semantic HTML & Screen Readers',
            summary: 'Why using the right native element matters more than adding ARIA on top of the wrong one.',
            content: [
              'Screen readers work by interpreting the underlying structure of a page — not how it visually looks. A `<button>` element automatically tells a screen reader "this is a button, it can be activated," is automatically keyboard-focusable, and responds to Enter/Space by default. A `<div>` styled to look identical but wired up with a click handler gives a screen reader none of that information for free, and isn\'t keyboard-operable at all unless a developer manually rebuilds all of that missing behavior.',
              'This is the idea behind the informal "first rule of ARIA": if a native HTML element or attribute already has the semantics and behavior you need, use it, rather than reaching for a `<div>` plus ARIA attributes to fake the same thing. ARIA exists to describe custom widgets that have no native equivalent (like a complex combobox or a tab panel), not to patch over avoidable choices.',
              'Form accessibility depends heavily on this same idea: every input needs a properly associated `<label>` (not just placeholder text, which disappears once typing starts and isn\'t reliably announced the same way). Grouped fields, like a set of radio buttons for one question, should be wrapped in a `<fieldset>` with a `<legend>` describing the group.',
              'The practical takeaway isn\'t "memorize ARIA attributes" — it\'s "reach for the correct native element first, and treat ARIA as the exception for cases HTML genuinely doesn\'t cover."',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why does a `<div>` with a click handler behave worse for accessibility than a native `<button>`, even if they look identical?',
                options: [
                  'They actually behave identically in every way',
                  'The `<div>` doesn\'t automatically get button semantics, keyboard focusability, or Enter/Space activation — those all need to be rebuilt manually',
                  'Screen readers cannot render `<div>` elements at all',
                  '`<div>` elements are always slower to load',
                ],
                correctIndex: 1,
                explanation: 'A native `<button>` comes with built-in semantics and keyboard behavior for free; a `<div>` requires manually re-implementing all of that to reach the same level of accessibility.',
              },
              {
                id: 'q2',
                question: 'Why is placeholder text alone not a sufficient replacement for a `<label>` on a form input?',
                options: [
                  'Placeholder text is not supported in modern browsers',
                  'Placeholder text disappears once the user starts typing and isn\'t a reliable substitute for an associated label',
                  'Labels are only needed for checkboxes, not text inputs',
                  'There is no actual difference between the two',
                ],
                correctIndex: 1,
                explanation: 'Placeholder text vanishes as soon as input begins and isn\'t consistently exposed the same way a real `<label>` is — so it can\'t reliably tell a user (sighted or using a screen reader) what a field is for.',
              },
            ],
          },
        ],
      },
      {
        id: 'assistive-technology-content',
        title: 'Assistive Technology & Content',
        steps: [
          {
            id: 'how-screen-readers-work',
            title: 'How Screen Readers Work',
            summary: 'Screen readers turn structure into navigation — which only works if that structure is meaningful.',
            content: [
              'A screen reader converts on-screen content into synthesized speech or braille output, letting a blind or low-vision user navigate an interface without seeing it. Rather than "seeing" a page the way sighted users do, a screen reader user experiences it as a linear sequence, read out in the order it exists in the underlying code — which is exactly why the visual order and the underlying code order need to match.',
              'Screen reader users rarely read a page top-to-bottom like a book. Instead, they jump between landmarks (regions like navigation, main content, and footer) and headings, using dedicated keyboard shortcuts to skip directly to the section they care about — much like a sighted user visually scans a page for the right heading before reading in detail.',
              'This is exactly why heading structure (`<h1>` through `<h6>`) is a navigation tool, not just a font-size shortcut. Skipping heading levels for visual reasons (using an `<h4>` somewhere because it happens to look the right size, with no `<h2>` or `<h3>` above it) breaks that navigation structure, even though it might look perfectly fine visually.',
              'The practical implication: accessible structure and visual design are related but separate concerns. A page can look identical to sighted users whether or not its headings are correctly nested — the difference only becomes obvious the moment someone tries to navigate it with a screen reader.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'How do screen reader users typically navigate a page, according to this step?',
                options: [
                  'They must read every word from top to bottom in order, with no way to skip ahead',
                  'They jump between landmarks and headings using keyboard shortcuts, similar to how sighted users visually scan for the right section',
                  'They can only interact with images, not text',
                  'They navigate exclusively using color cues',
                ],
                correctIndex: 1,
                explanation: 'Screen reader users commonly jump directly to landmarks and headings rather than reading everything linearly, which is why meaningful structure matters so much.',
              },
              {
                id: 'q2',
                question: 'Why is choosing a heading level (like `<h4>`) purely because of its visual size a problem?',
                options: [
                  'It isn\'t a problem, heading levels are purely a styling choice',
                  'It can break the logical navigation structure screen reader users rely on, even though it may look fine visually',
                  'It will prevent the page from loading',
                  'Heading tags have no effect on screen readers at all',
                ],
                correctIndex: 1,
                explanation: 'Heading levels double as a navigation outline for screen reader users — skipping levels for visual reasons breaks that outline even if the visual result looks correct.',
              },
            ],
          },
          {
            id: 'writing-accessible-content',
            title: 'Writing Accessible Content',
            summary: 'Word choice is an accessibility decision, not just a tone decision.',
            content: [
              'Accessible content starts with plain language: shorter sentences, familiar words, and a clear structure benefit users with cognitive disabilities, users who are reading in a non-native language, and honestly, everyone under time pressure or reading on a small screen. Clarity is rarely a tradeoff against quality writing — it usually is quality writing.',
              'Link text deserves particular care. A page full of "click here" or "read more" links is meaningless out of context — and screen reader users often pull up a list of all links on a page as a navigation shortcut, which means a page full of identical, non-descriptive link text becomes a wall of indistinguishable options. Descriptive link text ("Read our refund policy" instead of "click here") stays meaningful whether it\'s read in context or pulled into that isolated list.',
              'Instructions that rely purely on visual or spatial position ("click the button on the right," "see the green box above") assume a shared visual experience that not every user has — someone using a screen reader has no inherent sense of "right" or "above," and someone with color blindness may not perceive "green" the way intended. Referring to a control by its visible label or name is more robust than referring to its position or color.',
              'None of this requires sacrificing a distinctive voice or tone — accessible writing is a discipline layered on top of good writing, not a replacement for it.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is generic link text like "click here" repeated across a page a specific problem for screen reader users?',
                options: [
                  'It isn\'t a problem, screen readers ignore link text entirely',
                  'Screen reader users often browse a list of all links on a page, where repeated generic text becomes indistinguishable',
                  'It causes the page to fail to load',
                  '"Click here" is technically invalid HTML',
                ],
                correctIndex: 1,
                explanation: 'When links are pulled into an out-of-context list (a common screen reader navigation shortcut), non-descriptive text like "click here" provides no way to tell them apart.',
              },
              {
                id: 'q2',
                question: 'Why should instructions avoid relying purely on position or color, like "click the button on the right"?',
                options: [
                  'Because buttons should never be positioned on the right side of a screen',
                  'Because not every user shares the same visual experience — screen reader users and colorblind users may not perceive position or color the way intended',
                  'Because it makes sentences too short',
                  'Because "right" and "left" are not valid words in accessible writing',
                ],
                correctIndex: 1,
                explanation: 'Referring to a control by its actual label is more robust than relying on spatial position or color, which not every user perceives the same way.',
              },
            ],
          },
        ],
      },
      {
        id: 'accessible-components-motion',
        title: 'Accessible Components & Motion',
        steps: [
          {
            id: 'accessible-forms-in-depth',
            title: 'Accessible Forms in Depth',
            summary: 'Beyond a visible label — how forms communicate structure, grouping, and errors to assistive technology.',
            content: [
              'Every input needs a programmatically associated label, not just a visually nearby one. Wrapping an input in a `<label>` element (or connecting them with a matching `for`/`id` pair) means a screen reader announces the label when the field receives focus, and — as a bonus for every user — clicking the label text itself focuses or activates the input.',
              'Related fields benefit from explicit grouping. A set of radio buttons all answering one question ("How did you hear about us?") should be wrapped in a `<fieldset>` with a `<legend>` naming the group, so a screen reader announces the shared question once, rather than a user encountering five unlabeled options with no shared context.',
              'Error messages need a programmatic connection to their field, not just visual proximity. An attribute like `aria-describedby` links an input to its error text so a screen reader announces the error at the moment the field is focused — without it, a sighted user sees the error message right next to the field, while a screen reader user may never discover it exists.',
              'Marking a field as required needs more than a color cue or an asterisk alone (which echoes the color-only-signifier problem from earlier in this subject) — the `required` attribute or an equivalent ARIA property communicates that requirement directly to assistive technology, not just visually.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is wrapping an input in a `<label>` element (or linking them via `for`/`id`) better than just placing text visually near the input?',
                options: [
                  'It has no real benefit beyond visual styling',
                  'It creates a programmatic association, so a screen reader announces the label and clicking the label focuses/activates the input',
                  'It is only needed for checkbox inputs',
                  'It makes the form load faster',
                ],
                correctIndex: 1,
                explanation: 'A programmatic label association is what lets assistive technology actually announce the label — visual proximity alone conveys nothing to a screen reader.',
              },
              {
                id: 'q2',
                question: 'What problem does `aria-describedby` solve when linking an error message to its input?',
                options: [
                  'It changes the visual color of the error message',
                  'It ensures a screen reader announces the error when the field is focused, instead of the error being invisible to non-visual users',
                  'It prevents the form from being submitted',
                  'It is required for all buttons, not just error messages',
                ],
                correctIndex: 1,
                explanation: 'Without a programmatic connection like `aria-describedby`, a screen reader user has no way to discover an error message that a sighted user can simply see next to the field.',
              },
            ],
          },
          {
            id: 'motion-vestibular-safety',
            title: 'Motion & Vestibular Safety',
            summary: 'For some users, the wrong kind of motion isn\'t just annoying — it\'s physically disorienting.',
            content: [
              'Large-scale motion — parallax scrolling effects, elements that zoom or spin dramatically, big simulated 3D movement — can trigger real physical symptoms (dizziness, nausea, headaches) in people with vestibular disorders, a category of conditions affecting the inner ear and balance system. This isn\'t a matter of taste or preference; it\'s a genuine physical safety consideration, much like a strobing light can trigger a seizure for someone with photosensitive epilepsy.',
              'Operating systems expose a system-level "reduce motion" setting specifically for this reason, and the web has a corresponding way to detect it (the `prefers-reduced-motion` media query). Respecting that setting — replacing large, sweeping animations with a simple fade or an instant state change, while keeping small, purely functional feedback like a button\'s press state — lets users who\'ve opted in to less motion use a product safely and comfortably.',
              'This connects directly back to the motion principles covered in the Visual Design subject: motion that serves a real functional purpose (feedback, continuity) can often be preserved even in a reduced-motion mode, just scaled down — it\'s the large-scale, decorative motion that most needs an alternative.',
              'Reduced motion isn\'t a niche edge case to deprioritize — it sits alongside color contrast and keyboard access as one of the more common accessibility accommodations that costs relatively little engineering effort to support once designed for from the start.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why can large-scale motion effects like parallax scrolling be a genuine safety concern, not just a taste issue?',
                options: [
                  'They slow down page load times',
                  'They can trigger real physical symptoms like dizziness or nausea in people with vestibular disorders',
                  'They are against most companies\' branding guidelines',
                  'They only affect very old devices',
                ],
                correctIndex: 1,
                explanation: 'Large-scale motion can physically affect people with vestibular (balance-related) conditions, making this a genuine accessibility and safety concern rather than a purely aesthetic one.',
              },
              {
                id: 'q2',
                question: 'What is the purpose of the `prefers-reduced-motion` media query?',
                options: [
                  'To detect the user\'s preferred color theme',
                  'To let a website detect a user\'s system-level reduced-motion preference and adjust or remove large-scale animation accordingly',
                  'To automatically translate content into another language',
                  'To speed up image loading',
                ],
                correctIndex: 1,
                explanation: 'It lets a site respect a system-level accessibility setting by scaling back or removing large, potentially disorienting animations for users who\'ve requested less motion.',
              },
            ],
          },
        ],
      },
      {
        id: 'testing-and-the-business-case',
        title: 'Testing & The Business Case',
        steps: [
          {
            id: 'accessibility-testing-tools',
            title: 'Accessibility Testing Tools & Methods',
            summary: 'Automated tools catch some problems fast — the rest still need a human.',
            content: [
              'Automated accessibility testing tools (such as axe or the accessibility audit built into Lighthouse) scan a page\'s code and flag concrete, rule-based violations: missing alt text, insufficient color contrast, form inputs with no associated label, invalid ARIA usage. They run fast and integrate easily into a development workflow, catching a meaningful set of common mistakes early.',
              'Automated tools are commonly estimated to catch somewhere around 30–40% of real accessibility issues. Anything requiring human judgment — does this alt text actually describe the image meaningfully, does the tab order make logical sense, is this error message actually understandable — is outside what automation can evaluate on its own.',
              'Manual testing fills that gap: navigating an entire flow using only a keyboard, and separately, testing with an actual screen reader (VoiceOver on Apple devices, NVDA or JAWS on Windows are common choices) to hear how the experience is actually announced, not just how it looks.',
              'The most reliable check of all is testing with real users who use assistive technology as part of their daily life — their experience and workarounds often reveal problems and priorities that even a careful manual audit by a non-disabled tester would miss entirely.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Roughly what share of accessibility issues do automated tools typically catch on their own?',
                options: [
                  'Nearly 100% — automated tools are sufficient on their own',
                  'Around 30–40%, with the rest requiring human judgment',
                  '0% — automated tools provide no useful signal at all',
                  'Exactly 50%, by industry standard',
                ],
                correctIndex: 1,
                explanation: 'Automated tools reliably catch a meaningful chunk of rule-based issues, but a large share of real accessibility problems require human judgment to identify.',
              },
              {
                id: 'q2',
                question: 'Why is testing with actual users of assistive technology considered especially valuable?',
                options: [
                  'It replaces the need for any other kind of testing',
                  'Their lived experience often reveals problems and workarounds that even a careful manual audit by a non-disabled tester would miss',
                  'It is required by law in every country',
                  'It is faster than running an automated scan',
                ],
                correctIndex: 1,
                explanation: 'Real assistive-technology users bring lived experience and context that even a thorough manual audit by someone unfamiliar with daily AT use is likely to miss.',
              },
            ],
          },
          {
            id: 'legal-standards-business-case',
            title: 'Legal Standards & the Business Case',
            summary: 'Accessibility is often a legal requirement — and, separately, a business case that stands on its own.',
            content: [
              'Accessibility carries real legal weight in many jurisdictions. In the US, the Americans with Disabilities Act (ADA) has been applied to websites and apps by courts, and Section 508 sets accessibility requirements specifically for federal agencies and their contractors; the EU has its own requirements under the European Accessibility Act and EN 301 549. Requirements and enforcement vary by region, but the trend across most major markets has been toward stricter, more consistently enforced expectations, not looser ones.',
              'WCAG itself defines three conformance levels: A (the most basic, addressing the most severe barriers), AA (the level most legal standards and organizations target — including everything covered across this subject), and AAA (the most stringent, often impractical to fully achieve across an entire product, and not usually required by law).',
              'Beyond legal exposure, there\'s a business case that stands on its own. The population with a disability of some kind is large — commonly cited estimates put it around 15–20% of people globally — which is a substantial addressable audience to exclude by accident. Accessible, semantic HTML also tends to overlap directly with what search engines can parse well, meaning accessibility work often improves SEO as a side effect, not a separate cost.',
              'A useful framing sometimes called the "curb-cut effect": curb cuts (the sloped sidewalk edges at street corners) were originally built for wheelchair users, but end up helping parents with strollers, delivery workers with hand trucks, and travelers with rolling luggage. Accessibility features aimed at a specific need frequently end up improving the experience for a much broader group than originally intended.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which WCAG conformance level is most commonly targeted by legal standards and organizations?',
                options: [
                  'Level A only',
                  'Level AA',
                  'Level AAA',
                  'There is no standard level referenced by law',
                ],
                correctIndex: 1,
                explanation: 'AA is the level most legal standards and organizations aim for — it addresses a broad, practical range of barriers without the often-impractical demands of full AAA conformance.',
              },
              {
                id: 'q2',
                question: 'What does the "curb-cut effect" illustrate about accessibility features?',
                options: [
                  'That accessibility features only ever benefit the specific group they were designed for',
                  'That a feature designed for one specific need (like wheelchair access) frequently ends up benefiting a much broader group of people',
                  'That curb cuts are unrelated to digital accessibility in any way',
                  'That accessibility improvements always increase costs with no offsetting benefit',
                ],
                correctIndex: 1,
                explanation: 'The curb-cut effect describes how accessibility accommodations built for one group (like wheelchair users) often end up helping a much wider range of people than originally intended.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    description: 'The human-centered, iterative mindset behind creative problem-solving — from empathy through ideation to testing, and beyond screens.',
    icon: '💡',
    color: '#E76F51',
    levels: [
      {
        id: 'the-design-thinking-mindset',
        title: 'The Design Thinking Mindset',
        steps: [
          {
            id: 'what-is-design-thinking',
            title: 'What Is Design Thinking?',
            summary: 'A human-centered, non-linear approach to solving problems — popularized by Stanford\'s d.school and IDEO.',
            content: [
              'Design thinking is a problem-solving approach built around deeply understanding the people affected by a problem before jumping to solutions. It\'s most commonly described through five stages, popularized by Stanford\'s d.school: Empathize, Define, Ideate, Prototype, and Test. Despite the tidy list, it isn\'t meant to be followed strictly in order — teams regularly loop backward, revisiting empathy after a failed test, or reframing the problem after an early prototype reveals something unexpected.',
              'It\'s worth noticing the family resemblance to the Double Diamond model covered in UX Design Fundamentals — both center on understanding a problem deeply before solving it, and both treat divergence (generating many options) and convergence (narrowing to one) as distinct, deliberate phases. Design thinking\'s five stages and the Double Diamond\'s four are two popular lenses on largely the same underlying philosophy, developed by different institutions.',
              'What distinguishes design thinking as a mindset, more than a fixed process, is its explicit human-centered starting point: rather than beginning with a technology capability or a business requirement and working outward, it starts by immersing in the lived experience of the people the solution is for.',
              'Design thinking also isn\'t limited to interfaces or even digital products — it\'s widely applied to services, physical products, organizational processes, and social challenges, which is why later steps in this subject look beyond screens entirely.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What are the five stages of design thinking as popularized by Stanford\'s d.school?',
                options: [
                  'Discover, Define, Develop, Deliver, Deploy',
                  'Empathize, Define, Ideate, Prototype, Test',
                  'Plan, Build, Launch, Measure, Scale',
                  'Research, Design, Code, Test, Ship',
                ],
                correctIndex: 1,
                explanation: 'The d.school\'s widely referenced model names these five stages, though in practice teams move between them non-linearly rather than strictly in sequence.',
              },
              {
                id: 'q2',
                question: 'What does it mean that design thinking is "non-linear" in practice?',
                options: [
                  'It has no defined stages at all',
                  'Teams often loop backward between stages — such as revisiting empathy after a failed test — rather than moving through them once, in strict order',
                  'It can only be used for digital products',
                  'Every stage must be completed by a different team member',
                ],
                correctIndex: 1,
                explanation: 'The stages describe a mindset and a set of activities, not a rigid one-way pipeline — real projects frequently jump backward as new understanding emerges.',
              },
            ],
          },
          {
            id: 'empathize-building-understanding',
            title: 'Empathize: Building Genuine Understanding',
            summary: 'The first stage isn\'t research for its own sake — it\'s deliberately setting assumptions aside.',
            content: [
              'The Empathize stage is about building a genuine, first-hand understanding of the people a solution is meant to serve — their needs, motivations, and the context they operate in — rather than relying on assumptions about what they probably want. This overlaps with the user research methods covered elsewhere in this learning path, but design thinking frames it specifically as an act of empathy, not just data collection.',
              'Empathy interviews, a common technique here, deliberately favor open-ended questions and follow-up "why" questions over structured surveys, and pay close attention to a subject\'s emotional language and body language, not just their literal answers — because people are often better at describing a workaround they\'ve invented than at diagnosing the underlying problem it\'s a workaround for.',
              'Immersion techniques go a step further than asking questions: actually observing people in their real context, or even attempting to experience a constraint firsthand (a well-known example is designers spending time in a wheelchair to understand mobility barriers), can surface friction that would never come up in an interview because the person experiencing it has stopped consciously noticing it.',
              'The core discipline of this stage is suspending judgment — resisting the urge to jump to "here\'s how we\'d fix that" mid-conversation. Solving prematurely, even mentally, narrows what a team notices and hears during exactly the phase meant to keep their thinking wide open.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why might empathy interviews favor open-ended "why" questions over structured surveys?',
                options: [
                  'Because surveys are always more expensive to run',
                  'Because people are often better at describing a workaround than diagnosing the underlying problem, and open follow-ups can surface that',
                  'Because open-ended questions are faster to analyze',
                  'Because structured surveys cannot be conducted digitally',
                ],
                correctIndex: 1,
                explanation: 'Open-ended, "why"-driven questions give room to uncover the reasoning and underlying problem behind a stated behavior, which a fixed-choice survey question typically can\'t capture.',
              },
              {
                id: 'q2',
                question: 'What is the core discipline emphasized during the Empathize stage?',
                options: [
                  'Proposing as many solutions as possible immediately',
                  'Suspending judgment and resisting the urge to jump to solutions mid-conversation',
                  'Only interviewing people who already like the product',
                  'Skipping straight to prototyping to save time',
                ],
                correctIndex: 1,
                explanation: 'Solving prematurely — even just mentally — narrows what a team notices during the phase specifically meant to keep observation and listening wide open.',
              },
            ],
          },
        ],
      },
      {
        id: 'defining-the-right-problem',
        title: 'Defining the Right Problem',
        steps: [
          {
            id: 'pov-statements',
            title: 'Problem Framing & Point-of-View Statements',
            summary: 'Turning a pile of empathy research into one sharp, actionable problem statement.',
            content: [
              'The Define stage takes everything gathered during Empathize and distills it into a specific, actionable problem statement — often called a point-of-view (POV) statement. A commonly taught template combines three parts: a specific user, their need, and an insight explaining why that need matters ("[User] needs [need] because [insight]").',
              'The insight portion is what separates a strong POV statement from a shallow one. "A new employee needs an easier onboarding checklist" states a need but not why it matters. "A new employee needs a clear sense of what\'s expected of them in week one, because uncertainty about priorities is what\'s actually driving their anxiety" gives the team a real "why" to design against — and opens up solutions beyond just "a checklist."',
              'A well-formed POV statement is deliberately narrow enough to be actionable, but not so narrow that it presupposes a specific solution. "A new employee needs a mobile app with push notifications" has smuggled a solution into what should still be an open problem statement.',
              'Because Define sits between Empathize and Ideate, a POV statement isn\'t meant to be permanent — it\'s common, and healthy, for it to get revised again after ideation or early testing surfaces something the team didn\'t understand yet.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What are the three parts of the commonly taught POV statement template?',
                options: [
                  'Problem, Solution, Outcome',
                  'A specific user, their need, and an insight explaining why that need matters',
                  'Discover, Define, Deliver',
                  'Budget, Timeline, Stakeholders',
                ],
                correctIndex: 1,
                explanation: 'The template combines a specific user, a stated need, and the underlying insight that explains why the need is meaningful — the insight is what gives the statement real direction.',
              },
              {
                id: 'q2',
                question: 'What is the problem with a POV statement like "A new employee needs a mobile app with push notifications"?',
                options: [
                  'It is too long',
                  'It smuggles a specific solution into what should still be an open problem statement',
                  'It does not mention a specific user',
                  'Mobile apps cannot be referenced in a POV statement',
                ],
                correctIndex: 1,
                explanation: 'A good POV statement names a need and why it matters without presupposing the answer — jumping to "a mobile app" forecloses other, possibly better, solutions before ideation even starts.',
              },
            ],
          },
          {
            id: 'how-might-we-questions',
            title: 'How Might We Questions',
            summary: 'Reframing a problem statement into an invitation to brainstorm.',
            content: [
              'A "How Might We" (HMW) question translates a POV statement into a form specifically designed to invite ideation. Each word does real work: "How" implies that a solution is possible without claiming to know what it is yet; "Might" signals that not every idea needs to be right, lowering the pressure to propose only "correct" ideas; "We" frames it as a shared, collaborative challenge rather than one person\'s task to solve alone.',
              'Scope is the main thing to get right when writing an HMW question. Too broad ("How might we improve onboarding?") gives so much latitude that ideation sessions produce vague, disconnected ideas with no shared focus. Too narrow ("How might we add a progress bar to step 3?") has already picked a solution, leaving no real room for ideation at all.',
              'A useful technique for calibrating scope is generating several HMW questions from the same POV statement, at different levels of breadth, and picking whichever one seems to open the richest, most focused set of possible directions — treating the HMW question itself as something worth iterating on, not just a mechanical rewrite of the POV statement.',
              'Multiple HMW questions can also come from a single POV statement by focusing on different angles of the same insight — one HMW might attack the emotional side of a problem, while another attacks a purely practical or logistical angle, deliberately generating a wider spread of ideas across the team.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the word "Might" contribute to a "How Might We" question?',
                options: [
                  'It specifies the exact solution the team should build',
                  'It lowers the pressure to only propose "correct" ideas, signaling that not every idea needs to be right',
                  'It has no real purpose and could be removed',
                  'It indicates the question is optional to answer',
                ],
                correctIndex: 1,
                explanation: '"Might" deliberately keeps the bar low for contributing ideas during brainstorming, encouraging volume and openness rather than only "safe" suggestions.',
              },
              {
                id: 'q2',
                question: 'Why is "How might we add a progress bar to step 3?" a weak HMW question?',
                options: [
                  'It is too vague to act on',
                  'It has already picked a specific solution, leaving little real room for ideation',
                  'It does not include the word "we"',
                  'Progress bars cannot be referenced in HMW questions',
                ],
                correctIndex: 1,
                explanation: 'A good HMW question stays open enough to invite multiple possible solutions — this one has effectively already chosen the answer before ideation begins.',
              },
            ],
          },
        ],
      },
      {
        id: 'ideation-techniques',
        title: 'Ideation Techniques',
        steps: [
          {
            id: 'brainstorming-rules',
            title: 'Brainstorming Rules & Divergent Thinking',
            summary: 'Good brainstorming follows deliberate rules — it isn\'t just "everyone shout out ideas."',
            content: [
              'Ideation is a divergent-thinking activity: the explicit goal is generating a large volume of possible directions, with judgment deliberately deferred until later. IDEO and the d.school popularized a well-known set of brainstorming rules that make this actually work in a group setting, rather than defaulting into cautious, safe suggestions.',
              'The core rules include: defer judgment (no criticizing or even praising ideas mid-session, since evaluation shuts down the freewheeling thinking that produces unexpected ideas), encourage wild ideas (an impractical idea often contains a genuinely useful kernel once refined), build on the ideas of others ("yes, and..." rather than "no, but..."), stay focused on the topic, one conversation at a time (side conversations fragment the group\'s energy), be visual (sketching an idea, even roughly, communicates faster than describing it), and go for quantity (a large volume of ideas statistically increases the odds a genuinely strong one shows up among them).',
              'Deferring judgment is the rule most commonly broken, often unintentionally — a raised eyebrow or a dismissive "hmm" is enough to signal that an idea wasn\'t welcome, and can quietly shut down the person\'s willingness to keep contributing for the rest of the session.',
              'Facilitation matters as much as the rules themselves: without an active facilitator gently reinforcing them in the moment, a group\'s natural tendency to converge early and judge ideas as they come in will override good intentions almost every time.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why does the "defer judgment" rule matter so much during brainstorming?',
                options: [
                  'It doesn\'t matter — critiquing ideas immediately improves quality',
                  'Even subtle judgment (like a dismissive reaction) can shut down the open, freewheeling thinking the session depends on',
                  'It is only relevant in remote brainstorming sessions',
                  'It means no idea can ever be evaluated, even after the session ends',
                ],
                correctIndex: 1,
                explanation: 'Evaluating ideas mid-session — even subtly — discourages people from continuing to contribute freely, undermining the divergent thinking the exercise is meant to produce.',
              },
              {
                id: 'q2',
                question: 'What is the reasoning behind the "go for quantity" brainstorming rule?',
                options: [
                  'Quantity is valued for its own sake, regardless of idea quality',
                  'A larger volume of ideas statistically increases the odds that a genuinely strong idea appears among them',
                  'It ensures every participant contributes exactly the same number of ideas',
                  'It replaces the need for later idea selection entirely',
                ],
                correctIndex: 1,
                explanation: 'Generating many ideas widens the pool from which strong, sometimes unexpected, solutions can be found and later refined.',
              },
            ],
          },
          {
            id: 'structured-ideation-methods',
            title: 'Structured Ideation Methods',
            summary: 'When open brainstorming stalls, structured prompts can force new angles.',
            content: [
              'Open brainstorming works well, but can stall once a group has exhausted their most obvious ideas. Structured ideation techniques give a group a specific lens or constraint to force fresh angles rather than circling the same few directions.',
              'SCAMPER is one such technique: a checklist of prompts — Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse — applied to an existing idea or product to systematically generate variations. Asking "what if we combined this with something else" or "what if we eliminated this step entirely" often surfaces ideas that wouldn\'t appear from an unstructured "just think of something new" prompt.',
              'Crazy 8s is a fast-sketching exercise: each participant folds a sheet of paper into eight sections and has roughly one minute per section to sketch a distinct idea, forcing quick iteration and preventing anyone from over-investing in a single first idea before moving on.',
              'A method like "worst possible idea" intentionally asks for the most unhelpful, absurd solution imaginable — which, counterintuitively, tends to loosen up a group that\'s been too cautious, and often reveals a usable insight buried inside the deliberately bad idea once it\'s inverted or taken half-seriously.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the SCAMPER technique provide during ideation?',
                options: [
                  'A way to vote on which idea is best',
                  'A checklist of prompts (Substitute, Combine, Adapt, etc.) used to systematically generate variations on an existing idea',
                  'A method for scheduling brainstorming sessions',
                  'A way to test finished prototypes with users',
                ],
                correctIndex: 1,
                explanation: 'SCAMPER gives structured prompts that force a fresh angle on an existing idea, which is especially useful once open brainstorming has stalled.',
              },
              {
                id: 'q2',
                question: 'What is the purpose of a "worst possible idea" exercise?',
                options: [
                  'To permanently rule out an entire category of solutions',
                  'To loosen up an overly cautious group, often revealing a usable insight once the deliberately bad idea is inverted or taken half-seriously',
                  'To punish participants who suggest weak ideas',
                  'To replace the need for any further ideation',
                ],
                correctIndex: 1,
                explanation: 'Deliberately generating a "bad" idea removes the pressure to only suggest "good" ones, and often reveals a genuinely useful angle once examined or inverted.',
              },
            ],
          },
        ],
      },
      {
        id: 'prototyping-and-testing-mindsets',
        title: 'Prototyping & Testing Mindsets',
        steps: [
          {
            id: 'prototyping-to-think',
            title: 'Prototyping to Think, Not Just to Show',
            summary: 'In design thinking, a prototype is primarily a tool for learning — not a preview of the finished product.',
            content: [
              'It\'s easy to think of a prototype purely as a preview — a rough version of what the finished thing will eventually look like. Design thinking treats prototyping as something more active: a way of thinking through and testing an idea by making it tangible, specifically so it can be reacted to. A prototype exists to generate feedback and learning, not to impress anyone.',
              'This reframing changes what counts as a "good" prototype. The right fidelity is whatever is fast and cheap enough to build several of, and specific enough to answer the question currently in front of the team — a service idea might be prototyped as a simple role-play or a paper flyer, a physical product as a rough foam mockup, an app feature as a handful of sketched screens taped together.',
              'The often-repeated phrase "fail fast" belongs here: the point isn\'t to celebrate failure, it\'s that a cheap, quick prototype makes a wrong idea cheap and quick to discover and discard, compared to discovering the same flaw only after a large investment of time and money.',
              'A useful habit: before building a prototype, name the specific question it\'s meant to answer ("will people understand what this icon means without a label?"). A prototype built without a clear question tends to generate vague, hard-to-act-on feedback like "looks nice" instead of a real answer.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'In design thinking, what is a prototype primarily meant to do?',
                options: [
                  'Serve as a polished preview of the finished product',
                  'Generate feedback and learning by making an idea tangible enough to react to',
                  'Replace the need for any further testing',
                  'Demonstrate technical skill to stakeholders',
                ],
                correctIndex: 1,
                explanation: 'A design-thinking prototype exists to be reacted to and learned from — its job is testing an idea, not showcasing a finished result.',
              },
              {
                id: 'q2',
                question: 'What is the actual point of the phrase "fail fast" in this context?',
                options: [
                  'Failure itself is the goal to celebrate',
                  'A cheap, quick prototype makes discovering a wrong idea fast and low-cost, compared to discovering it after a large investment',
                  'Teams should intentionally build broken prototypes',
                  'It means skipping the testing phase entirely',
                ],
                correctIndex: 1,
                explanation: '"Fail fast" is about the low cost of learning something isn\'t working early, via a cheap prototype, rather than an endorsement of failure for its own sake.',
              },
            ],
          },
          {
            id: 'testing-learning-loops',
            title: 'Testing & Learning Loops',
            summary: 'The Test stage exists to feed learning back into earlier stages, not to be a final verdict.',
            content: [
              'The Test stage puts a prototype in front of real people and observes their reactions — but in the context of design thinking, it isn\'t a pass/fail gate at the end of a linear process. It\'s a deliberate loop back into the earlier stages: a test can reveal that the POV statement was wrong, that the HMW question was scoped incorrectly, or that an entirely different problem is more urgent than the one the team started with.',
              'A useful mental model is treating each round of testing as a new round of empathy-gathering, not just validation. Watching someone react to a prototype often surfaces the same kind of unscripted, revealing behavior that empathy interviews are meant to surface — sometimes more so, because a tangible prototype gives people something concrete to react to instead of describing a hypothetical.',
              'A simple test plan states, in advance, what\'s being tested, what a "successful" reaction would look like, and what question the team hopes to answer — echoing the same discipline covered in prototyping. Without that, a test session risks becoming an unfocused show-and-tell rather than a structured way of learning something specific.',
              'Because design thinking is explicitly iterative, a team that finds their first prototype "worked" isn\'t necessarily done — the natural next move is often a slightly more refined prototype and another round of testing, continuing the loop rather than treating one successful round as a finish line.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is the Test stage described as a "loop back" rather than a final step?',
                options: [
                  'Because testing is optional and can be skipped',
                  'Because a test can reveal that an earlier stage — like the POV statement or HMW question — needs to be revisited and revised',
                  'Because it always confirms the original idea was correct',
                  'Because it only applies to physical products',
                ],
                correctIndex: 1,
                explanation: 'Design thinking treats testing as feeding new understanding back into empathy, definition, or ideation — not as a final checkpoint that ends the process.',
              },
              {
                id: 'q2',
                question: 'What is the value of writing a simple test plan before a testing session?',
                options: [
                  'It guarantees the prototype will succeed',
                  'It focuses the session around a specific question and what a successful reaction would look like, instead of an unfocused show-and-tell',
                  'It eliminates the need to observe participants directly',
                  'It is only useful for very large, expensive studies',
                ],
                correctIndex: 1,
                explanation: 'A stated plan keeps a test session structured and purposeful, mirroring the same "know your question before you build" discipline used in prototyping.',
              },
            ],
          },
        ],
      },
      {
        id: 'design-thinking-beyond-screens',
        title: 'Design Thinking Beyond Screens',
        steps: [
          {
            id: 'applying-beyond-digital',
            title: 'Applying Design Thinking to Business & Service Problems',
            summary: 'The same mindset scales from a single feature to an entire service or organizational process.',
            content: [
              'Design thinking\'s origins are in industrial design, and its principles apply just as directly to problems with no interface at all: redesigning a hospital\'s patient check-in process, rethinking how a bank branch handles a stressful conversation about a loan, or restructuring an internal process between departments that keeps causing friction.',
              'Service design is one of the most direct extensions of this idea — treating an entire end-to-end service (not just its digital touchpoints) as something to be deliberately designed, often visualized with a "service blueprint" that maps not just what the customer experiences, but the backstage staff actions, systems, and processes that make each customer-facing moment possible.',
              'Applying design thinking to a non-digital, cross-functional problem usually requires more deliberate facilitation than a single product team\'s workshop — stakeholders from different departments often start with genuinely different, sometimes conflicting, mental models of the problem, and empathy work in this context includes understanding colleagues\' constraints, not just external customers\' needs.',
              'The throughline across every application, digital or not, stays the same: start from a real, specific understanding of the people affected, resist jumping straight to a solution, and treat the first attempt as something to learn from and refine rather than get right immediately.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does a "service blueprint" typically map, beyond what the customer directly experiences?',
                options: [
                  'Only the visual design of a mobile app',
                  'The backstage staff actions, systems, and processes that make each customer-facing moment possible',
                  'A company\'s marketing budget',
                  'A single user\'s personal journey map',
                ],
                correctIndex: 1,
                explanation: 'A service blueprint extends beyond the customer-facing surface to show the internal processes and people that support each visible moment of the service.',
              },
              {
                id: 'q2',
                question: 'Why might applying design thinking to a cross-functional, non-digital problem require more facilitation than a typical product workshop?',
                options: [
                  'Because non-digital problems are always simpler to solve',
                  'Because stakeholders from different departments often start with genuinely different, sometimes conflicting, mental models of the problem',
                  'Because design thinking cannot be applied outside of software teams',
                  'Because facilitation is never needed for digital projects',
                ],
                correctIndex: 1,
                explanation: 'Cross-functional stakeholders frequently bring different assumptions and constraints to the table, which takes more deliberate facilitation to surface and align than a single team\'s internal workshop.',
              },
            ],
          },
          {
            id: 'pitfalls-and-criticisms',
            title: 'Common Pitfalls & Criticisms of Design Thinking',
            summary: 'Understanding where the process breaks down in practice is as important as knowing the ideal version.',
            content: [
              'Design thinking has drawn real criticism, and understanding it makes the practice stronger, not weaker. One common critique is "design thinking theater" — teams going through the visible motions (sticky notes, workshops, an HMW wall) without the substantive rigor underneath, treating the artifacts of the process as the goal rather than the understanding they\'re supposed to produce.',
              'A related pitfall is treating the five stages as a strict, one-way pipeline rather than the iterative loop they\'re meant to be — Empathize once, then never returning to it, even when later stages reveal the team\'s original understanding was incomplete or wrong.',
              'Skipping empathize under time pressure is a particularly costly shortcut, since every later stage compounds on a possibly wrong foundation — an elegant, well-tested solution to a misunderstood problem is still the wrong solution.',
              'A fair broader criticism is that design thinking, as commonly taught, can understate how much real expertise, technical constraint-handling, and organizational context matter to actually shipping a solution — the process gives a strong starting structure, but it isn\'t a substitute for genuine skill, domain knowledge, or the harder organizational work of getting a solution actually built and adopted.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does "design thinking theater" refer to?',
                options: [
                  'A stage play about the history of design',
                  'Teams going through the visible motions of the process — sticky notes, workshops — without the substantive rigor and understanding underneath',
                  'A required final presentation stage of every project',
                  'A specific brainstorming technique',
                ],
                correctIndex: 1,
                explanation: '"Design thinking theater" describes performing the visible rituals of the process while missing the genuine depth of understanding they\'re meant to produce.',
              },
              {
                id: 'q2',
                question: 'Why is skipping the Empathize stage under time pressure considered especially costly?',
                options: [
                  'It isn\'t costly — later stages can fully compensate for it',
                  'Every later stage builds on that initial understanding, so a well-executed solution to a misunderstood problem is still the wrong solution',
                  'It only affects the visual design of the final product',
                  'It has no effect on the outcome, only the process\'s appearance',
                ],
                correctIndex: 1,
                explanation: 'Since later stages are built on the foundation Empathize establishes, skipping it risks a well-built solution to a problem the team never actually understood correctly.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'What a design system actually is beyond a UI kit — tokens, component architecture, documentation, governance, and how one gets adopted.',
    icon: '🧩',
    color: '#E76F51',
    levels: [
      {
        id: 'what-is-a-design-system',
        title: 'What Is a Design System?',
        steps: [
          {
            id: 'beyond-a-ui-kit',
            title: 'Beyond a UI Kit',
            summary: 'A design system is a set of rules and shared components — not just a file of pre-made screens.',
            content: [
              'A UI kit is a collection of pre-made visual assets — buttons, icons, color swatches — that a designer can drag into a mockup. A design system is broader and more structural: it\'s a single source of truth combining reusable components, the design tokens and principles behind them, and documented guidelines for how and when to use each piece, shared across designers and engineers alike.',
              'The distinction matters because a UI kit alone doesn\'t prevent drift. Two designers can both use "buttons from the kit" while quietly diverging — one adds a slightly different padding here, another reaches for a one-off custom component there — because a kit provides assets, but not the shared rules and single implementation that keep a product consistent as it\'s built by many different people over time.',
              'A mature design system typically spans both design and engineering artifacts in parallel: a component exists once as a design file (or equivalent) and once as real, shipped code, with both versions kept in sync — which is what actually prevents the common gap between "what the mockup shows" and "what got built."',
              'Well-known public examples — Google\'s Material Design, Apple\'s Human Interface Guidelines and its associated components, Shopify\'s Polaris — illustrate the scope: far more than a color palette, they include interaction guidelines, accessibility requirements, writing/voice guidance, and detailed rules for when a pattern should or shouldn\'t be used.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is the key difference between a UI kit and a design system?',
                options: [
                  'They are exactly the same thing with different names',
                  'A UI kit is a collection of visual assets; a design system also includes shared rules, tokens, and documentation that keep usage consistent across a whole team',
                  'A design system only applies to engineers, never designers',
                  'A UI kit always contains more components than a design system',
                ],
                correctIndex: 1,
                explanation: 'A UI kit provides assets to use, but a design system adds the shared rules, principles, and documentation that actually prevent inconsistent use of those assets over time.',
              },
              {
                id: 'q2',
                question: 'Why does a mature design system typically maintain both a design-file version and a coded version of each component?',
                options: [
                  'To make the system harder to use on purpose',
                  'Keeping both in sync is what prevents the common gap between what a mockup shows and what actually gets built',
                  'Only the coded version is ever necessary',
                  'Design files are only used for marketing purposes',
                ],
                correctIndex: 1,
                explanation: 'Maintaining a synced design and code version of each component is what actually closes the gap between design intent and shipped reality.',
              },
            ],
          },
          {
            id: 'the-business-case',
            title: 'The Business Case for Design Systems',
            summary: 'Consistency at scale, less rebuilt work, and faster shipping — the practical payoff of investing in a system.',
            content: [
              'Building a design system is a real upfront investment, so it\'s worth being explicit about what it buys back. The most direct benefit is consistency at scale: as a product and team grow, a shared system is what keeps buttons, spacing, and interaction patterns behaving the same way across dozens of screens built by different people, instead of consistency depending on everyone individually remembering and agreeing on every past decision.',
              'A second, often underappreciated benefit is speed. Once a well-documented button, form field, or modal component exists, building a new screen becomes assembly rather than invention — teams stop re-solving the same small design and engineering problems (how should disabled state look, what\'s the correct focus outline) over and over on every new feature.',
              'This directly reduces what\'s often called "design debt" — the accumulated cost of many slightly-different, one-off implementations of what should be the same underlying component. Design debt compounds the same way technical debt does: every inconsistent variant makes the next redesign or accessibility fix more expensive, because there are more places to find and update.',
              'The tradeoff worth acknowledging honestly: a design system has real maintenance cost, and building one too early — before a product\'s patterns have stabilized, or before there\'s more than one team building on it — can mean investing significant effort into abstractions that get thrown away as the product\'s real needs become clearer.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'How does a design system typically increase the speed of building new features?',
                options: [
                  'It doesn\'t — design systems always slow initial development down',
                  'Well-documented, reusable components turn new-screen work into assembly rather than reinventing the same small problems each time',
                  'By removing the need for any design review',
                  'By automatically generating all product copy',
                ],
                correctIndex: 1,
                explanation: 'Once solved once and documented, common patterns don\'t need to be redesigned and re-engineered from scratch for every new feature.',
              },
              {
                id: 'q2',
                question: 'What is a legitimate risk of building a full design system too early?',
                options: [
                  'There is no risk — earlier is always strictly better',
                  'Investing significant effort into abstractions before a product\'s patterns have stabilized can mean building things that get thrown away',
                  'Early design systems are always more accessible',
                  'It guarantees the product will fail',
                ],
                correctIndex: 1,
                explanation: 'Building a system before real usage patterns have stabilized risks committing to structures and components that don\'t end up matching the product\'s actual needs.',
              },
            ],
          },
        ],
      },
      {
        id: 'foundations-and-tokens',
        title: 'Foundations & Tokens',
        steps: [
          {
            id: 'design-tokens-explained',
            title: 'Design Tokens Explained',
            summary: 'The small named values that bridge design decisions and the actual code that ships.',
            content: [
              'A design token is a named, reusable value — a specific color, spacing size, font size, or corner radius — stored once and referenced everywhere it\'s used, instead of being hardcoded repeatedly throughout a codebase or a set of design files. Instead of a button and a card both independently specifying the hex value "#6C5CE7," both reference a token like `color-primary`, which is defined in exactly one place.',
              'The practical payoff shows up the moment something needs to change: updating one token\'s value propagates everywhere that token is referenced, instead of requiring a manual hunt through every file that happens to use that exact hex code — this project\'s own theming approach, covered in its README, is a direct, small-scale example of the same idea.',
              'Tokens are commonly organized in tiers. "Global" or "primitive" tokens hold raw values (a specific shade of blue, a specific pixel size) with no assigned meaning yet. "Semantic" or "alias" tokens then point to a primitive token but carry a functional name (`color-danger` might point to that same raw red value, but the semantic name is what a component actually references). This layering is exactly what makes theming — like swapping an entire light/dark palette — a matter of redefining the semantic layer\'s mappings, without ever touching the components that use them.',
              'Tokens exist specifically to translate cleanly between design tools and code: a token defined in a design tool can be exported and consumed directly by the codebase, keeping the two in sync without a person manually re-typing values by hand in both places.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What problem does storing a color as a single named token solve, compared to hardcoding the same hex value in many places?',
                options: [
                  'It makes the color load faster',
                  'Updating the token\'s value propagates everywhere it\'s used, instead of requiring a manual search-and-replace across every file',
                  'It has no practical benefit over hardcoding',
                  'It is only useful for accessibility, not maintenance',
                ],
                correctIndex: 1,
                explanation: 'A single source of truth for a value means changing it once updates every place that references the token, rather than hunting down every hardcoded instance.',
              },
              {
                id: 'q2',
                question: 'What is the difference between a "primitive" token and a "semantic" token?',
                options: [
                  'They are the same thing, just different names',
                  'A primitive token holds a raw value with no assigned meaning; a semantic token points to a primitive value but carries a functional name components can reference',
                  'Semantic tokens can only be used for typography',
                  'Primitive tokens are only used in dark mode',
                ],
                correctIndex: 1,
                explanation: 'This layering — semantic tokens referencing primitives — is what makes swapping an entire theme a matter of remapping the semantic layer, without touching components.',
              },
            ],
          },
          {
            id: 'building-a-foundation',
            title: 'Building a Foundation',
            summary: 'Color, type, and spacing scales — designed together as a coherent system, not chosen ad hoc.',
            content: [
              'The "foundation" layer of a design system covers the base decisions everything else is built on: a color system, a type scale, and a spacing scale — the same building blocks covered individually back in the Visual Design subject, but here treated explicitly as a deliberately designed, interconnected system rather than individual choices made screen by screen.',
              'A color system for a design system typically defines a full range (often numbered shades, like 100 through 900) for each core hue, not just one primary value — giving enough range to handle hover/pressed states, disabled states, borders, and backgrounds derived from the same base color, all while staying visually related to one another.',
              'A type scale and spacing scale, as covered earlier in Visual Design Basics, become foundation tokens here: instead of a designer picking "somewhere around 14px" by eye each time, the system defines a fixed, limited set of steps (`text-sm`, `text-base`, `text-lg`; `space-2`, `space-4`, `space-8`) that every component draws from, which is what actually enforces the consistency a design system promises.',
              'A foundation is deliberately meant to be the slowest-changing layer of a system. Components and patterns built on top of it can evolve relatively often; changing the foundation itself (a new color system, a new type scale) is a much larger, more disruptive change precisely because so much else depends on it — which is why foundational decisions deserve extra care before being locked in.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why does a design system\'s color system typically define a full range of shades for each hue, not just one value?',
                options: [
                  'To make the color palette look larger for marketing purposes',
                  'To provide enough range to handle hover/pressed/disabled states and derived backgrounds while staying visually related',
                  'Because a single shade cannot be stored as a token',
                  'It has no practical purpose, it\'s purely aesthetic',
                ],
                correctIndex: 1,
                explanation: 'A full range of shades gives components what they need for various states (hover, disabled, etc.) while keeping everything visually coherent with the base hue.',
              },
              {
                id: 'q2',
                question: 'Why is the foundation layer described as the "slowest-changing" part of a design system?',
                options: [
                  'Because it is technically impossible to change',
                  'Because so many components and patterns depend on it, making foundational changes far more disruptive than changes higher up the system',
                  'Because it is rebuilt every week by convention',
                  'Because foundations are not allowed to include color',
                ],
                correctIndex: 1,
                explanation: 'Since components across the whole system build on the foundation, changing it has a much wider ripple effect than changing an individual component or pattern.',
              },
            ],
          },
        ],
      },
      {
        id: 'component-architecture',
        title: 'Component Architecture',
        steps: [
          {
            id: 'atomic-design-methodology',
            title: 'Atomic Design Methodology',
            summary: 'Brad Frost\'s way of thinking about interfaces as layered compositions, from tiny pieces up to full pages.',
            content: [
              'Atomic design, a methodology introduced by Brad Frost, organizes interface elements into five layers of increasing complexity, borrowing its naming from chemistry. Atoms are the smallest functional pieces — a single button, a label, an input field — that can\'t be broken down further without losing their purpose. Molecules combine a small number of atoms into a simple, functional unit, like a labeled input paired with its submit button, forming a basic search form.',
              'Organisms combine molecules (and sometimes atoms) into a more complex, distinct section of an interface — a full site header combining a logo, a navigation menu, and that search form molecule together. Templates arrange organisms into a page-level layout, but with placeholder content, showing structure without final content. Pages are templates filled with real, final content, ready to represent what a user actually sees.',
              'The value of this layered thinking isn\'t the specific five names — it\'s the discipline of noticing which layer a component actually belongs to, since that determines where reuse and consistency should be enforced. Fixing a button\'s padding at the atom layer automatically fixes every molecule, organism, and page built from it, which is a fundamentally different (and more scalable) fix than editing padding individually wherever a similar-looking button happens to appear.',
              'In practice, most teams don\'t rigidly enforce all five named layers, but the underlying idea — small, single-purpose pieces composed into larger, more specific structures — shows up in nearly every real component library, whether or not a team uses the exact atomic-design vocabulary.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'In atomic design, what distinguishes a "molecule" from an "atom"?',
                options: [
                  'A molecule is always larger in file size',
                  'An atom is a smallest functional piece (like a single button); a molecule combines a small number of atoms into a simple functional unit',
                  'Molecules can only exist on mobile screens',
                  'There is no meaningful difference between the two',
                ],
                correctIndex: 1,
                explanation: 'Atoms are indivisible functional pieces; molecules are the first level of composition, combining a few atoms into something with its own simple purpose.',
              },
              {
                id: 'q2',
                question: 'What is the practical benefit of fixing a shared property (like padding) at the "atom" layer, rather than wherever it happens to appear?',
                options: [
                  'There is no practical difference either way',
                  'The fix automatically propagates to every molecule, organism, and page built from that atom, rather than needing individual fixes everywhere',
                  'It only affects the visual design tool, not the shipped product',
                  'It requires rebuilding the entire design system from scratch',
                ],
                correctIndex: 1,
                explanation: 'Because higher layers are composed from atoms, a fix at the atom level cascades through every composition built on top of it — the core value of thinking in layers.',
              },
            ],
          },
          {
            id: 'component-variants-states',
            title: 'Component Variants & States',
            summary: 'A single button is really a whole matrix of possible appearances — designing that matrix deliberately avoids gaps.',
            content: [
              'A single component in a real design system usually needs to support a range of variants (different visual treatments for different purposes — a primary button, a secondary button, a destructive button) crossed with a range of states (how a component currently behaves — default, hover, pressed, focused, disabled, loading). A "button" in a mature system is really a full matrix of these combinations, not one fixed appearance.',
              'Designing this matrix deliberately, rather than improvising states as they come up in individual screens, is what prevents gaps — a destructive button with no defined disabled state, discovered only after it ships in a broken-looking state, is a common symptom of skipping this exercise upfront.',
              'Not every variant needs a visually distinct treatment for every state — a "ghost" or text-only button variant might share most of its states\' behavior with a primary button, differing mainly in its resting appearance. Part of designing the system well is identifying where states can be shared versus where a variant genuinely needs its own distinct handling.',
              'States deserve the same accessibility attention as anything else in this learning path: a disabled state needs sufficient contrast to be legible as "present but unavailable" rather than invisible, and a focus state needs to remain visible regardless of which variant it\'s applied to — a design system is exactly the right layer to enforce that once, rather than relying on every individual usage to remember it.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does it mean to think of a button component as a "matrix" of variants and states?',
                options: [
                  'That a button can only have one fixed appearance',
                  'That the component needs to support combinations of visual variants (primary, destructive) crossed with behavioral states (hover, disabled, loading)',
                  'That variants and states are unrelated concepts with no connection',
                  'That only destructive buttons need multiple states',
                ],
                correctIndex: 1,
                explanation: 'A real-world component typically needs to work across a full grid of variant × state combinations, not just one appearance — designing that grid deliberately avoids missing combinations.',
              },
              {
                id: 'q2',
                question: 'Why is a consistently visible focus state, enforced at the design-system level, valuable?',
                options: [
                  'Because focus states are purely decorative',
                  'Because it guarantees keyboard accessibility is handled once, correctly, rather than depending on every individual usage remembering to add it',
                  'Because it removes the need for any hover state',
                  'Because focus only matters for destructive buttons',
                ],
                correctIndex: 1,
                explanation: 'Enforcing an accessible focus state at the system level (rather than per-usage) is exactly the kind of consistency problem a design system is meant to solve.',
              },
            ],
          },
        ],
      },
      {
        id: 'documentation-and-governance',
        title: 'Documentation & Governance',
        steps: [
          {
            id: 'writing-component-documentation',
            title: 'Writing Usable Component Documentation',
            summary: 'A component nobody can figure out how to use correctly might as well not exist.',
            content: [
              'A design system component is only as useful as its documentation is clear. Good documentation for a component covers more than what it looks like: when to use it (and, just as importantly, when not to — which pattern to reach for instead in a given situation), its available props or variants, and any constraints (a maximum recommended length for a button label, for instance).',
              'Concrete "do" and "don\'t" examples, shown side by side, communicate usage rules far faster than a paragraph of prose describing the same rule. Showing a correctly-used dropdown next to a misused one (say, one crammed with fifty unsorted options where a searchable list would serve better) makes the guidance immediately legible in a way abstract writing often doesn\'t.',
              'Accessibility notes belong directly in a component\'s documentation, not in a separate document most people won\'t think to check — noting that a modal component automatically traps focus, or that an icon-only button variant requires the consumer to supply an accessible label, puts the responsibility exactly where someone using the component will actually see it.',
              'Documentation that goes stale is arguably worse than no documentation, since it actively misleads people who trust it. Treating documentation updates as a required part of shipping any component change — not an optional afterthought — is what keeps a system\'s documentation trustworthy over time.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is documenting "when NOT to use" a component just as important as documenting how to use it?',
                options: [
                  'It isn\'t important, only positive usage guidance matters',
                  'It helps people recognize when a different pattern is actually the better fit, preventing misuse of a component in the wrong situation',
                  'It is only relevant for destructive components',
                  'Negative guidance is required by law in most jurisdictions',
                ],
                correctIndex: 1,
                explanation: 'Knowing when a component is the wrong choice is just as useful as knowing how to use it correctly — it steers people toward the right pattern instead of a convenient but poor fit.',
              },
              {
                id: 'q2',
                question: 'Why should accessibility notes live directly inside a component\'s own documentation, rather than a separate accessibility guide?',
                options: [
                  'Separate accessibility guides are always more effective',
                  'Putting the notes where someone using the component will actually see them makes it far more likely the guidance is actually followed',
                  'Accessibility notes are not relevant to individual components',
                  'It has no practical effect either way',
                ],
                correctIndex: 1,
                explanation: 'Placing accessibility guidance directly alongside the component someone is actively using dramatically increases the odds they see and follow it, compared to a separate document.',
              },
            ],
          },
          {
            id: 'governance-models',
            title: 'Governance Models',
            summary: 'Who gets to change a shared system, and how, matters as much as what the system contains.',
            content: [
              'A design system needs a clear answer to a question that grows more important as more teams depend on it: who is allowed to propose, approve, and make changes to shared components? Different governance models answer this differently, with real tradeoffs.',
              'A centralized model has one dedicated team owning the system, reviewing and building all changes themselves. This tends to produce the most consistent, high-quality result, but can become a bottleneck as more teams want changes faster than one central team can handle, and can leave that team disconnected from the day-to-day problems individual product teams are actually running into.',
              'A federated (or contribution) model instead lets any team propose and even build changes, following a defined contribution process and review by the system\'s maintainers, rather than requiring the central team to build everything themselves. This scales better as an organization grows, but requires a genuinely well-documented process and reliable reviewers to avoid the same consistency drift a design system exists to prevent.',
              'Whichever model is chosen, versioning matters: components need a clear way to signal breaking changes (typically via semantic versioning) so consuming teams can choose when to adopt an update, rather than a shared component silently changing underneath a live product without warning.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is a common downside of a fully centralized design system governance model?',
                options: [
                  'It always produces inconsistent components',
                  'It can become a bottleneck, since one team may not be able to handle change requests as fast as many product teams want them',
                  'It cannot support component documentation',
                  'It requires every team to have their own separate design system',
                ],
                correctIndex: 1,
                explanation: 'Routing every change through one central team tends to produce consistent results but can create a bottleneck as the number of dependent teams grows.',
              },
              {
                id: 'q2',
                question: 'Why does versioning (like semantic versioning) matter for a shared design system?',
                options: [
                  'It has no practical purpose beyond labeling',
                  'It lets consuming teams choose when to adopt breaking changes, rather than a shared component silently changing underneath a live product',
                  'It is only relevant for backend systems, not design systems',
                  'It replaces the need for any documentation',
                ],
                correctIndex: 1,
                explanation: 'Clear versioning signals when a change might break existing usage, letting teams adopt updates deliberately instead of being surprised by an unannounced change.',
              },
            ],
          },
        ],
      },
      {
        id: 'adoption-and-evolution',
        title: 'Adoption & Evolution',
        steps: [
          {
            id: 'rolling-out-a-design-system',
            title: 'Rolling Out a Design System',
            summary: 'A design system that nobody actually uses is a well-documented shelf ornament.',
            content: [
              'Building a design system is only half the challenge — getting existing teams to actually adopt it, especially inside a product that already has a large amount of pre-existing, inconsistent UI, is its own significant effort. A rollout plan needs to answer concretely: does the whole product migrate at once, or does adoption happen incrementally, feature by feature, as teams touch existing code anyway?',
              'Incremental adoption — requiring new features to use the system, while leaving already-shipped screens alone until they\'re naturally revisited — tends to be far more realistic than a big-bang rewrite, which competes directly against a team\'s regular feature roadmap and is an easy project to deprioritize indefinitely once other work feels more urgent.',
              'Buy-in matters as much as the technical rollout plan. Teams that had no say in a system\'s early decisions are understandably less invested in adopting it, and may see it as an externally imposed constraint rather than something built to solve their own problems. Involving representatives from consuming teams during the system\'s design — not just after it\'s finished — meaningfully improves adoption.',
              'A useful, concrete way to track rollout progress is measuring actual component adoption (what percentage of buttons across the product use the system\'s button component, versus a one-off custom implementation) rather than relying on an impression of "I think most people are using it now."',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why does incremental adoption of a design system tend to be more realistic than a full big-bang rewrite?',
                options: [
                  'Because incremental adoption always happens faster overall',
                  'Because a full rewrite competes directly against the regular feature roadmap and is easy to deprioritize indefinitely',
                  'Because big-bang rewrites are technically impossible',
                  'Because incremental adoption requires no planning at all',
                ],
                correctIndex: 1,
                explanation: 'A large rewrite has to compete for priority against ongoing feature work, making it an easy project to keep pushing back — incremental adoption avoids that direct competition.',
              },
              {
                id: 'q2',
                question: 'Why does involving consuming teams during a design system\'s creation — not just after — improve adoption?',
                options: [
                  'It doesn\'t affect adoption at all',
                  'Teams that helped shape the system are more invested in it, rather than seeing it as an externally imposed constraint',
                  'It is required by most component libraries',
                  'It eliminates the need for any documentation',
                ],
                correctIndex: 1,
                explanation: 'Involvement earlier in the process builds genuine investment, rather than presenting a finished system to teams who had no say and may resist it as imposed from outside.',
              },
            ],
          },
          {
            id: 'measuring-and-evolving',
            title: 'Measuring & Evolving a Design System',
            summary: 'A design system is a living product, with its own users, roadmap, and eventual need to retire old parts.',
            content: [
              'Treating a design system as a product in its own right — with its own users (the teams consuming it) and its own success metrics — tends to produce better long-term outcomes than treating it as a one-time deliverable that\'s "done" once shipped.',
              'Beyond raw component adoption rate, useful signals include how often teams file requests for missing components or patterns (a sign of real gaps), how often teams build one-off custom components instead of using the system (a sign either of gaps or of insufficient awareness/documentation), and direct qualitative feedback from consuming teams about friction they\'re experiencing.',
              'Design systems also need an explicit deprecation process, not just a way to add new things. As a system matures, some early components inevitably get replaced by better ones — without a clear, communicated deprecation path (a warning period, migration guidance, a defined removal date), old and new versions of the same component tend to coexist indefinitely, quietly recreating the inconsistency the system was built to prevent.',
              'The long-term risk of neglecting this evolution work is ossification: a system that was well-designed for the product\'s needs at one point in time, but never adapted as those needs changed, gradually turns into exactly the kind of rigid, unhelpful constraint that makes teams route around it with one-off custom components — undermining the whole point of having a shared system in the first place.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is a high rate of teams building one-off custom components, instead of using the design system, a useful signal to track?',
                options: [
                  'It isn\'t useful, custom components are always fine',
                  'It can indicate real gaps in the system, or insufficient awareness/documentation of what already exists',
                  'It always means the design system should be deleted',
                  'It only matters for engineering teams, not design',
                ],
                correctIndex: 1,
                explanation: 'A high rate of workarounds usually points to either a genuine coverage gap in the system or a documentation/awareness problem — both worth investigating.',
              },
              {
                id: 'q2',
                question: 'What risk does a missing deprecation process create for a design system?',
                options: [
                  'No risk — systems don\'t need deprecation processes',
                  'Old and new versions of the same component tend to coexist indefinitely, quietly recreating the inconsistency the system was meant to prevent',
                  'It means new components can never be added',
                  'It automatically breaks all existing components immediately',
                ],
                correctIndex: 1,
                explanation: 'Without a clear path to retire outdated components, they tend to linger alongside newer replacements, undermining the consistency a design system is supposed to guarantee.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'user-research',
    title: 'User Research',
    description: 'Go deeper into planning studies, running interviews and surveys, avoiding bias, and building a real research practice.',
    icon: '🔍',
    color: '#E76F51',
    levels: [
      {
        id: 'planning-research',
        title: 'Planning Research',
        steps: [
          {
            id: 'choosing-the-right-method',
            title: 'Choosing the Right Method',
            summary: 'A simple two-axis framework for matching a research question to the right method.',
            content: [
              'With dozens of named research methods available, picking the right one starts with a simpler question than "which method is best" — it\'s "what kind of question am I actually trying to answer." A widely used framework, associated with researcher Christian Rohrer, organizes methods along two axes: attitudinal versus behavioral (what people say versus what people actually do), and qualitative versus quantitative (rich detail from few people versus numeric patterns from many).',
              'A question about what people believe or feel — "do users trust this feature?" — points toward attitudinal methods like interviews or surveys. A question about what people actually do — "where do users get stuck in this flow?" — points toward behavioral methods like usability testing or analytics, since what people say they do and what they actually do frequently diverge.',
              'Combining the two axes narrows the choice further: a qualitative-attitudinal question suits an interview; a quantitative-attitudinal question suits a survey at scale; a qualitative-behavioral question suits a moderated usability test; a quantitative-behavioral question suits analytics or an A/B test.',
              'The practical value of this framework is preventing a common mistake: reaching for whichever method is most familiar or convenient, rather than the one that actually matches the question. A survey can\'t reliably answer "where exactly do people get confused in this flow," and analytics alone can\'t answer "why did people abandon this flow" — mismatched method and question is one of the most common causes of research that doesn\'t actually inform a decision.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What are the two axes in the Rohrer-style framework for choosing a research method?',
                options: [
                  'Fast versus slow, and cheap versus expensive',
                  'Attitudinal versus behavioral, and qualitative versus quantitative',
                  'Digital versus physical, and local versus remote',
                  'Moderated versus unmoderated only',
                ],
                correctIndex: 1,
                explanation: 'These two axes — what people say vs. what they do, and rich detail vs. numeric scale — help match a research question to an appropriate method.',
              },
              {
                id: 'q2',
                question: 'Why can\'t a survey reliably answer "where exactly do people get confused in this flow"?',
                options: [
                  'Surveys are technically impossible to distribute at scale',
                  'That is a behavioral, in-the-moment question — surveys capture attitudes/self-reports, not directly observed behavior',
                  'Surveys can only be used for pricing research',
                  'There is no real limitation, surveys can answer any question',
                ],
                correctIndex: 1,
                explanation: 'Pinpointing exactly where confusion happens during a task is a behavioral question best answered by observing behavior directly (like usability testing), not by self-report.',
              },
            ],
          },
          {
            id: 'writing-a-research-plan',
            title: 'Writing a Research Plan',
            summary: 'A short document that forces clarity before a single participant is recruited.',
            content: [
              'A research plan is a short document written before a study begins, forcing the team to be explicit about what they\'re trying to learn and how, rather than improvising once sessions are already underway. At minimum, it names the research questions (what the team actually needs to know), the method chosen to answer them, and how "useful" results will be recognized once gathered.',
              'Recruiting criteria deserve specific attention: who counts as a representative participant for this study, and — just as importantly — who should be explicitly excluded (such as employees of the company, or people with no relevant experience with the product category at all). Vague criteria like "typical users" tend to produce an accidentally skewed, convenient sample rather than a genuinely representative one.',
              'For a moderated study, a discussion or task script (an outline of what will be asked or asked to attempt, in what order) keeps sessions comparable across multiple participants — without one, different sessions can drift so far apart in what was actually covered that comparing results across them becomes unreliable.',
              'A research plan also sets expectations up front for stakeholders outside the research team about the study\'s scope and limitations — a small qualitative study, clearly scoped as exploratory rather than statistically representative, avoids the later, avoidable disagreement about how much weight its findings should carry.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is being specific about recruiting criteria (who to include AND exclude) important?',
                options: [
                  'It isn\'t important, any participant will do',
                  'Vague criteria like "typical users" tend to produce an accidentally skewed sample rather than a genuinely representative one',
                  'Exclusion criteria are only relevant for quantitative surveys',
                  'It only matters for studies with more than 50 participants',
                ],
                correctIndex: 1,
                explanation: 'Precise recruiting criteria — including clear exclusions — help ensure the people studied actually represent the population the research is meant to inform decisions about.',
              },
              {
                id: 'q2',
                question: 'What is one purpose of writing a research plan before a study begins?',
                options: [
                  'To make the study take longer for no reason',
                  'To force clarity on the research question and method upfront, and to set stakeholder expectations about the study\'s scope and limitations',
                  'It has no real purpose beyond documentation for its own sake',
                  'It replaces the need to actually run the study',
                ],
                correctIndex: 1,
                explanation: 'A research plan clarifies intent before recruiting begins and helps set realistic expectations with stakeholders about what the study can and can\'t claim.',
              },
            ],
          },
        ],
      },
      {
        id: 'talking-to-users',
        title: 'Talking to Users',
        steps: [
          {
            id: 'conducting-effective-interviews',
            title: 'Conducting Effective Interviews',
            summary: 'The skill of an interview is mostly in the questions you don\'t ask, and the silence you don\'t fill.',
            content: [
              'A user interview aims to surface a participant\'s genuine experience, reasoning, and context — which depends heavily on the specific way questions get asked. Open-ended questions ("Tell me about the last time you tried to do this") invite a fuller story than closed questions ("Did that feature work well for you?"), which tend to produce a short yes/no with little useful detail.',
              'Leading questions are one of the most common interviewing mistakes, and often slip in unintentionally: "Wasn\'t that confusing?" quietly suggests the "right" answer is yes, nudging a participant toward agreeing rather than reporting their own genuine reaction. A neutral phrasing, like "How did that feel?", leaves room for whatever the honest answer actually is.',
              'Comfortable silence is an underused interviewing tool. After asking a question, resisting the urge to immediately fill a pause with another question or a rephrase often gives a participant the extra few seconds they need to actually think and produce a deeper, more considered answer than their first reflexive response.',
              'The interviewer\'s own reactions matter too — visibly reacting with surprise, approval, or discomfort to an answer can subtly signal what response is "expected," biasing everything the participant says afterward. Staying neutrally curious, and reserving reactions until after the session, protects the integrity of what\'s being learned.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What makes a question like "Wasn\'t that confusing?" a leading question?',
                options: [
                  'It is too long for a typical interview',
                  'It subtly suggests the expected answer, nudging the participant toward agreeing rather than sharing their genuine reaction',
                  'It only works for quantitative surveys',
                  'It uses a word ("confusing") that is banned from interviews entirely',
                ],
                correctIndex: 1,
                explanation: 'Leading questions embed an assumption about the "right" answer, which can bias a participant toward agreeing rather than reporting their honest experience.',
              },
              {
                id: 'q2',
                question: 'Why is comfortable silence after asking a question considered a useful interviewing technique?',
                options: [
                  'Silence makes participants uncomfortable enough to end the session early',
                  'It gives the participant space to think, often producing a deeper answer than their first reflexive response',
                  'It has no real effect on the quality of answers',
                  'It is only useful in unmoderated studies',
                ],
                correctIndex: 1,
                explanation: 'Resisting the urge to immediately fill a pause gives participants room to think further, which frequently surfaces more considered, useful answers.',
              },
            ],
          },
          {
            id: 'surveys-and-questionnaires',
            title: 'Surveys & Questionnaires',
            summary: 'Getting attitudinal data at scale, and the specific ways survey design commonly goes wrong.',
            content: [
              'A survey collects self-reported data from a larger number of people than an interview practically allows, trading depth for scale and statistical patterns. It fits attitudinal-quantitative questions well — measuring how satisfaction, preference, or awareness varies across a large user base — but shares the same core limitation as any self-report method: it captures what people say, which doesn\'t always match what they actually do.',
              'Question wording carries outsized influence on results. A leading question ("How much do you love this new feature?") biases responses just as much in a survey as in an interview. Double-barreled questions ("Was the checkout process fast and easy?") force a single answer onto what might actually be two different, even conflicting, experiences — fast but not easy, or the reverse.',
              'Response scale design matters too: an odd-numbered scale (like a 5-point scale) includes an explicit neutral midpoint, while an even-numbered scale forces respondents to lean at least slightly one direction — a deliberate design choice, not an incidental detail, depending on whether a neutral option is genuinely meaningful for the question being asked.',
              'Survey length has a direct, measurable cost: response quality tends to degrade toward the end of a long survey as fatigue sets in, and overall completion rates drop as length increases — which is why experienced researchers ruthlessly cut any question that isn\'t clearly tied to a specific decision the results will inform.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is a "double-barreled" survey question?',
                options: [
                  'A question with only two possible answers',
                  'A question that forces a single answer onto what are actually two separate, potentially conflicting experiences, like "was it fast and easy?"',
                  'A question that requires two separate surveys to answer',
                  'A question about firearms, unrelated to UX research',
                ],
                correctIndex: 1,
                explanation: 'Double-barreled questions bundle two distinct things into one, making it unclear which part a respondent is actually answering — especially problematic if the two parts diverge.',
              },
              {
                id: 'q2',
                question: 'Why does survey length matter for data quality?',
                options: [
                  'It doesn\'t — longer surveys always produce better data',
                  'Response quality tends to degrade toward the end of long surveys, and completion rates drop as length increases',
                  'Longer surveys are required to reach statistical significance',
                  'Survey length only affects surveys distributed by email',
                ],
                correctIndex: 1,
                explanation: 'Fatigue lowers both the quality of later answers and the odds a respondent finishes at all, which is why unnecessary questions should be cut.',
              },
            ],
          },
        ],
      },
      {
        id: 'watching-users',
        title: 'Watching Users',
        steps: [
          {
            id: 'writing-good-test-tasks',
            title: 'Writing Good Usability Test Tasks',
            summary: 'A poorly written task can quietly hand the participant the answer, making a test worthless.',
            content: [
              'A usability test, introduced in UX Design Fundamentals, is only as good as the tasks participants are asked to attempt. A well-written task describes a goal in the participant\'s own terms, without embedding the interface\'s specific vocabulary or steps — "Find out how much it would cost to ship this item to Canada" tests real navigation and comprehension; "Click on the shipping calculator" has already told the participant exactly where to look, testing nothing.',
              'Tasks should also avoid revealing the "correct" outcome, since a participant who suspects what answer is expected may perform differently than they would unprompted — framing a task around a realistic, motivating scenario ("You\'re buying a gift for a friend in another country...") rather than a bare instruction helps keep the situation natural.',
              'Task order and independence matter: a later task that depends on successfully completing an earlier one can cause a single early failure to derail an entire session\'s worth of data, so tasks are often designed to be resettable or independent of each other where practical.',
              'Finally, a task needs a clear definition of "success" decided in advance — not just whether a participant eventually stumbles onto the right screen, but whether they reached it with the understanding and confidence the task was actually testing for, since a participant can technically complete a step by accident without the interface actually having communicated anything clearly.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is "Click on the shipping calculator" a poorly written usability test task?',
                options: [
                  'It is too short to be a valid task',
                  'It reveals exactly where to look and what to click, testing nothing about real navigation or comprehension',
                  'It cannot be understood by any participant',
                  'Shipping-related tasks are not allowed in usability testing',
                ],
                correctIndex: 1,
                explanation: 'A task phrased around the interface\'s own labels and steps hands the participant the answer, defeating the purpose of testing whether they can find it themselves.',
              },
              {
                id: 'q2',
                question: 'Why should a task\'s definition of "success" be decided before the test, not just judged after the fact?',
                options: [
                  'It doesn\'t matter, any completion counts as success',
                  'A participant can technically stumble onto the right screen by accident, without the interface having actually communicated anything clearly',
                  'Success criteria are only relevant for quantitative research',
                  'Because tasks cannot be repeated across participants otherwise',
                ],
                correctIndex: 1,
                explanation: 'Deciding what genuine success looks like in advance prevents mistaking an accidental, confused path to the right answer for the interface actually working as intended.',
              },
            ],
          },
          {
            id: 'diary-studies-field-research',
            title: 'Diary Studies & Field Research',
            summary: 'Some behavior only shows up over time, or in context a lab session can\'t reproduce.',
            content: [
              'A usability test captures a single moment, in an artificial setting. Some questions need a longer time horizon or a real-world setting instead — this is where diary studies and field research fit in.',
              'A diary study asks participants to record their own experiences over an extended period (days or weeks), typically prompted at specific intervals or trigger events — useful for understanding behavior that unfolds gradually, like how a habit-forming app is actually used over the first month, which no single lab session could capture.',
              'Field research (or contextual inquiry) instead involves observing people in their own real environment — their home, their workplace — rather than a lab or remote screen-share, which surfaces context a controlled session strips away: the actual lighting, interruptions, competing devices, and physical constraints someone is really working within.',
              'Both methods trade convenience and speed for a kind of realism a shorter, controlled session can\'t offer — and both introduce a specific bias risk of their own: being observed can change how people behave (sometimes called the Hawthorne effect), so even field research participants may act somewhat differently than they would completely unobserved.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What kind of question is a diary study particularly well-suited to answering?',
                options: [
                  'A question about a single, isolated moment in a lab setting',
                  'A question about how behavior unfolds gradually over an extended period, like the first month of using a new app',
                  'A question that requires no participant input at all',
                  'A question only answerable through analytics',
                ],
                correctIndex: 1,
                explanation: 'Diary studies capture experience over time, which is exactly the kind of gradual, longitudinal pattern a single lab session can\'t reveal.',
              },
              {
                id: 'q2',
                question: 'What is the "Hawthorne effect" as it applies to field research?',
                options: [
                  'A specific usability heuristic',
                  'The tendency for people to behave differently simply because they know they\'re being observed',
                  'A statistical method for analyzing survey data',
                  'A rule about how many participants a field study needs',
                ],
                correctIndex: 1,
                explanation: 'Even in a naturalistic field setting, participants may still alter their behavior because they\'re aware of being watched — a bias worth keeping in mind when interpreting results.',
              },
            ],
          },
        ],
      },
      {
        id: 'making-sense-of-data',
        title: 'Making Sense of Data',
        steps: [
          {
            id: 'avoiding-research-bias',
            title: 'Avoiding Research Bias',
            summary: 'Bias doesn\'t require bad intentions — it creeps in through sampling, question wording, and analysis.',
            content: [
              'Research bias describes any systematic distortion that pulls findings away from what\'s actually true, and it can enter a study at nearly every stage, almost always without any intention to mislead. Sampling bias happens when the people recruited don\'t represent the actual population a decision is meant to serve — recruiting only from a company\'s existing power users, for instance, when the actual question concerns first-time users.',
              'Confirmation bias affects the researcher, not just the sample: a team that already has a favored explanation may unconsciously ask questions that invite confirming answers, and may notice and remember confirming evidence more readily than disconfirming evidence while reviewing sessions afterward.',
              'The leading-question problem covered earlier in interviews and surveys is really a specific case of this same broader issue — wording that nudges toward a particular answer, whether or not the researcher intends it to.',
              'A few practical safeguards help: having more than one person independently review the same raw research material before discussing conclusions together, deliberately looking for evidence that would disconfirm the team\'s working theory (not just evidence that supports it), and being explicit in a research plan about who was and wasn\'t included in the sample, so limitations are visible rather than quietly assumed away.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What is sampling bias?',
                options: [
                  'A bias that only affects quantitative surveys',
                  'When the people recruited for a study don\'t represent the actual population a decision is meant to serve',
                  'A type of leading question',
                  'A bias that can only be fixed by increasing sample size',
                ],
                correctIndex: 1,
                explanation: 'Sampling bias comes from who gets studied — if the sample doesn\'t reflect the population the findings are meant to inform decisions about, the results can mislead even with a large enough sample size.',
              },
              {
                id: 'q2',
                question: 'What is one practical safeguard against confirmation bias when analyzing research findings?',
                options: [
                  'Only ever having one person review the data, to keep interpretation consistent',
                  'Deliberately looking for evidence that would disconfirm the team\'s working theory, not just evidence that supports it',
                  'Skipping analysis entirely and reporting raw data only',
                  'Always recruiting participants who already agree with the team\'s hypothesis',
                ],
                correctIndex: 1,
                explanation: 'Actively seeking disconfirming evidence — rather than only noticing what supports an existing belief — helps counteract the natural pull of confirmation bias.',
              },
            ],
          },
          {
            id: 'reporting-findings-to-stakeholders',
            title: 'Reporting Findings to Stakeholders',
            summary: 'Findings that never reach a decision-maker in a form they can act on might as well not exist.',
            content: [
              'Research only creates value once its findings actually reach the people making decisions, in a form they can use. A long, exhaustive report that nobody reads accomplishes less than a shorter, clearly prioritized summary that gets read and acted on. Leading with the most decision-relevant findings — not the order they happened to be discovered in — respects how busy stakeholders actually consume information.',
              'Framing findings around their implication for a decision, rather than just describing what was observed, makes them far more actionable. "3 of 5 participants missed the save button" is an observation; "the save button\'s current placement risks losing user work for a meaningful share of users, and should move above the fold" connects that same observation to a concrete decision.',
              'Video clips or direct quotes, used sparingly, often land with stakeholders far more persuasively than a slide summarizing the same point in the abstract — watching a real person struggle with something briefly, first-hand, tends to build a kind of empathy and urgency that a bullet point rarely achieves on its own.',
              'A recurring challenge is stakeholders overweighting one especially memorable anecdote from a report, echoing the same synthesis pitfall covered in UX Design Fundamentals — a good research report explicitly states how many participants experienced each finding, so a single vivid quote doesn\'t get mistaken for a majority pattern.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is it more effective to frame a finding around its implication for a decision, rather than just as a raw observation?',
                options: [
                  'It isn\'t more effective, raw observations are always clearer',
                  'Connecting the observation directly to a concrete recommendation makes the finding far more actionable for stakeholders',
                  'Decisions cannot be based on qualitative findings',
                  'It removes the need to state how many participants were affected',
                ],
                correctIndex: 1,
                explanation: 'Stating what a finding means for a decision — not just what was observed — gives stakeholders something concrete to act on, rather than just information to file away.',
              },
              {
                id: 'q2',
                question: 'Why should a research report explicitly state how many participants experienced each finding, even when including a vivid quote?',
                options: [
                  'It isn\'t necessary — a strong quote speaks for itself',
                  'To prevent stakeholders from mistaking one memorable anecdote for a pattern that affected most or all participants',
                  'Because quotes are not allowed in professional research reports',
                  'Because participant counts are only relevant in quantitative surveys',
                ],
                correctIndex: 1,
                explanation: 'Explicitly noting prevalence keeps a single compelling quote from being overweighted as if it represented a majority finding.',
              },
            ],
          },
        ],
      },
      {
        id: 'research-operations',
        title: 'Research Operations',
        steps: [
          {
            id: 'building-a-research-practice',
            title: 'Building a Research Practice',
            summary: 'Research operations (ResearchOps) is the infrastructure that makes research repeatable, not a one-off event.',
            content: [
              'As an organization does more research, the operational side — recruiting participants, storing and organizing past findings, scheduling sessions, managing incentive payments — starts to take real, recurring effort of its own. Research operations (often shortened to ResearchOps) is the practice of building shared infrastructure and processes for that operational work, so individual researchers spend more time on the research itself.',
              'A research repository — a searchable, organized store of past studies, findings, and raw material — is one of the most valuable ResearchOps investments. Without one, the same question often gets researched from scratch repeatedly because nobody remembers, or can easily find, that a similar study already happened a year earlier.',
              'A shared participant panel (a pool of people who\'ve agreed to be contacted for future research, with basic screening information already on file) meaningfully speeds up recruiting compared to starting from zero for every single study, and helps avoid over-relying on whichever small group of users happens to be easiest to reach.',
              'Beyond logistics, a mature research practice also actively socializes findings across a team — making insights visible and discoverable to people who weren\'t directly involved in a study — since research that stays locked inside the team that conducted it has much less influence than research that becomes shared organizational knowledge.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What problem does a research repository primarily solve?',
                options: [
                  'It makes participants easier to recruit',
                  'It prevents the same question from being researched from scratch repeatedly, since past findings are stored and searchable',
                  'It replaces the need to conduct any new research',
                  'It is only useful for quantitative data',
                ],
                correctIndex: 1,
                explanation: 'A well-maintained repository means past research is discoverable, avoiding redundant studies and helping new work build on what\'s already known.',
              },
              {
                id: 'q2',
                question: 'Why does "socializing" research findings across a team matter, beyond just producing the findings?',
                options: [
                  'It doesn\'t matter, findings are valuable purely by existing',
                  'Research that stays locked inside the team that conducted it has far less organizational influence than research that becomes widely shared knowledge',
                  'It is only relevant for research about accessibility',
                  'It eliminates the need for a research repository',
                ],
                correctIndex: 1,
                explanation: 'Findings create far more value when other teams and decision-makers actually encounter and use them, rather than staying siloed with the team that ran the study.',
              },
            ],
          },
          {
            id: 'ethics-and-participant-care',
            title: 'Ethics & Participant Care',
            summary: 'Research involves real people, whose time, privacy, and comfort are not incidental details.',
            content: [
              'Ethical research practice starts with informed consent: participants should understand, before a session begins, what they\'ll be asked to do, how their data (recordings, notes, personal information) will be used and stored, and that they can stop at any point without needing to justify why. Consent given without genuinely understanding these things isn\'t meaningful consent.',
              'Fair incentives matter both ethically and practically — compensating participants appropriately for their time respects the real value of what they\'re contributing, and helps recruit a sample that isn\'t skewed toward only the people willing to participate for free or for a token reward.',
              'Privacy deserves deliberate handling, not an afterthought: recordings and notes often contain identifying or sensitive information, and should be stored securely, access-limited to people who genuinely need it, and anonymized in any findings shared more broadly, unless a participant has specifically consented to being identifiable.',
              'Extra care is warranted when research involves participants from a vulnerable population — including minors, people discussing a sensitive health condition, or anyone in a situation where the power dynamic between researcher and participant is uneven — since standard consent and comfort practices may not be sufficient protection in those specific contexts, and may call for additional safeguards or specialized guidance beyond a standard research protocol.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What makes informed consent "meaningful," according to this step?',
                options: [
                  'Simply having a participant sign any form, regardless of what it says',
                  'The participant genuinely understanding what they\'ll be asked to do, how their data will be used, and that they can stop at any time',
                  'Consent is only meaningful if given in writing, never verbally',
                  'It requires payment to be considered valid',
                ],
                correctIndex: 1,
                explanation: 'Genuine informed consent requires real understanding of the session and data handling — a signature alone, without that understanding, isn\'t meaningful consent.',
              },
              {
                id: 'q2',
                question: 'Why might research involving a vulnerable population require additional safeguards beyond a standard protocol?',
                options: [
                  'It doesn\'t — standard practices are always sufficient for every population',
                  'Standard consent and comfort practices may not adequately protect people in situations involving an uneven power dynamic or particular sensitivity',
                  'Vulnerable populations should simply be excluded from all research',
                  'Only quantitative research needs to consider vulnerable populations',
                ],
                correctIndex: 1,
                explanation: 'Certain contexts — minors, sensitive health topics, uneven power dynamics — call for extra protections beyond what a standard research protocol typically provides.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gestalt-principles',
    title: 'Gestalt Principles',
    description: 'A deep dive into the perceptual laws — proximity, similarity, closure, and more — that explain how people group and interpret what they see.',
    icon: '🧠',
    color: '#E76F51',
    levels: [
      {
        id: 'foundational-grouping-laws',
        title: 'Foundational Grouping Laws',
        steps: [
          {
            id: 'law-of-proximity',
            title: 'The Law of Proximity',
            summary: 'Objects placed close together are perceived as one related group, whether or not they actually are.',
            content: [
              'Gestalt psychology, developed by German psychologists in the early 20th century, studies how humans perceive organized wholes rather than a disconnected collection of individual parts — the word "Gestalt" roughly translates to "form" or "shape" in this sense. Its principles describe consistent, largely automatic patterns in how visual perception groups elements together, and they apply directly to interface design because every screen is, functionally, an exercise in visual grouping.',
              'The Law of Proximity states that objects positioned close to one another are perceived as belonging to a group, more strongly than their similarity, color, or shape would suggest on their own. Distance functions as an implicit signal of relationship — this is why a form label sits close to its input rather than centered awkwardly between two adjacent fields, and why the fields of one logical group in a settings page get less vertical spacing between them than the space separating that group from the next one.',
              'Proximity is powerful enough to override other cues. Even identically styled items will read as two separate groups if the visual gap between them is larger than the gap within each group — which is precisely the mechanism that makes whitespace, covered in Visual Design Basics, function as an organizational tool rather than just empty space.',
              'Getting proximity wrong is a common, low-visibility bug: uniform spacing applied everywhere (rather than tighter spacing within a group and looser spacing between groups) makes an interface\'s actual logical structure invisible, forcing users to read labels carefully to figure out groupings that good spacing would have made obvious at a glance.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'According to the Law of Proximity, what makes elements likely to be perceived as one group?',
                options: [
                  'Sharing the exact same color',
                  'Being positioned close together in space',
                  'Being the same physical size',
                  'Having the same border style',
                ],
                correctIndex: 1,
                explanation: 'Proximity treats physical closeness as one of the strongest, most automatic signals of relatedness, even stronger than shared color or shape.',
              },
              {
                id: 'q2',
                question: 'What visible problem results from applying completely uniform spacing everywhere, with no tighter spacing within groups?',
                options: [
                  'The interface loads more slowly',
                  'The interface\'s actual logical structure becomes invisible, since proximity is no longer signaling which elements belong together',
                  'Text automatically becomes harder to read',
                  'Colors on the page shift unexpectedly',
                ],
                correctIndex: 1,
                explanation: 'Without varying spacing to signal grouping, users lose the visual cue that would otherwise make relationships between elements obvious without reading every label.',
              },
            ],
          },
          {
            id: 'law-of-similarity',
            title: 'The Law of Similarity',
            summary: 'Elements that share a visual trait read as part of the same group, even when spaced apart.',
            content: [
              'The Law of Similarity states that elements sharing a visual characteristic — color, shape, size, or style — are perceived as related, even when they aren\'t positioned close together. This is what allows a design to signal grouping across a distance, where proximity alone couldn\'t do the job.',
              'A common, almost invisible application: every primary button across an entire product sharing the same color and shape. This isn\'t only a branding choice — it\'s what lets a user recognize "this is the main action" instantly on any new screen, without needing to consciously think about it, purely because it matches the visual pattern already learned elsewhere in the product.',
              'Similarity and proximity often work together, but can also be used deliberately against each other. A design might place two functionally different but visually similar elements physically close together specifically to invite comparison (like two pricing tier cards styled identically side by side), using similarity to suggest "these are comparable options" while proximity suggests "consider these together."',
              'Similarity can also mislead if used carelessly. Styling two functionally different controls identically (say, a "cancel" and a "confirm" button that look the same) removes a visual cue that could have helped prevent an accidental destructive action — similarity should be used deliberately to group things that genuinely belong together, not just for a uniform look.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'How does the Law of Similarity differ from the Law of Proximity?',
                options: [
                  'They are identical concepts with different names',
                  'Similarity groups elements by a shared visual trait (color, shape) even when they aren\'t physically close together, while proximity groups by physical closeness',
                  'Similarity only applies to text, proximity only applies to images',
                  'Proximity is a stronger grouping cue than similarity in every situation',
                ],
                correctIndex: 1,
                explanation: 'Similarity relies on a shared visual trait rather than physical closeness — it can signal grouping even across distance, which proximity alone cannot do.',
              },
              {
                id: 'q2',
                question: 'Why can making a "cancel" and a "confirm" button look identical be a usability problem?',
                options: [
                  'It has no real downside, consistent styling is always better',
                  'It removes a visual distinction that could help prevent a user from accidentally choosing the destructive or wrong option',
                  'Buttons must always be identically styled by convention',
                  'It violates the Law of Proximity',
                ],
                correctIndex: 1,
                explanation: 'Similarity used carelessly can erase a helpful visual cue that would otherwise distinguish two meaningfully different actions, increasing the risk of an accidental click.',
              },
            ],
          },
        ],
      },
      {
        id: 'perceptual-completion',
        title: 'Perceptual Completion',
        steps: [
          {
            id: 'law-of-closure',
            title: 'The Law of Closure',
            summary: 'The mind fills in missing information to perceive a complete, familiar shape.',
            content: [
              'The Law of Closure describes the mind\'s tendency to perceive a complete, whole shape even when parts of it are missing or obscured, by mentally filling in the gaps. A circle drawn with several small breaks in its outline is still perceived as a circle, not as a series of disconnected arcs.',
              'This principle shows up constantly in logo design — the well-known WWF panda logo and the negative-space arrow hidden inside the FedEx logotype both rely on viewers\' minds completing a shape that isn\'t fully, literally drawn. Interfaces use the same idea more subtly: a loading spinner made of a partial, rotating ring is read as a continuous circle in motion, not as a series of disconnected marks.',
              'Closure can also be used functionally, not just decoratively. A progress indicator styled as a ring that fills in as a task completes relies on the same perceptual tendency — the mind reads the partially completed ring as a whole circle that\'s "on its way" to being finished, communicating progress more intuitively than a bare percentage number alone.',
              'A practical caution: closure only works when a shape is recognizable enough for the mind to complete correctly. Too little visual information, or an unfamiliar shape, results in genuine ambiguity rather than a satisfying, correctly perceived whole — closure requires enough of the picture to be genuinely inferable, not just partially drawn.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the Law of Closure describe?',
                options: [
                  'The tendency for elements placed close together to be seen as one group',
                  'The mind\'s tendency to perceive a complete shape even when parts of it are missing, by mentally filling in the gaps',
                  'The tendency to group elements that share a color',
                  'A rule for closing browser tabs efficiently',
                ],
                correctIndex: 1,
                explanation: 'Closure is specifically about perceiving wholeness from incomplete visual information — the mind completes the shape rather than seeing disconnected fragments.',
              },
              {
                id: 'q2',
                question: 'Why does closure "fail" if a shape is too incomplete or unfamiliar?',
                options: [
                  'Closure never fails under any circumstance',
                  'There isn\'t enough visual information for the mind to correctly infer the intended whole, resulting in genuine ambiguity instead of clear perception',
                  'It only fails when the shape is a perfect circle',
                  'Closure only applies to text, never to shapes',
                ],
                correctIndex: 1,
                explanation: 'Closure depends on enough of a recognizable shape being present for the mind to accurately complete it — too little information leaves real ambiguity instead.',
              },
            ],
          },
          {
            id: 'law-of-continuity',
            title: 'The Law of Continuity',
            summary: 'The eye follows the smoothest path through a design, preferring continuous lines over abrupt breaks.',
            content: [
              'The Law of Continuity (sometimes called Continuation) states that the eye naturally follows a smooth, continuous line or curve rather than jumping along an abrupt, disjointed path — elements arranged along an implied line or curve are perceived as more related, and easier to visually track, than the same elements scattered without that alignment.',
              'This is part of why aligned elements feel calmer and more organized than misaligned ones, even setting aside proximity or similarity entirely: a column of left-aligned text labels creates an implied vertical line the eye can glide down smoothly, while ragged, inconsistent alignment forces the eye to jump and re-locate the start of each new line.',
              'Continuity also explains why carousels, horizontally scrolling content rows, and multi-step progress indicators (a row of connected dots or steps) read intuitively as one continuous sequence — the visual line connecting each step signals "these are steps along a single path," reinforcing the sequential relationship the interface is trying to communicate.',
              'Deliberately breaking continuity can be a useful, intentional signal too: interrupting an otherwise continuous row or line — with different spacing, an inserted divider, or a shift in alignment — reads as "something changes here," making continuity\'s absence, used on purpose, a legitimate design tool of its own for marking a genuine transition or boundary.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the Law of Continuity describe about how the eye moves through a design?',
                options: [
                  'The eye jumps randomly regardless of layout',
                  'The eye naturally follows a smooth, continuous line or curve rather than an abrupt, disjointed path',
                  'The eye is drawn only to the brightest color on a page',
                  'The eye ignores alignment entirely',
                ],
                correctIndex: 1,
                explanation: 'Continuity describes a preference for tracking smooth, aligned paths, which is part of why consistent alignment reads as calmer and more organized than ragged alignment.',
              },
              {
                id: 'q2',
                question: 'How can deliberately breaking continuity be used as an intentional design signal?',
                options: [
                  'It can\'t — breaking continuity always looks like a mistake',
                  'Interrupting an otherwise continuous line or row (with a divider or spacing change) can signal that something meaningfully changes at that point',
                  'It is only relevant to logo design',
                  'It has the same effect as increasing font size',
                ],
                correctIndex: 1,
                explanation: 'Since continuity implies a single unbroken path, deliberately interrupting it draws attention to a genuine transition or boundary at that specific point.',
              },
            ],
          },
        ],
      },
      {
        id: 'depth-and-boundaries',
        title: 'Depth & Boundaries',
        steps: [
          {
            id: 'figure-ground',
            title: 'Figure-Ground Relationship',
            summary: 'The mind separates a scene into a foreground "figure" and a background — but that split can be deliberately ambiguous.',
            content: [
              'Figure-ground describes the mind\'s tendency to separate any visual scene into a "figure" (the subject that stands out) and a "ground" (the background it sits against) — a modal dialog appearing over a dimmed backdrop is a direct, everyday application: the dimming visually pushes the underlying page into the background, clearly establishing the dialog as the current figure demanding attention.',
              'A classic illustration of figure-ground ambiguity is Rubin\'s vase — an image that can be perceived as either a vase or two facing silhouettes, depending on which region the mind currently treats as figure versus ground, and which flips unpredictably the longer someone looks at it.',
              'Poor contrast between figure and ground is one of the most common, and most damaging, visual failures in interface design — light gray text on a white background technically has "a figure and a ground," but insufficiently distinguished, forcing the eye to work far harder than it should to separate content from its background (and directly connecting back to the color-contrast requirements covered in the Accessibility subject).',
              'Figure-ground thinking also applies to layered interfaces generally: a well-designed modal, tooltip, or dropdown needs enough visual separation (via shadow, dimming, or contrast) from what\'s behind it to clearly read as sitting "on top," rather than blending confusingly into the same visual plane as the content underneath it.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What role does dimming the background play when a modal dialog appears on screen?',
                options: [
                  'It has no perceptual purpose, it\'s purely decorative',
                  'It pushes the underlying page into the "ground," clearly establishing the modal as the current "figure" demanding attention',
                  'It is only used to reduce battery consumption',
                  'It prevents the modal from being closed accidentally',
                ],
                correctIndex: 1,
                explanation: 'Dimming is a direct figure-ground technique — it visually recedes the background so the modal clearly reads as the foreground subject.',
              },
              {
                id: 'q2',
                question: 'Why is low contrast between text and its background considered a figure-ground problem?',
                options: [
                  'Because it always makes text a different color than intended',
                  'Because it forces the eye to work harder to separate the figure (text) from the ground (background), which insufficient contrast fails to make clear',
                  'Because figure-ground only applies to images, never to text',
                  'Because it violates the Law of Similarity instead',
                ],
                correctIndex: 1,
                explanation: 'Text and background form a figure-ground relationship just like any other visual scene — poor contrast weakens that separation, straining legibility.',
              },
            ],
          },
          {
            id: 'law-of-common-region',
            title: 'The Law of Common Region',
            summary: 'A shared visual boundary — like a card\'s border — is one of the strongest grouping signals of all.',
            content: [
              'The Law of Common Region states that elements enclosed within the same visual boundary — a border, a background color fill, a distinct card shape — are perceived as belonging to one group, often even more strongly than proximity or similarity alone would suggest. A shared boundary acts almost like a container, explicitly declaring "everything inside here is related."',
              'This is the perceptual mechanism behind why "cards" are such a common, almost default interface pattern: wrapping a related cluster of content (an image, a title, a short description, an action) in a bordered or shaded container instantly communicates that the whole cluster belongs together, without requiring generous surrounding whitespace to achieve the same grouping effect through proximity alone.',
              'Common region can substitute for proximity in tight layouts where space is limited — two closely packed but visually distinct card containers read as clearly separate groups because of their individual boundaries, even without much of a gap between them, which pure proximity-based grouping (with no visible boundary at all) would struggle to communicate at the same tight spacing.',
              'Overusing common region, however, dilutes its power: wrapping every single element on a page in its own bordered box, regardless of whether genuine grouping is needed, creates visual noise and makes the technique meaningless everywhere it\'s used indiscriminately — reserved use is what keeps it a strong, legible signal.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the Law of Common Region state?',
                options: [
                  'Elements enclosed within the same visual boundary (like a card) are perceived as belonging to one group',
                  'Elements that are the same color are always grouped together',
                  'Elements far apart are automatically perceived as unrelated',
                  'Boundaries have no effect on perceived grouping',
                ],
                correctIndex: 0,
                explanation: 'A shared enclosing boundary — a border, background fill, or card shape — acts as a strong, explicit grouping signal, often stronger than proximity or similarity alone.',
              },
              {
                id: 'q2',
                question: 'Why can common region be especially useful in a tightly packed layout with limited space?',
                options: [
                  'Because it removes the need for any spacing between elements at all',
                  'A visible boundary can clearly separate groups even at tight spacing, where proximity alone (with no visible boundary) would struggle to signal separation',
                  'Because it automatically increases the available screen space',
                  'Because common region only works when elements are far apart',
                ],
                correctIndex: 1,
                explanation: 'A shared boundary can do the grouping work that generous whitespace would otherwise need to do, which matters when space is genuinely constrained.',
              },
            ],
          },
        ],
      },
      {
        id: 'movement-and-simplicity',
        title: 'Movement & Simplicity',
        steps: [
          {
            id: 'law-of-common-fate',
            title: 'The Law of Common Fate',
            summary: 'Elements that move together are perceived as related, even if they look nothing alike.',
            content: [
              'The Law of Common Fate states that elements moving in the same direction, at the same time, are perceived as belonging together — even if they share no similarity in color, shape, or size. Shared motion is treated by the mind as strong evidence of a shared relationship, arguably even more immediate than a static visual trait.',
              'A direct interface example: when a card expands and its supporting metadata (a timestamp, an icon) slides and fades in alongside it in the same motion, the shared movement itself communicates that these elements are part of one connected unit — even before a viewer has consciously read any of the actual content.',
              'Common fate also explains why a coordinated animation across multiple items — a list where every row shifts down together to make room for a newly inserted item — reads as a single coherent event, rather than several unrelated changes that happen to occur at the same moment. This connects directly to the "continuity" purpose of motion covered in Visual Design Basics: shared movement is one of the concrete mechanisms behind that broader continuity benefit.',
              'Because common fate is such a strong grouping signal, mismatched or uncoordinated motion carries a real cost too — if related elements animate independently, at different timings or speeds, viewers may perceive them as unrelated even when a design intends them to be read as one connected group.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the Law of Common Fate describe?',
                options: [
                  'Elements sharing the same color are perceived as related',
                  'Elements moving together, in the same direction and timing, are perceived as belonging to the same group, even without shared appearance',
                  'Elements enclosed in the same boundary are grouped',
                  'The eye follows a smooth continuous line',
                ],
                correctIndex: 1,
                explanation: 'Common fate is specifically about shared motion as a grouping cue — elements that move together read as related regardless of how similar they look.',
              },
              {
                id: 'q2',
                question: 'What can happen if visually related elements animate with mismatched timing or independent motion?',
                options: [
                  'Nothing — motion timing has no effect on perceived grouping',
                  'Viewers may perceive them as unrelated, even if the design intends them to be read as one connected group',
                  'It always improves perceived performance',
                  'It automatically fixes any contrast issues',
                ],
                correctIndex: 1,
                explanation: 'Since shared motion itself signals relatedness, uncoordinated animation can undercut an intended grouping just as effectively as inconsistent color or spacing would.',
              },
            ],
          },
          {
            id: 'law-of-pragnanz',
            title: 'The Law of Prägnanz (Simplicity)',
            summary: 'When perception is ambiguous, the mind defaults to the simplest, most orderly interpretation available.',
            content: [
              'The Law of Prägnanz (from a German word roughly meaning "conciseness" or "terseness") states that, when faced with visual ambiguity, the mind gravitates toward the simplest, most orderly, most stable interpretation available — sometimes summarized as "the law of good figure" or "the law of simplicity." Given several possible ways to interpret a complex or ambiguous arrangement, the simplest one tends to win.',
              'This is closely related to why symmetrical, regular layouts feel calmer and easier to process than irregular ones with no evident pattern — symmetry and regularity are, quite literally, simpler structures for the mind to resolve and hold onto than an arrangement with no discernible order.',
              'Prägnanz acts as something like the umbrella principle behind several of the other Gestalt laws covered in this subject: proximity, similarity, closure, and continuity can all be understood as different specific mechanisms the mind uses to arrive at the simplest available organization of a scene, rather than treating each individual element as a separate, disconnected piece of information.',
              'For interface design, the practical implication is a reminder that simplicity in the Gestalt sense isn\'t about using fewer elements — it\'s about how easily the mind can resolve the relationships between the elements that are there. A visually "busy" screen can still feel calm if its underlying grouping is clear and orderly, while a sparse screen with inconsistent, unclear grouping can feel more chaotic than its element count would suggest.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'What does the Law of Prägnanz state?',
                options: [
                  'That people always prefer the most complex interpretation of an ambiguous scene',
                  'That, given visual ambiguity, the mind defaults to the simplest, most orderly interpretation available',
                  'That every design must use as few elements as possible',
                  'That symmetry is irrelevant to visual perception',
                ],
                correctIndex: 1,
                explanation: 'Prägnanz describes a default toward simplicity and order when perception is ambiguous — the mind resolves toward the most stable, easiest-to-process interpretation.',
              },
              {
                id: 'q2',
                question: 'According to this step, what does "simplicity" actually mean in the Gestalt sense for interface design?',
                options: [
                  'Using the smallest possible number of elements on a screen',
                  'How easily the mind can resolve the relationships between the elements present, regardless of how many there are',
                  'Removing all color from a design',
                  'Avoiding any use of animation',
                ],
                correctIndex: 1,
                explanation: 'Gestalt simplicity is about clarity of relationships and grouping, not raw element count — a visually dense screen can still feel orderly if its grouping is clear.',
              },
            ],
          },
        ],
      },
      {
        id: 'applying-gestalt-to-interfaces',
        title: 'Applying Gestalt to Interfaces',
        steps: [
          {
            id: 'gestalt-in-navigation-and-forms',
            title: 'Gestalt in Navigation & Forms',
            summary: 'Seeing several Gestalt laws working together in two of the most common interface patterns.',
            content: [
              'A typical navigation bar puts several Gestalt laws to work simultaneously: proximity groups related nav items tightly together while separating them from unrelated page content; similarity keeps every nav item styled consistently so they read as one coherent set of options; and continuity, if items are arranged along a single row, helps the eye scan across them as one connected sequence rather than a series of disconnected labels.',
              'A well-structured form shows the same layering. Related fields (first name, last name) sit in proximity; every label follows the same similarity treatment (position, weight, color) so the eye recognizes "this is a label" instantly, everywhere it appears; and a section of related fields wrapped in a common region (a bordered or shaded fieldset) signals a shared sub-topic within a longer form, like a "shipping address" grouping distinct from a "payment details" grouping.',
              'These laws rarely operate one at a time in a real interface — they compound and reinforce each other. A card component groups its contents through common region (the card\'s boundary) and proximity (tight internal spacing) simultaneously; a multi-step checkout indicator relies on continuity, common fate (if steps animate as they complete), and proximity all at once.',
              'The practical skill this step is meant to build isn\'t memorizing which law explains which pattern — it\'s the habit of asking, when a layout feels confusing or ambiguous, which Gestalt principle is missing or working against the intended structure, since that diagnosis usually points directly to a specific, fixable adjustment.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'In a well-structured form, what does wrapping related fields (like a full shipping address) in a bordered fieldset primarily achieve?',
                options: [
                  'It has no perceptual effect, it\'s purely decorative',
                  'It uses common region to signal that those fields share a sub-topic, distinct from other groups in the form',
                  'It applies the Law of Continuity',
                  'It replaces the need for field labels',
                ],
                correctIndex: 1,
                explanation: 'A shared boundary around related fields is a direct application of common region, clearly marking that group as belonging together within a longer form.',
              },
              {
                id: 'q2',
                question: 'According to this step, what is the real practical skill in applying Gestalt principles to interface design?',
                options: [
                  'Memorizing the exact names of all the Gestalt laws',
                  'Recognizing, when a layout feels confusing, which Gestalt principle is missing or working against the intended structure — since that points to a fixable adjustment',
                  'Using as many Gestalt principles as possible on every screen',
                  'Avoiding the use of any Gestalt principle in forms specifically',
                ],
                correctIndex: 1,
                explanation: 'The practical value is diagnostic — using the principles to identify exactly what\'s undermining a layout\'s clarity, not reciting definitions.',
              },
            ],
          },
          {
            id: 'common-gestalt-mistakes',
            title: 'Common Gestalt Mistakes to Avoid',
            summary: 'The laws work both ways — the same principles that create clarity can accidentally create confusion.',
            content: [
              'Because Gestalt grouping happens automatically and largely unconsciously, it\'s just as easy to accidentally signal the wrong relationship as it is to intentionally signal the right one. A frequent mistake is uneven spacing that unintentionally invokes proximity incorrectly — placing a "Cancel" button slightly closer to an unrelated "Delete" button than to its actual paired "Confirm" button visually suggests a relationship between Cancel and Delete that was never intended.',
              'Another common mistake is over-relying on similarity for items that are actually different in function — styling a "learn more" link identically to a "delete my account" link because both happen to be text links, when their difference in consequence deserves a clear, deliberate visual distinction instead.',
              'Common region gets misapplied when a border or background is added purely for decoration, without any actual grouping logic behind it — a card-style container wrapped around content that has no real internal relationship creates a false promise of grouping that the content itself doesn\'t deliver on, actively working against Prägnanz\'s preference for a simple, resolvable structure.',
              'The most reliable way to catch these mistakes is to deliberately unfocus and look at a layout\'s overall shapes and spacing without reading any of the text — the same kind of "squint test" designers commonly use — since Gestalt grouping is a purely visual, structural effect, entirely separate from whatever the words on screen actually say.',
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Why is placing "Cancel" and "Delete" buttons slightly closer together than "Cancel" and its actual paired "Confirm" button a mistake?',
                options: [
                  'It has no real effect on how users interpret the buttons',
                  'Proximity would unintentionally signal a relationship between Cancel and Delete that isn\'t actually intended',
                  'It violates the Law of Common Fate',
                  'It is only a problem on touchscreens',
                ],
                correctIndex: 1,
                explanation: 'Since proximity is such a strong, automatic grouping cue, uneven spacing can accidentally suggest a relationship between elements that was never intended, misleading users.',
              },
              {
                id: 'q2',
                question: 'What is the purpose of a "squint test" (deliberately unfocusing on a layout) when checking for Gestalt mistakes?',
                options: [
                  'To check spelling and grammar more easily',
                  'To evaluate the purely visual, structural grouping of a layout separately from the meaning of the words on screen',
                  'To measure the exact pixel dimensions of elements',
                  'To test how the page performs on a slow network connection',
                ],
                correctIndex: 1,
                explanation: 'Since Gestalt grouping is a visual effect independent of content meaning, deliberately blurring out the text isolates whether the shapes and spacing alone communicate the intended structure.',
              },
            ],
          },
        ],
      },
    ],
  },
  uxForAiSubject,
];
