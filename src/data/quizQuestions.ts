import { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  // EMOTIONAL RESPONSE (Questions 1-5)
  {
    id: 1,
    domain: 'emotional',
    question: 'When facing a stressful situation, how do you typically respond?',
    type: 'multiple-choice',
    options: [
      'I stay optimistic and look for the fun side',
      'I take charge and solve it immediately',
      'I analyze it deeply and worry about outcomes',
      'I remain calm and take my time'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 2,
    domain: 'emotional',
    question: 'How would you describe your emotional expression?',
    type: 'multiple-choice',
    options: [
      'Very expressive and enthusiastic',
      'Direct and intense',
      'Reserved and thoughtful',
      'Steady and consistent'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 3,
    domain: 'emotional',
    question: 'When someone criticizes you, you typically:',
    type: 'multiple-choice',
    options: [
      'Laugh it off and move on quickly',
      'Get defensive and argue your point',
      'Take it personally and reflect deeply',
      'Listen calmly without strong reaction'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 4,
    domain: 'emotional',
    question: 'Rate your emotional intensity level (1=Very calm, 5=Very intense)',
    type: 'slider',
    weights: {
      Sanguine: [1, 2, 3, 2, 1],
      Choleric: [0, 1, 2, 3, 3],
      Melancholic: [1, 2, 3, 2, 1],
      Phlegmatic: [3, 3, 2, 1, 0]
    }
  },
  {
    id: 5,
    domain: 'emotional',
    question: 'How long does it take you to bounce back from disappointment?',
    type: 'multiple-choice',
    options: [
      'Very quickly, I move on fast',
      'Quickly after I take action',
      'It takes time, I process deeply',
      'Slowly but steadily'
    ],
    weights: {
      Sanguine: [3, 1, 0, 0],
      Choleric: [1, 3, 0, 0],
      Melancholic: [0, 0, 3, 1],
      Phlegmatic: [0, 0, 1, 3]
    }
  },

  // SOCIAL INTERACTION (Questions 6-10)
  {
    id: 6,
    domain: 'social',
    question: 'At social gatherings, you prefer to:',
    type: 'multiple-choice',
    options: [
      'Mingle with everyone and be the life of the party',
      'Network strategically and lead conversations',
      'Have deep one-on-one conversations',
      'Observe and engage selectively'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 7,
    domain: 'social',
    question: 'How do you prefer to communicate important information?',
    type: 'multiple-choice',
    options: [
      'Face-to-face with enthusiasm',
      'Directly and quickly',
      'In writing with all details',
      'Gently and diplomatically'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 8,
    domain: 'social',
    question: 'Rate your need for social interaction (1=Minimal, 5=Constant)',
    type: 'slider',
    weights: {
      Sanguine: [0, 1, 2, 3, 3],
      Choleric: [1, 2, 3, 2, 1],
      Melancholic: [2, 3, 2, 1, 0],
      Phlegmatic: [2, 3, 2, 1, 0]
    }
  },
  {
    id: 9,
    domain: 'social',
    question: 'In group settings, you naturally:',
    type: 'multiple-choice',
    options: [
      'Entertain and energize others',
      'Take charge and direct activities',
      'Contribute thoughtful insights',
      'Support and maintain harmony'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 10,
    domain: 'social',
    question: 'Your friendship style is best described as:',
    type: 'multiple-choice',
    options: [
      'Many casual, fun friendships',
      'Strategic, goal-oriented connections',
      'Few but very deep relationships',
      'Loyal, steady, long-term bonds'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },

  // WORK HABITS (Questions 11-15)
  {
    id: 11,
    domain: 'work',
    question: 'Your approach to starting a new project:',
    type: 'multiple-choice',
    options: [
      'Jump in with excitement and figure it out',
      'Set clear goals and execute immediately',
      'Plan meticulously before starting',
      'Start slowly and build momentum'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 12,
    domain: 'work',
    question: 'Rate your attention to detail (1=Big picture only, 5=Extreme detail)',
    type: 'slider',
    weights: {
      Sanguine: [3, 2, 1, 0, 0],
      Choleric: [2, 3, 2, 1, 0],
      Melancholic: [0, 0, 1, 2, 3],
      Phlegmatic: [1, 2, 3, 2, 1]
    }
  },
  {
    id: 13,
    domain: 'work',
    question: 'When working on a team project, you typically:',
    type: 'multiple-choice',
    options: [
      'Bring energy and creative ideas',
      'Take the lead and drive results',
      'Ensure quality and accuracy',
      'Mediate conflicts and support others'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 14,
    domain: 'work',
    question: 'Your work environment preference:',
    type: 'multiple-choice',
    options: [
      'Dynamic, social, lots of interaction',
      'Fast-paced, challenging, competitive',
      'Quiet, organized, focused',
      'Stable, peaceful, predictable'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 15,
    domain: 'work',
    question: 'How do you handle deadlines?',
    type: 'multiple-choice',
    options: [
      'Last-minute rush with creative bursts',
      'Meet them early through efficiency',
      'Work steadily with buffer time',
      'Pace myself consistently'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },

  // MOTIVATION & FEARS (Questions 16-20)
  {
    id: 16,
    domain: 'motivation',
    question: 'What motivates you most?',
    type: 'multiple-choice',
    options: [
      'Fun, excitement, and recognition',
      'Achievement, control, and success',
      'Perfection, meaning, and depth',
      'Peace, stability, and harmony'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 17,
    domain: 'motivation',
    question: 'Your biggest fear is:',
    type: 'multiple-choice',
    options: [
      'Being bored or left out',
      'Losing control or failing',
      'Being flawed or misunderstood',
      'Conflict or disruption'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 18,
    domain: 'motivation',
    question: 'Rate your competitive drive (1=Not competitive, 5=Highly competitive)',
    type: 'slider',
    weights: {
      Sanguine: [1, 2, 2, 2, 1],
      Choleric: [0, 0, 1, 2, 3],
      Melancholic: [2, 2, 2, 1, 0],
      Phlegmatic: [3, 2, 1, 0, 0]
    }
  },
  {
    id: 19,
    domain: 'motivation',
    question: 'You feel most fulfilled when:',
    type: 'multiple-choice',
    options: [
      'Making people happy and having fun',
      'Accomplishing goals and leading',
      'Creating something meaningful',
      'Helping others and maintaining peace'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 20,
    domain: 'motivation',
    question: 'Your approach to personal growth:',
    type: 'multiple-choice',
    options: [
      'Try new things spontaneously',
      'Set ambitious goals and crush them',
      'Reflect deeply and improve systematically',
      'Grow gradually and naturally'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },

  // COGNITIVE STYLE (Questions 21-25)
  {
    id: 21,
    domain: 'cognitive',
    question: 'Your decision-making style:',
    type: 'multiple-choice',
    options: [
      'Quick, intuitive, feeling-based',
      'Fast, logical, results-focused',
      'Slow, analytical, data-driven',
      'Deliberate, balanced, consensus-seeking'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 22,
    domain: 'cognitive',
    question: 'When learning something new, you prefer:',
    type: 'multiple-choice',
    options: [
      'Interactive, hands-on experiences',
      'Direct instruction and quick application',
      'Thorough study and understanding',
      'Step-by-step guidance'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 23,
    domain: 'cognitive',
    question: 'Rate your organizational tendency (1=Very spontaneous, 5=Highly structured)',
    type: 'slider',
    weights: {
      Sanguine: [3, 2, 1, 0, 0],
      Choleric: [0, 1, 2, 3, 2],
      Melancholic: [0, 0, 1, 2, 3],
      Phlegmatic: [1, 2, 3, 2, 1]
    }
  },
  {
    id: 24,
    domain: 'cognitive',
    question: 'Your problem-solving approach:',
    type: 'multiple-choice',
    options: [
      'Brainstorm creatively with others',
      'Act decisively and adjust as needed',
      'Research thoroughly and plan carefully',
      'Consider all perspectives calmly'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 25,
    domain: 'cognitive',
    question: 'How do you handle multiple tasks?',
    type: 'multiple-choice',
    options: [
      'Jump between them excitedly',
      'Prioritize and execute efficiently',
      'Focus on one at a time perfectly',
      'Work through them steadily'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },

  // LIFESTYLE PREFERENCES (Questions 26-30)
  {
    id: 26,
    domain: 'lifestyle',
    question: 'Your ideal weekend activity:',
    type: 'multiple-choice',
    options: [
      'Spontaneous adventures with friends',
      'Competitive sports or challenges',
      'Creative projects or cultural events',
      'Relaxing at home or quiet nature'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 27,
    domain: 'lifestyle',
    question: 'Rate your need for variety and change (1=Prefer routine, 5=Need constant change)',
    type: 'slider',
    weights: {
      Sanguine: [0, 0, 1, 2, 3],
      Choleric: [0, 1, 2, 3, 2],
      Melancholic: [2, 3, 2, 1, 0],
      Phlegmatic: [3, 3, 2, 1, 0]
    }
  },
  {
    id: 28,
    domain: 'lifestyle',
    question: 'Your approach to health and fitness:',
    type: 'multiple-choice',
    options: [
      'Fun group activities and variety',
      'Intense workouts with clear goals',
      'Planned, consistent routines',
      'Gentle, sustainable practices'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 29,
    domain: 'lifestyle',
    question: 'How do you manage your personal space?',
    type: 'multiple-choice',
    options: [
      'Colorful and cluttered with memories',
      'Functional and efficient',
      'Organized and aesthetically pleasing',
      'Comfortable and cozy'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  },
  {
    id: 30,
    domain: 'lifestyle',
    question: 'Your relationship with time and schedules:',
    type: 'multiple-choice',
    options: [
      'Flexible, often running late',
      'Punctual and efficient',
      'Early and well-prepared',
      'Easy-going but reliable'
    ],
    weights: {
      Sanguine: [3, 0, 0, 0],
      Choleric: [0, 3, 0, 0],
      Melancholic: [0, 0, 3, 0],
      Phlegmatic: [0, 0, 0, 3]
    }
  }
];
