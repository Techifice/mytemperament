/**
 * Application constants
 */

export const APP_CONFIG = {
  name: 'MyTemperament',
  description: 'Discover your unique temperament profile through our comprehensive assessment',
  url: 'https://mytemperament.vercel.app',
} as const;

export const QUIZ_CONFIG = {
  totalQuestions: 30,
  minQuestionsRequired: 25,
  autoSaveInterval: 30000, // 30 seconds
} as const;

export const STORAGE_KEYS = {
  quizResults: 'quizResults',
  quizProgress: 'quizProgress',
  quizSubmitted: 'quizSubmitted',
  submittedEmail: 'submittedEmail',
  quizAnswers: 'quizAnswers',
  lastSaveTime: 'lastSaveTime',
} as const;

export const API_CONFIG = {
  retryAttempts: 3,
  retryDelay: 1000,
  requestTimeout: 30000,
} as const;

export const ROUTES = {
  home: '/',
  quiz: '/quiz',
  results: '/results',
  detailedReport: '/detailed-report',
  adminLogin: '/admin/login',
  adminDashboard: '/admin/dashboard',
} as const;

export const ADMIN_EMAILS = [
  'admin@gmail.com',
] as const;
