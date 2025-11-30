import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { QuestionCard } from '@/components/QuestionCard';
import { ProgressBar } from '@/components/ProgressBar';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizAnswer } from '@/types/quiz';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { calculateResults } from '@/utils/scoring';
import { storage } from '@/utils/storage';
import { STORAGE_KEYS, QUIZ_CONFIG } from '@/config/constants';
import { useToast } from '@/hooks/use-toast';

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const autoSaveTimerRef = useRef<NodeJS.Timeout>();

  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = storage.getItem<{
      currentIndex: number;
      answers: QuizAnswer[];
    }>(STORAGE_KEYS.quizProgress);

    if (savedProgress) {
      setCurrentQuestionIndex(savedProgress.currentIndex);
      setAnswers(savedProgress.answers);
      toast({
        title: 'Progress restored',
        description: 'Your previous quiz progress has been loaded',
      });
    }
  }, [toast]);

  // Auto-save progress
  const saveProgress = useCallback(() => {
    setIsSaving(true);
    const success = storage.setItem(STORAGE_KEYS.quizProgress, {
      currentIndex: currentQuestionIndex,
      answers,
      lastSaved: new Date().toISOString(),
    });

    if (success) {
      storage.setItem(STORAGE_KEYS.lastSaveTime, Date.now());
    }
    setIsSaving(false);
  }, [currentQuestionIndex, answers]);

  // Auto-save on answer change
  useEffect(() => {
    if (answers.length === 0) return;

    // Clear existing timer
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    // Set new timer
    autoSaveTimerRef.current = setTimeout(() => {
      saveProgress();
    }, 2000); // Save 2 seconds after last change

    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, [answers, saveProgress]);

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
      try {
        const results = calculateResults(answers);
        storage.setItem(STORAGE_KEYS.quizResults, results);
        
        // Clear progress since quiz is completed
        storage.removeItem(STORAGE_KEYS.quizProgress);
        
        navigate('/results');
      } catch (error) {
        console.error('Error calculating results:', error);
        toast({
          title: 'Error',
          description: 'Failed to calculate results. Please try again.',
          variant: 'destructive',
        });
      }
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

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={saveProgress}
                disabled={isSaving || answers.length === 0}
                className="gap-2"
                title="Manually save progress"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save'}
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
