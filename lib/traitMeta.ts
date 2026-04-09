import type { TraitMeta, OldTraitMeta } from "@/types";

export const TRAITS: TraitMeta[] = [
  {
    key: "EP",
    oldName: "Enterprising Potential",
    oldCode: "EP",
    newName: "Exploration Quotient",
    newCode: "ExQ",
    scaleMin: -20,
    scaleMax: 80,
    leftLabel: "Proactive",
    rightLabel: "Responsive",
    overview: "The Entrepreneur Scale evaluates an individual's capacity for assertiveness and influence in guiding others. Ability to navigate fast-paced and unstructured environments effectively. Leadership potential in roles requiring adaptive decision-making and strategic direction. Comfort with ambiguity and focus on long-term objectives.\n\nOn the Right Side of the Scale: Highly proactive, assertive leaders who take initiative and drive tasks forward. Strong ability to navigate ambiguity and maintain focus amidst uncertainty. Goal-driven mindset with resilience and determination to achieve objectives. Effective at leading teams through complex and challenging situations. Demonstrates high adaptability in fast-paced, dynamic environments.\n\nOn the Left Side of the Scale: More reactive and process-oriented, relying on established structures for guidance. Limited comfort with ambiguity, preferring clear and predictable environments. May struggle with self-management and proactive leadership in unstructured settings. Likely to need external support or supervision to navigate challenges.\n\nThis Scale Provides Insights Into: An individual's leadership potential and ability to influence others. Their effectiveness in dynamic, high-pressure environments. Propensity for proactive decision-making and strategic thinking. Comfort with ambiguity and capacity to maintain focus on long-term goals. Alignment with roles requiring autonomy, initiative, and adaptability.",
    mainDescriptors: ["Self-management", "Locus of control", "Risk-taking behavior", "Assertiveness", "Autonomy", "Goal-oriented", "Structure creation", "Proactivity", "Ambiguity tolerance", "Resilience", "Task focus", "Commission sales success", "Sales process control", "Strong-minded"],
  },
  {
    key: "AP",
    oldName: "Achievement Potential",
    oldCode: "AP",
    newName: "Drive Quotient",
    newCode: "DrQ",
    scaleMin: -40,
    scaleMax: 50,
    leftLabel: "Money and/or Challenge",
    rightLabel: "Safety and Security",
    overview: "The AP Scale evaluates: Drive to take charge and pursue goals. Ambition, competitiveness, urgency, and persistence. Ability to face challenges and seize opportunities for growth.\n\nOn the Right Side of the Scale: Are proactive, results-oriented, and thrive in fast-paced environments. Exhibit high energy, enthusiasm, and a restless pursuit of achievement. Act as instigators, pushing projects forward with a bold, decisive attitude. Display a strong sense of urgency, competitiveness, and focus on achieving objectives. Excel in roles requiring quick decision-making, assertiveness, and bottom-line results (e.g., commission-based sales or business development).\n\nOn the Left Side of the Scale: Adopt a cautious approach, prioritizing mistake avoidance over risk-taking. Demonstrate careful and deliberate decision-making but may struggle to fully commit to high-stakes endeavors. May be less likely to engage with fast-paced, high-pressure environments.\n\nThis Scale Provides Insights Into: An individual's ambition, persistence, and energy levels. Their likelihood of success in environments requiring adaptability, drive, and quick results.",
    mainDescriptors: ["Impatience", "Energy level", "Charge", "Enthusiasm", "Eagerness", "Competition", "Bottom-line focus", "Decision pace", "Closing style", "Drive for results"],
  },
  {
    key: "IP",
    oldName: "Independence Potential",
    oldCode: "IP",
    newName: "Autonomy Quotient",
    newCode: "AQ",
    scaleMin: -40,
    scaleMax: 50,
    leftLabel: "Very Independent",
    rightLabel: "Very Team-Oriented",
    overview: "The Independence Scale Evaluates: The degree to which an individual operates independently versus dependently in a work environment. How independence or dependence affects team dynamics, adaptability, decision-making, and adherence to rules. Preferences for autonomous decision-making versus collaborative, consensus-driven approaches.\n\nOn the Right Side of the Scale: Strongly self-reliant, comfortable making decisions autonomously. Adaptable in dynamic and changing environments. Prefers freedom to chart their own course, sometimes challenging established rules for better outcomes. Operates effectively in a team but prioritizes autonomy and self-direction. Thrives in roles requiring independent thinking and minimal supervision.\n\nOn the Left Side of the Scale: More dependent on clear rules and external guidance to structure work. Prefers collaborative environments, seeking input and consensus before decisions. Values a team-oriented approach, focusing on shared goals and direction. Resists working independently, feeling more secure with external support and defined processes. Performs best in roles with clear expectations and strong leadership direction.\n\nThis Scale Provides Insights Into: An individual's preference for autonomy versus collaboration in the workplace. Their ability to adapt to dynamic or structured environments. Likelihood of challenging or adhering to established rules and processes. Fit for roles requiring independent decision-making versus team-driven approaches. Balance between self-direction and responsiveness to external input.",
    mainDescriptors: ["Level of Independence", "Self-reliance", "Autonomy", "Decision-making", "Structure", "Affiliation", "Rules adherence", "Self-direction"],
  },
  {
    key: "PO",
    oldName: "People Orientation",
    oldCode: "PO",
    newName: "Social Quotient",
    newCode: "SQ",
    scaleMin: -40,
    scaleMax: 30,
    leftLabel: "Outgoing / Personable",
    rightLabel: "Builds relationships gradually",
    overview: "The Social Scale Evaluates: An individual's approach to building relationships and their preferred communication style. How motivated and energized they are by engaging with others in social settings. Their relationship-building style and its impact on interactions with clients, colleagues, and teams. Fit for roles that emphasize the \"people\" side of business, such as networking, collaboration, or client-facing positions.\n\nOn the Right Side of the Scale (Highly Approachable): Outgoing, enthusiastic networkers who thrive on making new connections. Motivated by frequent social interactions and energized by engaging with others. Naturally approachable, friendly, and charismatic in their communication style. Excel in roles requiring frequent interaction, relationship-building, and communication. Quickly forge strong connections, often using their sociable nature to influence and inspire.\n\nOn the Left Side of the Scale (Highly Reserved and Independent): Prefer to build relationships slowly and cautiously, focusing on depth and trust. Communication style is more deliberate and thoughtful, emphasizing quality over quantity. May initially appear reserved or distant but develop meaningful connections over time. Less inclined toward frequent socializing or prospecting but excel at building long-term, trust-based relationships. Thrive in roles that require careful, strategic interactions rather than constant networking.\n\nThe Scale Provides Insights Into: An individual's preferred social and communication style and their adaptability in different environments. How effectively they engage with clients, colleagues, and teams. Their fit for roles that emphasize frequent interaction versus those that value strategic, deliberate relationship-building. Potential strengths in building either broad networks or deep, trust-based relationships over time. The impact of their social tendencies on workplace dynamics, team collaboration, and client relationships.",
    mainDescriptors: ["Relationship-building", "Communication style", "Interaction-focused", "Adaptability", "People-oriented", "Trust-based", "Networking-oriented", "Collaboration-driven", "Connection-focused"],
  },
  {
    key: "INV_AO",
    oldName: "Analytical Orientation",
    oldCode: "INV/AO",
    newName: "Reasoning Quotient",
    newCode: "RQ",
    scaleMin: -30,
    scaleMax: 30,
    leftLabel: "Highly analytical",
    rightLabel: "Learns only what is necessary",
    overview: "The Knowledge Scale Evaluates: An individual's approach to information processing and learning. Motivation to acquire knowledge in professional environments. Depth of engagement with educational opportunities and learning resources. How effectively they manage and utilize information to enhance performance.\n\nOn the Right Side of the Scale: Highly motivated to acquire and apply knowledge to improve performance. Deeply engaged in learning opportunities, often seeking to expand expertise and understanding. Effective at processing, organizing, and utilizing complex information in decision-making. Thrive in roles requiring intellectual curiosity, problem-solving, and continuous learning. Use knowledge to gain control and influence in professional interactions.\n\nOn the Left Side of the Scale: Less inclined to seek out or engage deeply with learning opportunities. Tend to rely on established knowledge and routines rather than pursuing new information. May struggle with managing or utilizing complex information effectively. Prefer roles that require practical application of existing knowledge rather than intellectual exploration. Focus on stability and consistency over acquiring additional expertise.\n\nThe Scale Provides Insights Into: An individual's learning style and their motivation to acquire and apply new knowledge. Their relationship with information and how they use it to enhance performance. Fit for roles requiring intellectual curiosity, adaptability, and information-driven decision-making. The degree to which knowledge acquisition influences their control and effectiveness in professional interactions. Their potential to thrive in learning-intensive environments versus stability-focused roles.",
    mainDescriptors: ["Inquisitive", "Curious", "Knowledge-seeking", "Intellectual", "Analytical", "Innovative", "Engaged", "Resourceful", "Information-driven"],
  },
  {
    key: "CWC",
    oldName: "Comfort With Conflict",
    oldCode: "CWC",
    newName: "Conflict Quotient",
    newCode: "CQ",
    scaleMin: -40,
    scaleMax: 50,
    leftLabel: "Comfortable with conflict",
    rightLabel: "Avoids Conflict",
    overview: "The Conflict Scale Evaluates: An individual's comfort level with conflict and confrontation. Their assertiveness in communication and willingness to address challenges. How they perceive conflict — as an opportunity or a problem. Their approach to balancing harmony with accountability.\n\nOn the Right Side of the Scale: Comfortable with conflict, assertive in communication, and confident in challenging situations. Views conflict as an opportunity to improve outcomes and drive accountability. Does not shy away from difficult conversations and addresses issues directly. Takes charge in conflict situations, though may sometimes rely too much on directiveness.\n\nOn the Left Side of the Scale: Uncomfortable with conflict, preferring to avoid confrontation and maintain harmony. Communication tends to be passive and accommodating. Values consensus and agreement over challenge and accountability. May struggle to address underperformance or hold people accountable.\n\nThis Scale Provides Insights Into: An individual's ability to navigate conflict effectively. Their approach to assertive communication and accountability. Fit for roles requiring tough conversations, negotiations, or change management. The balance between their desire for harmony and their willingness to confront challenges.",
    mainDescriptors: ["Assertiveness", "Conflict comfort", "Directness", "Confrontation style", "Accountability", "Communication style", "Negotiation", "Challenge vs. harmony"],
  },
  {
    key: "EQ",
    oldName: "Emotional Quotient",
    oldCode: "EQ",
    newName: "Emotional Regulation Quotient",
    newCode: "ERQ",
    scaleMin: 40,
    scaleMax: 90,
    leftLabel: "High emotional awareness",
    rightLabel: "Reliance on non-emotional info",
    overview: "The Emotional Regulation Scale Evaluates: An individual's ability to manage their emotions effectively under varying levels of pressure. Their capacity to maintain composure and make rational decisions during stressful situations. The degree to which they use emotional information versus factual, logical information. Self-awareness and awareness of others' emotions.\n\nOn the Right Side of the Scale: Excels at managing emotions, even in highly stressful situations. Maintains composure and uses advanced techniques to remain centered. Responds thoughtfully rather than reactively. Inspires confidence through emotional stability and consistent behavior.\n\nOn the Left Side of the Scale: Struggles to manage emotions under pressure. Reacts impulsively or overreacts in challenging situations. Lacks consistent coping strategies for stress. May exhibit frustration, anxiety, or emotional volatility that impacts decision-making.\n\nThis Scale Provides Insights Into: An individual's emotional regulation capabilities and their impact on leadership. Their ability to model composure and resilience for their teams. Fit for roles requiring emotional stability under pressure. The degree to which they are self-aware and aware of others' emotional states.",
    mainDescriptors: ["Emotional control", "Stress management", "Composure", "Self-awareness", "Empathy", "Resilience", "Impulse control", "Emotional intelligence"],
  },
];

