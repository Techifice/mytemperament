import { TemperamentType } from '@/types/quiz';

interface TemperamentDetail {
  name: TemperamentType;
  tagline: string;
  overview: string;
  coreTraits: string[];
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  communication: string;
  relationships: string;
  workStyle: string;
  careerPaths: string[];
  businessOpportunities: string[];
  idealEnvironment: string;
  growthAreas: string[];
  compatibility: {
    friendship: string[];
    romance: string[];
    leadership: string[];
  };
  famousExamples: string[];
}

export const temperamentDetails: Record<TemperamentType, TemperamentDetail> = {
  Sanguine: {
    name: 'Sanguine',
    tagline: 'The Enthusiastic Optimist',
    overview: 'Sanguines are the life of the party - spontaneous, enthusiastic, and naturally social. They possess an infectious energy that draws people in and makes every experience feel exciting. Their optimistic outlook and ability to find joy in the moment makes them beloved by many. However, their tendency toward spontaneity can sometimes lead to disorganization and difficulty with follow-through on long-term commitments.',
    coreTraits: [
      'Highly expressive and animated',
      'Spontaneous and adaptable',
      'Optimistic and positive',
      'Social and people-oriented',
      'Creative and imaginative',
      'Fun-loving and playful'
    ],
    strengths: [
      'Natural charisma and charm',
      'Ability to energize and motivate others',
      'Creative problem-solving',
      'Excellent communication skills',
      'Resilient and quick to bounce back',
      'Ability to see opportunities in challenges',
      'Strong emotional intelligence',
      'Natural networking abilities'
    ],
    weaknesses: [
      'Difficulty with organization and planning',
      'Tendency to be impulsive',
      'May struggle with focus and follow-through',
      'Can be overly talkative',
      'May avoid difficult conversations',
      'Tendency toward disorganization',
      'May overcommit and underdeliver',
      'Can be easily distracted'
    ],
    opportunities: [
      'Leadership roles in creative industries',
      'Public speaking and entertainment',
      'Sales and marketing positions',
      'Building large networks and communities',
      'Creating engaging content and experiences',
      'Inspiring and motivating teams',
      'Innovation and brainstorming sessions'
    ],
    threats: [
      'Burnout from overcommitment',
      'Loss of credibility due to inconsistency',
      'Missing important details',
      'Isolation or feeling left out',
      'Boredom in routine environments',
      'Financial instability from impulsive decisions'
    ],
    communication: 'Sanguines communicate with enthusiasm and expressiveness. They excel at storytelling and making conversations engaging. They prefer face-to-face interaction and thrive on immediate feedback and social validation. However, they may need to work on listening more and talking less, as well as following through on commitments made in conversation.',
    relationships: 'In relationships, Sanguines are warm, affectionate, and fun-loving partners. They bring excitement and spontaneity to their connections. They have many friendships but may struggle with depth at times. They need partners who can provide some structure while appreciating their free spirit. They express love through quality time, words of affirmation, and physical touch.',
    workStyle: 'Sanguines work best in dynamic, social environments with variety and interaction. They excel in roles involving people, creativity, and flexibility. They need regular feedback and recognition to stay motivated. Routine tasks can drain their energy, so they benefit from delegating detail work and focusing on big-picture vision and relationship building.',
    careerPaths: [
      'Sales and Business Development',
      'Marketing and Advertising',
      'Entertainment and Performing Arts',
      'Public Relations',
      'Event Planning',
      'Teaching and Training',
      'Hospitality and Tourism',
      'Social Media and Content Creation',
      'Motivational Speaking',
      'Customer Relations'
    ],
    businessOpportunities: [
      'Event planning and entertainment business',
      'Social media marketing agency',
      'Personal branding consultancy',
      'Creative content production',
      'Networking and community building platforms',
      'Experience-based services (tours, workshops)',
      'Influencer and brand partnership businesses'
    ],
    idealEnvironment: 'Open, collaborative spaces with lots of social interaction. Flexible schedules with variety. Recognition and celebration culture. Creative freedom and minimal micromanagement. Opportunities for travel and new experiences.',
    growthAreas: [
      'Develop organizational systems and routines',
      'Practice active listening',
      'Learn to say no and manage commitments',
      'Build follow-through and consistency',
      'Develop financial discipline',
      'Practice mindfulness and focus',
      'Balance social time with solitude',
      'Work on depth in relationships'
    ],
    compatibility: {
      friendship: ['Other Sanguines for fun', 'Phlegmatics for balance', 'Cholerics for adventure'],
      romance: ['Phlegmatic (provides stability)', 'Choleric (adds excitement)', 'Melancholic (adds depth)'],
      leadership: ['Works well with structured Melancholics', 'Complements action-oriented Cholerics', 'Balances well with supportive Phlegmatics']
    },
    famousExamples: [
      'Robin Williams',
      'Ellen DeGeneres',
      'Will Smith',
      'Oprah Winfrey',
      'Richard Branson'
    ]
  },

  Choleric: {
    name: 'Choleric',
    tagline: 'The Bold Achiever',
    overview: 'Cholerics are natural-born leaders with an intense drive to achieve and succeed. They are decisive, confident, and goal-oriented, with an ability to see the big picture and take action immediately. Their determination and competitive nature make them excellent at overcoming obstacles and driving results. However, their intensity and directness can sometimes come across as aggressive or insensitive to others.',
    coreTraits: [
      'Strong-willed and decisive',
      'Goal-oriented and results-focused',
      'Independent and self-sufficient',
      'Direct and straightforward',
      'Confident and assertive',
      'Competitive and driven'
    ],
    strengths: [
      'Natural leadership abilities',
      'Quick decision-making skills',
      'High productivity and efficiency',
      'Ability to handle pressure well',
      'Strategic thinking',
      'Courage to take risks',
      'Strong problem-solving skills',
      'Ability to motivate and drive teams'
    ],
    weaknesses: [
      'Can be domineering or bossy',
      'May lack patience with others',
      'Tendency to be insensitive',
      'Can be overly aggressive',
      'May struggle to delegate',
      'Difficulty admitting mistakes',
      'Can be workaholic',
      'May neglect relationships for goals'
    ],
    opportunities: [
      'Executive leadership positions',
      'Entrepreneurship and business ownership',
      'High-stakes decision-making roles',
      'Turnaround and crisis management',
      'Competitive industries',
      'Strategic planning and consulting',
      'Building and scaling organizations'
    ],
    threats: [
      'Burnout from overwork',
      'Damaged relationships from insensitivity',
      'Loss of control or power',
      'Being seen as too aggressive',
      'Health issues from stress',
      'Failure or perceived weakness'
    ],
    communication: 'Cholerics communicate directly and efficiently. They value brevity and results over small talk. They speak with confidence and authority, and can be persuasive leaders. However, they need to work on softening their delivery, listening more empathetically, and considering others\' feelings in their communication style.',
    relationships: 'In relationships, Cholerics are loyal, protective, and committed partners. They take relationships seriously and are willing to work hard to make them succeed. However, they may struggle with vulnerability and emotional expression. They need partners who can stand up to them while also helping them soften and connect emotionally. They show love through acts of service and providing security.',
    workStyle: 'Cholerics excel in fast-paced, challenging environments where they can take charge and drive results. They work efficiently and expect the same from others. They thrive under pressure and enjoy competition. They need autonomy and dislike micromanagement. They work best when given clear goals and the freedom to achieve them their way.',
    careerPaths: [
      'CEO and Executive Leadership',
      'Entrepreneurship',
      'Management Consulting',
      'Investment Banking',
      'Military Leadership',
      'Law and Litigation',
      'Emergency Medicine',
      'Project Management',
      'Sales Leadership',
      'Real Estate Development'
    ],
    businessOpportunities: [
      'Start and scale high-growth companies',
      'Consulting and advisory services',
      'Real estate investment and development',
      'Competitive product/service businesses',
      'Executive coaching and leadership training',
      'Acquisition and turnaround businesses',
      'Performance-driven franchises'
    ],
    idealEnvironment: 'Fast-paced, results-driven culture. Clear hierarchy and authority. Challenging goals and competition. Merit-based recognition. Autonomy and decision-making power. Opportunities for advancement and growth.',
    growthAreas: [
      'Develop empathy and emotional intelligence',
      'Practice patience and active listening',
      'Learn to collaborate, not just lead',
      'Work on vulnerability and admitting mistakes',
      'Balance work with personal life',
      'Soften communication style',
      'Practice delegation and trust',
      'Develop stress management techniques'
    ],
    compatibility: {
      friendship: ['Sanguines for balance', 'Other Cholerics for competition', 'Phlegmatics for calm'],
      romance: ['Phlegmatic (provides calm and support)', 'Sanguine (brings fun and lightness)', 'Another Choleric (power couple but needs compromise)'],
      leadership: ['Delegates well to detail-oriented Melancholics', 'Energizes Sanguines', 'Appreciates reliable Phlegmatics']
    },
    famousExamples: [
      'Steve Jobs',
      'Margaret Thatcher',
      'Elon Musk',
      'Gordon Ramsay',
      'Vince Lombardi'
    ]
  },

  Melancholic: {
    name: 'Melancholic',
    tagline: 'The Thoughtful Perfectionist',
    overview: 'Melancholics are deep thinkers who value quality, meaning, and excellence. They are analytical, detail-oriented, and introspective, with a strong appreciation for beauty and order. Their perfectionist tendencies and high standards drive them to produce exceptional work. However, their sensitivity and tendency toward overthinking can sometimes lead to anxiety, self-criticism, and difficulty with spontaneity.',
    coreTraits: [
      'Analytical and detail-oriented',
      'Perfectionist and quality-focused',
      'Thoughtful and introspective',
      'Sensitive and empathetic',
      'Organized and methodical',
      'Idealistic and principled'
    ],
    strengths: [
      'Exceptional attention to detail',
      'High quality standards',
      'Deep analytical abilities',
      'Strong planning and organizational skills',
      'Loyalty and commitment',
      'Creativity in arts and design',
      'Ability to see potential problems',
      'Thoroughness and accuracy'
    ],
    weaknesses: [
      'Tendency toward perfectionism and procrastination',
      'Can be overly critical of self and others',
      'May struggle with change and spontaneity',
      'Prone to worry and anxiety',
      'Can be moody or withdrawn',
      'May hold grudges',
      'Tendency to overthink',
      'Can be pessimistic at times'
    ],
    opportunities: [
      'Creative and artistic pursuits',
      'Research and analysis roles',
      'Quality assurance and compliance',
      'Design and architecture',
      'Academic and scholarly work',
      'Strategic planning roles',
      'Craftsmanship and specialized skills'
    ],
    threats: [
      'Perfectionism leading to paralysis',
      'Depression or anxiety',
      'Being misunderstood or undervalued',
      'Chaos and disorganization',
      'Superficiality in culture or relationships',
      'Failure to meet own high standards'
    ],
    communication: 'Melancholics communicate thoughtfully and precisely. They prefer written communication where they can carefully craft their message. They value depth and meaning in conversations and may struggle with small talk. They need time to process before responding and appreciate when others give them space to think. They benefit from learning to be more spontaneous and less perfectionistic in communication.',
    relationships: 'In relationships, Melancholics are loyal, devoted, and deeply committed partners. They form few but very deep connections. They are sensitive to their partner\'s needs and remember important details. However, they may struggle with expressing emotions openly and can be hurt easily. They need partners who appreciate their depth and don\'t pressure them to be more social or spontaneous than feels natural.',
    workStyle: 'Melancholics work best in quiet, organized environments where they can focus deeply. They excel at tasks requiring precision, analysis, and long-term planning. They need time to research and prepare before making decisions. They prefer working independently or in small, focused teams. They are self-motivated and don\'t need much external supervision, but they do need clear expectations and standards.',
    careerPaths: [
      'Research Scientist',
      'Architect and Designer',
      'Accountant and Financial Analyst',
      'Software Engineer',
      'Writer and Editor',
      'Medical Professional',
      'Academic and Professor',
      'Artist and Musician',
      'Quality Assurance',
      'Data Analyst'
    ],
    businessOpportunities: [
      'Specialized consulting services',
      'High-quality artisan products',
      'Technical and research services',
      'Design and creative studios',
      'Educational content and courses',
      'Quality-focused service businesses',
      'Niche expertise businesses'
    ],
    idealEnvironment: 'Quiet, organized workspace. Clear processes and systems. Appreciation for quality over quantity. Time for deep work and concentration. Minimal chaos and last-minute changes. Recognition for excellence and attention to detail.',
    growthAreas: [
      'Practice self-compassion and acceptance',
      'Learn to embrace imperfection',
      'Develop flexibility and adaptability',
      'Work on spontaneity and playfulness',
      'Practice positive reframing',
      'Learn to forgive and let go',
      'Balance solitude with social connection',
      'Manage anxiety and overthinking'
    ],
    compatibility: {
      friendship: ['Phlegmatics for understanding', 'Other Melancholics for depth', 'Sanguines for balance and fun'],
      romance: ['Phlegmatic (provides acceptance and calm)', 'Another Melancholic (deep connection)', 'Choleric (provides direction and motivation)'],
      leadership: ['Values structured Choleric leadership', 'Appreciates dependable Phlegmatics', 'Can balance out spontaneous Sanguines']
    },
    famousExamples: [
      'Vincent van Gogh',
      'Marie Curie',
      'Abraham Lincoln',
      'Ludwig van Beethoven',
      'Emily Dickinson'
    ]
  },

  Phlegmatic: {
    name: 'Phlegmatic',
    tagline: 'The Peaceful Mediator',
    overview: 'Phlegmatics are calm, steady, and reliable individuals who bring peace and stability wherever they go. They are natural mediators with an ability to see all sides of a situation and help others find common ground. Their easy-going nature and diplomatic approach make them excellent team players and trusted friends. However, their aversion to conflict and change can sometimes lead to passivity and resistance to taking initiative.',
    coreTraits: [
      'Calm and even-tempered',
      'Patient and tolerant',
      'Diplomatic and peace-loving',
      'Loyal and dependable',
      'Observant and thoughtful',
      'Easy-going and flexible'
    ],
    strengths: [
      'Excellent listening skills',
      'Ability to mediate conflicts',
      'Reliability and consistency',
      'Patience with people and processes',
      'Emotional stability',
      'Team-oriented mindset',
      'Acceptance of others',
      'Calm under pressure'
    ],
    weaknesses: [
      'Tendency toward passivity',
      'May avoid confrontation too much',
      'Can be indecisive',
      'May lack motivation or ambition',
      'Resistance to change',
      'Tendency to procrastinate',
      'May be too accommodating',
      'Can appear uninvolved or apathetic'
    ],
    opportunities: [
      'Counseling and mediation roles',
      'Human resources and support functions',
      'Customer service excellence',
      'Team coordination and collaboration',
      'Steady, long-term career growth',
      'Building lasting relationships',
      'Creating harmonious environments'
    ],
    threats: [
      'Being taken advantage of',
      'Missing opportunities due to passivity',
      'Conflict and confrontation',
      'Rapid, chaotic change',
      'High-pressure, competitive environments',
      'Being overlooked or undervalued'
    ],
    communication: 'Phlegmatics communicate in a calm, gentle, and diplomatic manner. They are excellent listeners and make others feel heard and understood. They prefer indirect communication and may struggle with being direct or assertive. They excel at finding common ground and de-escalating tense situations. They benefit from learning to express their own needs and opinions more clearly.',
    relationships: 'In relationships, Phlegmatics are loyal, supportive, and steady partners. They provide a calming presence and emotional stability. They are accepting and non-judgmental, making others feel comfortable. However, they may struggle with initiating activities or expressing their own needs. They need partners who appreciate their steadiness while gently encouraging them to step out of their comfort zone.',
    workStyle: 'Phlegmatics work best in stable, harmonious environments with clear expectations. They excel at routine tasks and maintaining consistent quality. They are reliable team members who work well with others. They don\'t need a lot of external motivation but benefit from gentle encouragement and appreciation. They prefer gradual change over sudden shifts.',
    careerPaths: [
      'Counselor and Therapist',
      'Social Worker',
      'Teacher and Educator',
      'Nurse and Healthcare Support',
      'Human Resources',
      'Customer Service',
      'Administrative Roles',
      'Librarian',
      'Mediator',
      'Veterinarian'
    ],
    businessOpportunities: [
      'Counseling and coaching services',
      'Conflict resolution consulting',
      'Customer support services',
      'Community building platforms',
      'Wellness and relaxation services',
      'Long-term care and support businesses',
      'Team building and facilitation services'
    ],
    idealEnvironment: 'Peaceful, stable workspace. Collaborative team culture. Clear roles and expectations. Appreciation for reliability. Minimal conflict and drama. Gradual change with advance notice. Supportive leadership.',
    growthAreas: [
      'Develop assertiveness and self-advocacy',
      'Practice taking initiative',
      'Work on decision-making skills',
      'Learn to embrace change',
      'Set and pursue personal goals',
      'Express opinions and preferences',
      'Balance others\' needs with own needs',
      'Develop healthy boundaries'
    ],
    compatibility: {
      friendship: ['All types appreciate their calm nature', 'Sanguines bring energy', 'Melancholics provide depth', 'Cholerics provide direction'],
      romance: ['Choleric (provides direction and motivation)', 'Sanguine (brings fun and energy)', 'Melancholic (shares depth and loyalty)'],
      leadership: ['Balances intense Choleric leaders', 'Grounds energetic Sanguines', 'Supports perfectionist Melancholics']
    },
    famousExamples: [
      'Mr. Rogers',
      'Jimmy Carter',
      'Michael J. Fox',
      'Keanu Reeves',
      'Gandhi'
    ]
  }
};
