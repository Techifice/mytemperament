import { QuizAnswer, QuizResult, TemperamentScore, TemperamentType } from '@/types/quiz';
import { quizQuestions } from '@/data/quizQuestions';

export function calculateResults(answers: QuizAnswer[]): QuizResult {
  const scores: Record<TemperamentType, number> = {
    Sanguine: 0,
    Choleric: 0,
    Melancholic: 0,
    Phlegmatic: 0
  };

  answers.forEach(answer => {
    const question = quizQuestions.find(q => q.id === answer.questionId);
    if (!question) return;

    const answerValue = Array.isArray(answer.answer) ? answer.answer[0] : answer.answer;
    
    Object.keys(scores).forEach(type => {
      const temperament = type as TemperamentType;
      const weight = question.weights[temperament][answerValue];
      scores[temperament] += weight;
    });
  });

  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  const temperamentScores: TemperamentScore[] = Object.entries(scores)
    .map(([type, score]) => ({
      type: type as TemperamentType,
      score,
      percentage: Math.round((score / totalScore) * 100)
    }))
    .sort((a, b) => b.score - a.score);

  return {
    primary: temperamentScores[0].type,
    secondary: temperamentScores[1].type,
    scores: temperamentScores,
    answers,
    completedAt: new Date().toISOString()
  };
}

export function getTemperamentDescription(type: TemperamentType): string {
  const descriptions: Record<TemperamentType, string> = {
    Sanguine: 'You are naturally enthusiastic, social, and optimistic. You thrive in dynamic environments and bring energy to every interaction.',
    Choleric: 'You are goal-oriented, decisive, and natural leader. You excel at taking charge and driving results with confidence.',
    Melancholic: 'You are thoughtful, analytical, and detail-oriented. You value depth, meaning, and excellence in everything you do.',
    Phlegmatic: 'You are calm, reliable, and diplomatic. You bring stability and harmony wherever you go.'
  };
  return descriptions[type];
}