// ───── Old profile metadata (TRAIT_MAPPING) ─────
// sections are ordered high→low; section matches when rawScore >= section.rangeEnd

export const OLD_TRAIT_META: Record<string, OldTraitMeta> = {
  EP: {
    description: "Self Management",
    measures: [
      "Predicts degree to be proactive, take initiative and be competitive.",
      "Predicts a person's preferred style to plan, organize and monitor their own results and need for feedback.",
      "Predicts the degree to which a person is comfortable dealing with unstructured environments, ambiguity and uncertainty.",
    ],
    sections: [
      {
        rangeStart: 80,
        rangeEnd: 45,
        title: "ENTERPRISING, STRONGLY SELF MANAGED",
        characteristics: [
          "Like to take control & initiate",
          "Competitive",
          "Actively seek new opportunities",
        ],
      },
      {
        rangeStart: 45,
        rangeEnd: 15,
        title: "PRO-ACTIVE",
        characteristics: ["Balance between responsive process oriented & proactive"],
      },
      {
        rangeStart: 15,
        rangeEnd: -30,
        title: "RESPONSIVE SYSTEM/PROCESS ORIENTED",
        characteristics: [
          "Enjoys a well-established consistent process",
          "Does not like ambiguity",
        ],
      },
    ],
  },

  AP: {
    measures: [
      "Predicts sense of urgency when focused on goals.",
      "Predicts motivation pattern – Safety/Security, People/Service/Challenge/$.",
      "Predicts comfort in pressing for results.",
    ],
    sections: [
      {
        rangeStart: 50,
        rangeEnd: 17,
        title: "$/CHALLENGE MOTIVATION",
        characteristics: [
          "High Urgency/Impatient",
          "Short term & intensive",
          "Results & Goals Focus",
        ],
      },
      {
        rangeStart: 17,
        rangeEnd: -15,
        title: "PEOPLE/SERVICE MOTIVATION",
        characteristics: [
          "Uses persuasion and persistence",
          "Balance challenge and building relationships",
        ],
      },
      {
        rangeStart: -15,
        rangeEnd: -40,
        title: "SAFETY/SECURITY MOTIVATION",
        characteristics: [
          "Long Term Focus, Relaxed",
          "Focus on building relationships with team",
        ],
      },
    ],
  },

  IP: {
    description: "Team Orientation",
    measures: [
      "Predicts Leadership Style – GM, Coach, Captain.",
      "Predicts preference for structure and systems, and relationship to rules.",
      "Predicts the degree to which someone needs affiliation in the workplace.",
      "Predicts approach to learning and feedback.",
    ],
    sections: [
      {
        rangeStart: 50,
        rangeEnd: 20,
        title: "Highly Independent",
        characteristics: [
          "General Manager",
          "Minimal feedback",
          "Conditional Teamwork",
          "Low on Coaching",
          "Breaks Rules",
        ],
      },
      {
        rangeStart: 20,
        rangeEnd: -15,
        title: "Independent Oriented",
        characteristics: [
          "Leader-Coach",
          "Balance – working independently vs. being part of a team.",
          "Comfort giving/receiving feedback",
          "Adapts Rules",
        ],
      },
      {
        rangeStart: -15,
        rangeEnd: -40,
        title: "Dependent on Team",
        characteristics: [
          "Team Captain",
          "Enjoys Team",
          "Likes Systems",
          "Interdependent/Dependent",
          "Follows Rules",
        ],
      },
    ],
  },

  PO: {
    description: "Approach To New Relationships",
    measures: [
      "Approach style.",
      "Relationship motivations.",
      "Comfort in meeting new people.",
      "Approach to mentoring.",
    ],
    sections: [
      {
        rangeStart: 50,
        rangeEnd: 15,
        title: "Very Outgoing",
        characteristics: [
          "Extroverted & Sociable",
          "Builds new relationships quickly",
          "Enjoys meeting new people",
        ],
      },
      {
        rangeStart: 15,
        rangeEnd: -5,
        title: "Sociable",
        characteristics: [
          "Friendly",
          "Comfortable meeting new people",
          "Engaging but some might be out of their comfort zone",
          "Will do what it takes even if not natural",
        ],
      },
      {
        rangeStart: -5,
        rangeEnd: -40,
        title: "TAKE TIME TO BUILD RELATIONSHIPS",
        characteristics: [
          "Quiet",
          "Introverted",
          "Not comfortable meeting new people",
          "Focus on facts not people",
        ],
      },
    ],
  },

  CWC: {
    description: "Challenge vs. Being Challenged",
    measures: [
      "Predicts degree to which a person asserts him or herself when faced with conflict.",
      "Predicts degree to which a person will acquiesce.",
      "Predicts the way a person sees conflict – opportunity or problem.",
    ],
    sections: [
      {
        rangeStart: 50,
        rangeEnd: 17,
        title: "Very Comfortable With Conflict",
        characteristics: [
          "Assertive",
          "Might be too at ease with conflict",
        ],
      },
      {
        rangeStart: 17,
        rangeEnd: -10,
        title: "Somewhat Comfortable",
        characteristics: [
          "More likely to resolve situations with minimal conflict",
          "Successful with strategies",
        ],
      },
      {
        rangeStart: -10,
        rangeEnd: -40,
        title: "Avoid Conflict/Acquiesce",
        characteristics: [
          "Agreeable",
          "Not comfortable",
          "Conflict is stressful",
        ],
      },
    ],
  },

  INV_AO: {
    description: "Learning & Data Processing",
    measures: [
      "Technical orientation.",
      "Analytical orientation and approach to learning.",
      "The way a person communicates and transfers knowledge.",
    ],
    sections: [
      {
        rangeStart: 30,
        rangeEnd: 10,
        title: "Very Analytical",
        characteristics: [
          "Analytical, technical",
          "Systematic and detailed",
          "Enjoys learning for learning",
        ],
      },
      {
        rangeStart: 10,
        rangeEnd: -10,
        title: "MODERATE DETAIL ORIENTATION",
        characteristics: [
          "Interest in learning",
          "Balanced analytical",
          "Will learn what is essential to job",
        ],
      },
      {
        rangeStart: -10,
        rangeEnd: -30,
        title: "Only Learns Essentials",
        characteristics: [
          "Not attentive to details",
          "Learning conditional",
          "Learns only what is relevant/where there is a passion",
        ],
      },
    ],
  },

  EQ: {
    description: "Awareness of Self and Others",
    measures: [
      "The degree to which a person understands and uses emotional information or factual logical information.",
      "The degree to which a person is self aware and aware of others.",
      "The degree to which a person is flexible as it relates to their preferences.",
    ],
    sections: [
      {
        rangeStart: 90,
        rangeEnd: 70,
        title: "HIGH EQ",
        characteristics: [
          "Able to identify and understand own and others' emotions",
          "Uses emotional information",
        ],
      },
      {
        rangeStart: 70,
        rangeEnd: 55,
        title: "Average EQ",
        characteristics: [
          "Areas where coaching would help to acknowledge personal and external emotional cues",
        ],
      },
      {
        rangeStart: 55,
        rangeEnd: 40,
        title: "Low EQ",
        characteristics: [
          "Reliance on non emotional information",
          "Low level of awareness",
          "Does not use emotional cues",
        ],
      },
    ],
  },
};
