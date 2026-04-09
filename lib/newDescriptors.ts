import type { ScoreBand, TraitKey, NewScaleDescriptor } from "@/types";

export const NEW_SCALE_DESCRIPTORS: Record<TraitKey, Record<ScoreBand, NewScaleDescriptor>> = {
  AP: {
    Low: {
      band: "Low",
      title: "Risk Averse and Reserved",
      characteristics: "Focused on safety, stability, and avoiding mistakes. Reluctant to take risks and hesitant in high-pressure situations.",
      actions: [
        { title: "Encourage gradual risk-taking", description: "Start with small, manageable challenges to build confidence in decision-making and taking calculated risks." },
        { title: "Develop a growth mindset", description: "Help them view setbacks as learning opportunities rather than threats." },
        { title: "Focus on incremental goals", description: "Break larger goals into smaller, achievable steps to minimize feelings of overwhelm." },
        { title: "Leverage strengths", description: "Assign roles that prioritize stability and process-oriented tasks, emphasizing their cautious and detail-focused nature." },
        { title: "Introduce change slowly", description: "Gradually expose them to dynamic environments to help them adapt over time." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Cautious and Service Oriented",
      characteristics: "Moderate ambition with a focus on security and steady progress. Avoids high-pressure environments but is open to measured growth.",
      actions: [
        { title: "Encourage measured ambition", description: "Set clear, realistic goals that balance risk and security." },
        { title: "Build confidence in dynamic situations", description: "Provide support during high-pressure tasks to help them navigate uncertainty effectively." },
        { title: "Promote collaborative leadership", description: "Leverage their service-oriented nature to build strong team relationships while working toward goals." },
        { title: "Incorporate flexibility", description: "Encourage adaptability by exposing them to new challenges within a controlled, supportive framework." },
        { title: "Reinforce success", description: "Celebrate small victories to build their confidence and motivation for larger challenges." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Balanced Motivators",
      characteristics: "Adaptable and balanced between ambition and caution. Able to navigate both task-oriented and relationship-focused environments.",
      actions: [
        { title: "Maximize versatility", description: "Highlight their adaptability and encourage roles that require both strategic thinking and relationship management." },
        { title: "Challenge their comfort zone", description: "Push them slightly beyond their limits to foster growth without overwhelming them." },
        { title: "Balance goals and relationships", description: "Help them develop strategies to excel in both task-focused and people-focused aspects of their work." },
        { title: "Foster strategic risk-taking", description: "Encourage them to assess and embrace opportunities for growth while maintaining stability." },
        { title: "Support leadership growth", description: "Provide opportunities to lead in consultative or persuasive capacities to build their confidence." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Driven Leaders",
      characteristics: "Persistent and motivated by challenges. Balanced ambition with a strong focus on achieving results and maintaining relationships.",
      actions: [
        { title: "Enhance leadership skills", description: "Develop their ability to balance task-focused and people-oriented leadership strategies." },
        { title: "Focus on resilience", description: "Equip them with strategies to overcome setbacks and maintain momentum in competitive environments." },
        { title: "Encourage calculated risk-taking", description: "Help them refine their ability to assess opportunities and take strategic risks." },
        { title: "Prioritize balance", description: "Coach them to maintain a balance between their competitive drive and the need to collaborate with others." },
        { title: "Recognize achievements", description: "Reinforce their motivation by celebrating their successes and providing constructive feedback for improvement." },
      ],
    },
    High: {
      band: "High",
      title: "Ambitious Achievers",
      characteristics: "Intensely competitive, goal-driven, and results-oriented. Thrives in fast-paced environments but may overlook details or relationships.",
      actions: [
        { title: "Cultivate patience", description: "Encourage mindfulness practices or strategies to manage impatience and frustration with slower-paced tasks or colleagues." },
        { title: "Foster collaborative skills", description: "Highlight the importance of teamwork and relationship-building to achieve long-term success." },
        { title: "Balance urgency with detail", description: "Coach them to slow down and focus on critical details without losing sight of the bigger picture." },
        { title: "Channel energy strategically", description: "Guide them to prioritize tasks effectively and avoid burnout from overextending themselves." },
        { title: "Expand leadership capacity", description: "Encourage them to mentor others and delegate responsibilities to maximize team potential while maintaining focus on results." },
      ],
    },
  },

  EP: {
    Low: {
      band: "Low",
      title: "Reactive Entrepreneur",
      characteristics: "Relies on external structure and supervision, struggles with self-management and navigating ambiguity, avoids taking initiative.",
      actions: [
        { title: "Build foundational self-management skills", description: "Provide tools for planning, time management, and setting small, achievable goals." },
        { title: "Encourage gradual autonomy", description: "Assign simple tasks with minimal oversight to help build confidence in independent decision-making." },
        { title: "Support adaptability", description: "Expose them to controlled ambiguous situations to develop comfort with change over time." },
        { title: "Provide consistent feedback", description: "Offer clear, regular feedback to guide and reinforce positive behaviors." },
        { title: "Foster a supportive environment", description: "Pair them with a mentor or supervisor who can model proactive behaviors." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Developing Entrepreneur",
      characteristics: "Capable of basic self-management but needs support to enhance initiative and comfort with ambiguity. Prefers clear structures and processes.",
      actions: [
        { title: "Encourage calculated risk-taking", description: "Introduce opportunities to make low-stakes decisions independently." },
        { title: "Set clear expectations", description: "Provide structured goals while gradually reducing reliance on external guidance." },
        { title: "Develop problem-solving skills", description: "Teach strategies for handling uncertainty and making decisions without immediate direction." },
        { title: "Promote initiative", description: "Encourage them to take ownership of specific tasks or projects." },
        { title: "Provide recognition", description: "Reinforce progress with positive feedback to build confidence." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Balanced Self-Management",
      characteristics: "Balances proactivity and responsiveness, adapts to different situations, moderately comfortable with ambiguity.",
      actions: [
        { title: "Leverage adaptability", description: "Assign tasks that require switching between structured and unstructured approaches." },
        { title: "Strengthen decision-making skills", description: "Provide opportunities to lead projects, encouraging strategic thinking." },
        { title: "Encourage consistency", description: "Help them establish routines to maintain focus across varied situations." },
        { title: "Enhance leadership potential", description: "Offer roles that involve both guiding teams and collaborating with peers." },
        { title: "Push comfort zones", description: "Gradually challenge them with more ambiguous or dynamic tasks to build confidence." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Proactive Self-Management",
      characteristics: "Proactive and self-directed, able to balance assertiveness with responsiveness. Adapts well to changing circumstances.",
      actions: [
        { title: "Encourage strategic risk-taking", description: "Provide challenging projects that require assessing and managing complex risks." },
        { title: "Refine leadership skills", description: "Offer opportunities to lead teams or mentor others to develop their influence." },
        { title: "Promote goal alignment", description: "Help them tie personal goals to organizational objectives for greater impact." },
        { title: "Support resilience", description: "Teach strategies to manage setbacks and maintain focus on long-term outcomes." },
        { title: "Recognize and reward initiative", description: "Celebrate their proactive contributions to reinforce their motivation." },
      ],
    },
    High: {
      band: "High",
      title: "High Entrepreneurial Potential",
      characteristics: "Highly self-directed, assertive, and goal-driven. Prefers autonomy and thrives in dynamic, fast-paced environments.",
      actions: [
        { title: "Channel energy effectively", description: "Teach prioritization and delegation to avoid burnout and optimize performance." },
        { title: "Enhance collaboration skills", description: "Encourage empathy and teamwork to balance autonomy with relationship-building." },
        { title: "Develop patience", description: "Help them manage frustration when working with less proactive or structured individuals." },
        { title: "Expand strategic influence", description: "Guide them in leveraging their assertiveness for broader organizational impact." },
        { title: "Focus on long-term vision", description: "Encourage them to align their entrepreneurial drive with sustainable growth strategies." },
      ],
    },
  },

  IP: {
    Low: {
      band: "Low",
      title: "Dependent on Structure",
      characteristics: "Highly reliant on structure, clear guidelines, and external support; excels in process-driven environments but struggles with autonomy and ambiguity.",
      actions: [
        { title: "Build confidence in autonomy", description: "Start by assigning small, low-risk tasks that require independent decision-making." },
        { title: "Provide clear frameworks", description: "Offer structured templates or processes to help them navigate unstructured tasks." },
        { title: "Gradually reduce oversight", description: "Encourage them to take on more responsibility incrementally, providing guidance when needed." },
        { title: "Teach problem-solving skills", description: "Offer tools and techniques to handle ambiguity and make decisions independently." },
        { title: "Reinforce reliability", description: "Recognize and celebrate their strengths in adhering to processes to build confidence for new challenges." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Team Oriented",
      characteristics: "Comfortable in structured environments, rely on external support but can work with some degree of independence.",
      actions: [
        { title: "Encourage initiative", description: "Assign tasks that require them to step slightly outside of their comfort zone." },
        { title: "Balance structure with autonomy", description: "Allow them to follow established processes but include opportunities to suggest improvements." },
        { title: "Promote collaborative independence", description: "Encourage independent contributions while maintaining team-oriented work." },
        { title: "Develop decision-making confidence", description: "Offer scenarios where they can practice making decisions without seeking immediate guidance." },
        { title: "Provide constructive feedback", description: "Reinforce small wins to build their self-reliance." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Balanced Independence",
      characteristics: "Balanced between independence and structure; adaptable to both autonomous tasks and organizational guidelines.",
      actions: [
        { title: "Leverage versatility", description: "Assign roles requiring a mix of self-direction and adherence to team processes." },
        { title: "Strengthen leadership potential", description: "Offer leadership opportunities in both structured and unstructured settings." },
        { title: "Foster strategic independence", description: "Provide complex tasks requiring them to decide when to follow structure versus innovate." },
        { title: "Encourage feedback receptivity", description: "Help them integrate feedback into independent decision-making processes." },
        { title: "Push boundaries", description: "Challenge them with projects requiring slightly more autonomy than they are used to." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Autonomous and Adaptable",
      characteristics: "Self-reliant and comfortable creating their own frameworks while remaining adaptable to loose structures.",
      actions: [
        { title: "Promote creative problem-solving", description: "Assign projects where they can innovate within a flexible structure." },
        { title: "Expand influence", description: "Encourage them to mentor others to foster collaboration and adaptability within teams." },
        { title: "Balance autonomy with teamwork", description: "Highlight the importance of aligning their independent efforts with team objectives." },
        { title: "Develop resilience in feedback", description: "Coach them to view constructive feedback as a tool for refinement, not a limitation." },
        { title: "Encourage strategic risk-taking", description: "Provide opportunities to lead initiatives requiring bold, independent decisions." },
      ],
    },
    High: {
      band: "High",
      title: "Strongly Independent and Self-Reliant",
      characteristics: "Highly independent, resistant to structure, and thrives in autonomous roles; visionary and innovative but may struggle with team dynamics and feedback.",
      actions: [
        { title: "Channel independence effectively", description: "Guide them in aligning their personal strategies with organizational goals." },
        { title: "Develop collaboration skills", description: "Encourage empathy and teamwork to balance autonomy with effective group dynamics." },
        { title: "Enhance feedback receptivity", description: "Teach the value of constructive input in refining innovative ideas and strategies." },
        { title: "Focus on long-term impact", description: "Help them tie their independent actions to broader, sustainable outcomes." },
        { title: "Encourage leadership growth", description: "Provide opportunities to lead high-autonomy projects while mentoring others to build collaborative skills." },
      ],
    },
  },

  PO: {
    Low: {
      band: "Low",
      title: "Highly Reserved and Independent",
      characteristics: "Reserved and private, these individuals prefer minimal social interaction and find extensive engagement draining. They thrive in smaller, familiar settings and are more focused on building deep, meaningful connections over time.",
      actions: [
        { title: "Start with familiar settings", description: "Encourage them to engage with small, familiar groups to build their comfort in social situations." },
        { title: "Focus on deep relationships", description: "Leverage their preference for quality interactions by assigning roles that require building long-term trust." },
        { title: "Teach communication skills", description: "Provide training in active listening and conversation starters to improve their confidence in social settings." },
        { title: "Gradually increase exposure", description: "Introduce opportunities for broader engagement, such as attending short networking events or team-building activities." },
        { title: "Reinforce thoughtful contributions", description: "Highlight the value of their deliberate and meaningful communication style in group settings." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Reserved and Selective",
      characteristics: "Selective in their interactions, these individuals prefer deliberate and meaningful engagement over frequent socializing. They are attentive communicators but take time to warm up in new social environments.",
      actions: [
        { title: "Encourage strategic networking", description: "Help them identify key relationships to focus on, prioritizing quality over quantity." },
        { title: "Support gradual involvement", description: "Provide opportunities to participate in structured social activities, like team discussions or scheduled meetings." },
        { title: "Practice conversational skills", description: "Offer scenarios or role-play exercises to improve their ease in initiating and navigating social interactions." },
        { title: "Promote confidence in group settings", description: "Assign roles in team projects where they can contribute selectively but meaningfully." },
        { title: "Balance structure and flexibility", description: "Allow them to engage at their own pace while gradually encouraging more frequent interactions." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Socially Balanced",
      characteristics: "Moderately sociable, these individuals balance social interaction with independence. They are comfortable engaging when needed but do not seek out social situations for energy or motivation.",
      actions: [
        { title: "Leverage adaptability", description: "Assign tasks that require both collaboration and independent work, playing to their balanced strengths." },
        { title: "Encourage proactive engagement", description: "Motivate them to take the lead in social interactions occasionally, such as initiating team discussions or client calls." },
        { title: "Build social confidence", description: "Provide feedback on their interpersonal skills to reinforce their effectiveness in communication." },
        { title: "Set situational goals", description: "Challenge them to participate more actively in specific scenarios, like brainstorming sessions or networking events." },
        { title: "Expand comfort zones", description: "Encourage participation in environments that require slightly more frequent interaction, such as cross-functional team projects." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Friendly and Engaging",
      characteristics: "Friendly, approachable, and considerate, these individuals value and enjoy social interaction. They build rapport quickly and are effective communicators, showing a natural ease in their interactions.",
      actions: [
        { title: "Highlight leadership potential", description: "Encourage them to take on roles that require guiding or mentoring others through strong interpersonal skills." },
        { title: "Refine relationship strategies", description: "Help them balance their focus on rapport-building with achieving broader organizational goals." },
        { title: "Encourage deeper connections", description: "Motivate them to go beyond surface-level interactions and invest in long-term, trust-based relationships." },
        { title: "Teach time prioritization", description: "Help them manage their energy by balancing social engagement with task-focused productivity." },
        { title: "Leverage their influence", description: "Assign them to client-facing or team-cohesion roles where their friendliness can inspire trust and collaboration." },
      ],
    },
    High: {
      band: "High",
      title: "Highly Approachable",
      characteristics: "Charismatic and talkative, these individuals thrive in social settings, quickly building connections and energizing others. They excel in roles requiring strong interpersonal skills and enjoy forming new relationships.",
      actions: [
        { title: "Encourage strategic networking", description: "Guide them to focus their energy on building relationships that align with long-term goals." },
        { title: "Balance enthusiasm with focus", description: "Help them manage their time and energy to ensure social engagement does not detract from task execution." },
        { title: "Develop deeper empathy", description: "Encourage active listening and understanding diverse perspectives to strengthen their relational impact." },
        { title: "Teach boundary setting", description: "Coach them on setting limits in social interactions to avoid overcommitment." },
        { title: "Maximize visibility", description: "Assign them to high-visibility roles that leverage their charisma, such as public relations, sales, or leadership positions." },
      ],
    },
  },

  INV_AO: {
    Low: {
      band: "Low",
      title: "Practical and Routine-Focused",
      characteristics: "Focus on essential knowledge, prefer established routines, and prioritize efficiency over deep learning or exploration.",
      actions: [
        { title: "Encourage curiosity", description: "Introduce opportunities to explore topics beyond their immediate tasks to stimulate intellectual engagement." },
        { title: "Provide small learning goals", description: "Set achievable, practical learning objectives to build confidence in expanding their knowledge base." },
        { title: "Tie learning to results", description: "Show how acquiring additional knowledge can directly enhance their performance and efficiency." },
        { title: "Promote resourcefulness", description: "Teach them to seek out information independently when needed, rather than relying solely on routine processes." },
        { title: "Celebrate learning milestones", description: "Recognize their efforts when they engage with new information or successfully apply what they've learned." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Results-Driven and Pragmatic",
      characteristics: "Prioritize practical, results-oriented knowledge and focus on immediate relevance rather than deep exploration.",
      actions: [
        { title: "Expand learning focus", description: "Encourage them to explore knowledge areas that could contribute to longer-term goals, not just immediate tasks." },
        { title: "Foster strategic thinking", description: "Help them see the value of understanding broader trends and how these insights can drive better decision-making." },
        { title: "Provide structured learning opportunities", description: "Offer concise and focused training sessions or resources tailored to their role." },
        { title: "Support deeper engagement", description: "Encourage participation in projects requiring moderate analysis or exploration of new information." },
        { title: "Reinforce the importance of growth", description: "Highlight how continuous learning can improve adaptability and career advancement." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Balanced and Flexible Learner",
      characteristics: "Strikes a balance between efficiency and depth, engaging with information as needed while maintaining a practical focus.",
      actions: [
        { title: "Encourage targeted expertise", description: "Guide them to deepen knowledge in key areas where specialization could enhance their impact." },
        { title: "Promote adaptability", description: "Encourage them to experiment with different learning styles to suit various challenges or projects." },
        { title: "Foster strategic engagement", description: "Help them identify situations where deeper analysis or learning would be particularly beneficial." },
        { title: "Leverage their flexibility", description: "Assign tasks requiring both operational execution and moderate information processing to stretch their abilities." },
        { title: "Highlight leadership growth", description: "Reinforce how their balance of practicality and learning can support their ability to lead both teams and initiatives effectively." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Engaged and Contextually Adaptable",
      characteristics: "Moderately engaged in learning, adaptable in their information processing, and capable of balancing operational and strategic demands.",
      actions: [
        { title: "Encourage proactive learning", description: "Motivate them to seek out new knowledge even when not directly required by their role." },
        { title: "Promote deeper exploration", description: "Challenge them to engage more deeply with complex topics to expand their strategic capabilities." },
        { title: "Leverage their versatility", description: "Assign projects requiring both in-depth knowledge and adaptable decision-making to stretch their skills." },
        { title: "Teach balance in delegation", description: "Help them determine when to rely on others' expertise and when to develop their own understanding." },
        { title: "Support strategic leadership", description: "Encourage them to integrate their practical knowledge with a broader vision for long-term impact." },
      ],
    },
    High: {
      band: "High",
      title: "Deeply Analytical and Knowledge-Driven",
      characteristics: "Highly analytical, motivated to seek comprehensive knowledge, and deeply engaged in learning and information processing.",
      actions: [
        { title: "Encourage prioritization", description: "Help them identify when detailed analysis is essential and when efficiency is more critical to decision-making." },
        { title: "Promote concise communication", description: "Teach strategies for simplifying complex insights to avoid overwhelming clients or colleagues." },
        { title: "Balance action with analysis", description: "Guide them to take decisive action even when all information isn't available to avoid delays." },
        { title: "Support innovative leadership", description: "Assign roles that capitalize on their expertise while encouraging strategic, forward-thinking approaches." },
        { title: "Foster collaborative learning", description: "Encourage them to share their knowledge in a way that inspires and develops others without appearing overly detailed or exhaustive." },
      ],
    },
  },

  CWC: {
    Low: {
      band: "Low",
      title: "Conflict-Avoidant",
      characteristics: "Highly uncomfortable with conflict, preferring to avoid difficult conversations and maintain harmony. Communication is passive and compliant.",
      actions: [
        { title: "Build confidence in addressing conflict", description: "Provide tools and frameworks (e.g., role-playing scenarios) for handling low-stakes disagreements." },
        { title: "Teach assertive communication", description: "Encourage them to express their thoughts clearly while maintaining respect and collaboration." },
        { title: "Focus on preparation", description: "Help them prepare for difficult conversations by identifying key points and desired outcomes in advance." },
        { title: "Promote gradual exposure", description: "Assign small tasks that require addressing minor conflicts to build comfort and resilience over time." },
        { title: "Reframe conflict positively", description: "Show them how constructive conflict can lead to better decisions and stronger team dynamics." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Harmony-Seeking",
      characteristics: "Somewhat uncomfortable with conflict, preferring harmony but capable of assertiveness in familiar or low-stakes situations.",
      actions: [
        { title: "Encourage situational assertiveness", description: "Guide them to recognize when standing firm is necessary to protect team goals or personal boundaries." },
        { title: "Strengthen conflict resolution skills", description: "Provide strategies for balancing harmony with addressing critical issues directly." },
        { title: "Reinforce their role in team dynamics", description: "Help them see how their ability to maintain peace can complement more assertive approaches." },
        { title: "Support confidence-building", description: "Assign leadership tasks requiring moderate conflict engagement to build their confidence in handling tension." },
        { title: "Teach emotional regulation", description: "Equip them with techniques to stay calm and composed during challenging conversations." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Balanced and Cooperative",
      characteristics: "Comfortable addressing conflict when necessary but prefers to avoid it unless essential. Communication is cooperative with situational assertiveness.",
      actions: [
        { title: "Leverage adaptability", description: "Encourage them to refine their ability to shift between assertiveness and collaboration based on the situation." },
        { title: "Enhance strategic conflict resolution", description: "Teach advanced techniques for managing group dynamics while resolving disagreements productively." },
        { title: "Promote proactive engagement", description: "Help them recognize when addressing conflict early can prevent escalation." },
        { title: "Develop leadership confidence", description: "Assign tasks requiring balanced conflict management to strengthen their ability to lead under pressure." },
        { title: "Encourage reflective learning", description: "Guide them to analyze past conflicts to identify what worked well and areas for improvement." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Confident and Assertive",
      characteristics: "Comfortable with conflict, assertive in communication, and confident in their stance. They do not shy away from addressing challenges but may struggle with managing emotions or fostering compromise.",
      actions: [
        { title: "Develop emotional intelligence", description: "Teach techniques for managing their own emotions and reading others' cues during conflicts." },
        { title: "Focus on collaborative conflict resolution", description: "Encourage them to balance assertiveness with empathy and compromise to reach mutually beneficial outcomes." },
        { title: "Promote self-awareness", description: "Help them identify situations where their assertiveness might escalate tension unnecessarily." },
        { title: "Refine communication skills", description: "Teach methods for delivering assertive messages in a way that minimizes defensiveness in others." },
        { title: "Encourage a long-term perspective", description: "Guide them to consider how their approach to conflict affects relationships and team cohesion over time." },
      ],
    },
    High: {
      band: "High",
      title: "Conflict-Comfortable Leaders",
      characteristics: "Highly comfortable with conflict and assertive communication. They see conflict as an opportunity to take charge but may overly rely on directiveness, which does not ensure effectiveness.",
      actions: [
        { title: "Balance assertiveness with collaboration", description: "Encourage them to seek input from others and foster a team-centered approach during conflicts." },
        { title: "Teach de-escalation strategies", description: "Equip them with tools for calming tensions and preventing escalation when addressing conflicts." },
        { title: "Develop active listening skills", description: "Emphasize the importance of understanding others' perspectives to build trust and credibility." },
        { title: "Promote conflict resolution over control", description: "Help them focus on solving the issue rather than asserting dominance in challenging situations." },
        { title: "Foster mentorship qualities", description: "Encourage them to guide others in navigating conflicts, modeling effective and empathetic conflict management." },
      ],
    },
  },

  EQ: {
    Low: {
      band: "Low",
      title: "Emotionally Reactive",
      characteristics: "Struggles to manage emotions, often reacting impulsively or overreacting under pressure. Lacks consistent coping strategies, making them prone to stress and frustration.",
      actions: [
        { title: "Teach stress management techniques", description: "Introduce practical strategies such as mindfulness techniques, deep breathing, or physical exercise to help manage emotional responses." },
        { title: "Promote awareness of triggers", description: "Help identify situations or conversations that lead to emotional overreactions and create strategies to handle them." },
        { title: "Encourage pause before response", description: "Train them to take a moment to process emotions before reacting, using methods like counting to ten or reflective questioning." },
        { title: "Set goals for emotional regulation", description: "Provide low-stakes opportunities to practice managing emotions, such as role-playing difficult conversations." },
        { title: "Provide constructive feedback", description: "Regularly review their emotional responses in a supportive environment to reinforce progress and encourage self-awareness." },
      ],
    },
    "Low-Mid": {
      band: "Low-Mid",
      title: "Moderately Reactive",
      characteristics: "Shows some ability to manage emotions but struggles in high-pressure or unexpected situations. Reactive tendencies may occasionally impact decision-making or team dynamics.",
      actions: [
        { title: "Develop emotional recovery strategies", description: "Teach techniques like journaling or reframing to help them recover quickly from emotional disruptions." },
        { title: "Encourage reflective practices", description: "Have them analyze past emotional reactions to understand what worked and what could improve." },
        { title: "Strengthen emotional awareness", description: "Guide them in recognizing subtle emotional cues to respond thoughtfully rather than reactively." },
        { title: "Introduce structured decision-making tools", description: "Help them use frameworks to maintain focus and rationality during emotionally charged situations." },
        { title: "Build resilience through exposure", description: "Gradually expose them to more challenging situations to practice maintaining composure under increasing pressure." },
      ],
    },
    Mid: {
      band: "Mid",
      title: "Emotionally Balanced",
      characteristics: "Manages emotions effectively in most situations but may experience occasional difficulty under extreme pressure. Typically composed and capable of maintaining stability in leadership roles.",
      actions: [
        { title: "Expand emotional regulation techniques", description: "Introduce advanced methods like visualization or progressive relaxation to strengthen stress management in high-pressure scenarios." },
        { title: "Encourage proactive stress management", description: "Help them establish routines that include physical exercise, hobbies, or mindfulness practices to prevent burnout." },
        { title: "Promote consistent emotional check-ins", description: "Guide them in assessing their emotional state regularly to catch fluctuations early." },
        { title: "Refine response strategies", description: "Teach methods to navigate highly emotional or unexpected challenges with greater consistency and control." },
        { title: "Prepare for high-stakes environments", description: "Simulate scenarios that require rapid emotional regulation to help them build confidence and readiness." },
      ],
    },
    "Mid-High": {
      band: "Mid-High",
      title: "Composed and Resilient",
      characteristics: "Calm and composed, effectively managing stress and maintaining emotional control. Responds thoughtfully and inspires confidence, particularly in high-pressure or long-term stressful environments.",
      actions: [
        { title: "Strengthen adaptability", description: "Challenge them to practice managing emotions in unfamiliar or dynamic situations to broaden their resilience." },
        { title: "Foster authentic emotional expression", description: "Encourage them to show appropriate vulnerability to strengthen team trust and relatability." },
        { title: "Refine crisis management skills", description: "Help them develop strategies for addressing prolonged stress or compounded challenges effectively." },
        { title: "Encourage team-focused regulation", description: "Coach them to model emotional regulation techniques for their teams, fostering a culture of composure and resilience." },
        { title: "Promote self-care strategies", description: "Reinforce the importance of maintaining their emotional reserves through balanced work-life practices." },
      ],
    },
    High: {
      band: "High",
      title: "Emotionally Masterful",
      characteristics: "Excels at managing emotions, even in the most stressful situations. Maintains composure and uses advanced techniques to remain centered. Highly steady and trustworthy but may risk appearing emotionally detached or unauthentic.",
      actions: [
        { title: "Balance composure with authenticity", description: "Encourage appropriate emotional expression to foster stronger connections and relatability with the team." },
        { title: "Address conflict directly", description: "Guide them in ensuring their composure doesn't lead to avoiding necessary but challenging emotional confrontations." },
        { title: "Leverage emotional regulation to empower others", description: "Coach them to teach and model their techniques for team development and resilience." },
        { title: "Promote ongoing self-reflection", description: "Help them evaluate the balance between their emotional control and how they are perceived by others." },
        { title: "Strengthen empathetic leadership", description: "Encourage them to actively engage with the emotional experiences of others to deepen team cohesion and trust." },
      ],
    },
  },
};

// SAQ shares the same normed score & descriptor thresholds as EQ
export const SAQ_DESCRIPTORS: Record<ScoreBand, NewScaleDescriptor> = {
  Low: {
    band: "Low",
    title: "Limited Self-Awareness",
    characteristics: "Individuals with low self-awareness struggle to recognize and understand their emotions and behaviors and how these impact their actions and relationships. They are resistant to feedback and often have blind spots in communication and decision-making.",
    actions: [
      { title: "Introduce emotional literacy", description: "Provide tools or training to help them identify and label emotions, such as emotional intelligence workshops or reflection exercises." },
      { title: "Encourage structured feedback", description: "Use regular, constructive feedback sessions to help them understand the impact of their actions in a supportive way." },
      { title: "Start with small self-reflection tasks", description: "Assign low-stakes exercises like journaling or reflecting on specific interactions to build their capacity for introspection." },
      { title: "Highlight the value of self-awareness", description: "Show them how improving self-awareness can lead to better decision-making and team dynamics." },
      { title: "Pair them with a mentor", description: "Provide guidance from someone who models strong self-awareness to help them see its practical benefits." },
    ],
  },
  "Low-Mid": {
    band: "Low-Mid",
    title: "Reactive and Moderately Self-Aware",
    characteristics: "These individuals have some awareness of their emotions and behaviors but are more reactive than reflective. They may lack consistency in using feedback or exploring personal growth opportunities.",
    actions: [
      { title: "Encourage reflective practices", description: "Introduce tools like post-action reviews or guided self-assessments to help them connect behaviors to outcomes." },
      { title: "Promote active feedback use", description: "Help them incorporate feedback into actionable goals for personal and professional development." },
      { title: "Strengthen emotional regulation", description: "Teach techniques like mindfulness or deep breathing to manage emotional responses during challenging situations." },
      { title: "Highlight strengths", description: "Reinforce their ability to handle day-to-day interactions and encourage growth in more complex scenarios." },
      { title: "Set growth milestones", description: "Establish clear, measurable goals to improve their self-awareness over time, such as practicing active listening or journaling weekly reflections." },
    ],
  },
  Mid: {
    band: "Mid",
    title: "Balanced Self-Awareness",
    characteristics: "These individuals have a solid grasp of their emotions and behaviors, balancing reflection with action. They are open to feedback but may not consistently seek it or engage in deep self-exploration.",
    actions: [
      { title: "Encourage proactive feedback-seeking", description: "Help develop the habit of asking for feedback to deepen their understanding of their impact on others." },
      { title: "Refine reflection skills", description: "Suggest practices like structured journaling or peer discussions to explore behaviors and decisions more deeply." },
      { title: "Promote emotional intelligence exploration", description: "Guide them in identifying patterns in their emotional responses and refining their emotional regulation skills." },
      { title: "Balance reflection and action", description: "Support them in ensuring that self-reflection does not delay decision-making or action." },
      { title: "Provide growth opportunities", description: "Assign tasks requiring emotional intelligence, such as resolving conflicts or mentoring others, to stretch their skills." },
    ],
  },
  "Mid-High": {
    band: "Mid-High",
    title: "Proactively Self-Aware",
    characteristics: "These individuals are attuned to their emotions, regularly reflecting on their leadership style and impact. They are open to feedback and use it proactively to enhance their effectiveness but may occasionally focus too much on self-reflection.",
    actions: [
      { title: "Promote balanced reflection", description: "Help them focus reflection on actionable insights, avoiding overanalysis that could hinder decision-making." },
      { title: "Expand feedback interpretation", description: "Encourage them to seek diverse perspectives to ensure well-rounded personal growth." },
      { title: "Foster team self-awareness", description: "Guide them in empowering their team to develop self-awareness through role modeling and coaching." },
      { title: "Encourage emotional resilience", description: "Strengthen their ability to manage emotions in high-pressure or complex situations to maintain leadership effectiveness." },
      { title: "Leverage strengths in leadership", description: "Assign them to emotionally demanding tasks, such as managing conflict or guiding team development, to maximize their impact." },
    ],
  },
  High: {
    band: "High",
    title: "Deeply Self-Aware",
    characteristics: "Highly reflective and emotionally intelligent, these individuals excel at understanding their emotions and behaviors and using feedback for continuous growth. They lead with empathy and authenticity, fostering strong interpersonal relationships and trust.",
    actions: [
      { title: "Focus on action-oriented growth", description: "Encourage them to channel their insights into immediate, impactful actions, avoiding delays caused by overanalysis." },
      { title: "Strengthen team development", description: "Coach them to extend their self-awareness practices to developing others' emotional intelligence and self-reflection skills." },
      { title: "Balance self-focus with team needs", description: "Help them ensure their emphasis on personal growth does not overshadow the broader needs of their team." },
      { title: "Expand strategic self-awareness", description: "Encourage them to align their self-reflection with organizational goals, linking personal growth to team and company success." },
      { title: "Mentor others", description: "Guide them to mentor peers or junior staff, sharing their reflective practices and fostering a culture of self-awareness and empathy." },
    ],
  },
};
