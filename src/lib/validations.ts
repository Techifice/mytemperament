/**
 * Zod validation schemas for forms and data
 */

import { z } from 'zod';

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address')
  .max(255, 'Email is too long');

export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name is too long')
  .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes');

export const submissionFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
});

export type SubmissionFormData = z.infer<typeof submissionFormSchema>;

export const adminLoginSchema = z.object({
  email: emailSchema,
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password is too long'),
});

export type AdminLoginData = z.infer<typeof adminLoginSchema>;

// Validate quiz answer
export const quizAnswerSchema = z.object({
  questionId: z.number().int().positive(),
  answer: z.union([
    z.number().int().min(0).max(4),
    z.array(z.number().int().min(0).max(4)),
  ]),
});

export const quizAnswersSchema = z.array(quizAnswerSchema);

export type ValidatedQuizAnswer = z.infer<typeof quizAnswerSchema>;
