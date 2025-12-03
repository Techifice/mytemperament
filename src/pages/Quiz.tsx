import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { QuestionCard } from '@/components/QuestionCard';
import { ProgressBar } from '@/components/ProgressBar';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizAnswer } from '@/types/quiz';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calculateResults } from '@/utils/scoring';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestionIndex]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  const handleAnswer = (answer: number) => {
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({ questionId: currentQuestion.id, answer });
    setAnswers(newAnswers);
  };

  const canGoNext = currentAnswer !== undefined;
  const canGoPrevious = currentQuestionIndex > 0;

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz completed
      const results = calculateResults(answers);
      localStorage.setItem('quizResults', JSON.stringify(results));
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Temperament Assessment</h1>
            <p className="text-muted-foreground">Answer honestly for the most accurate results</p>
          </div>

          {/* Progress */}
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={quizQuestions.length} 
          />

          {/* Question */}
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            currentAnswer={currentAnswer?.answer as number}
          />

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canGoNext}
              className="gap-2 gradient-primary hover:opacity-90"
            >
              {currentQuestionIndex === quizQuestions.length - 1 ? 'See Results' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
