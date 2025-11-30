import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { QuizQuestion } from '@/types/quiz';
import { useState, memo } from 'react';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (answer: number) => void;
  currentAnswer?: number;
}

export const QuestionCard = memo(({ question, onAnswer, currentAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(currentAnswer);
  const [sliderValue, setSliderValue] = useState<number>(currentAnswer ?? 2);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    onAnswer(index);
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
    onAnswer(value[0]);
  };

  return (
    <Card className="p-8 shadow-medium border-border/50">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            {question.domain} Assessment
          </p>
          <h3 className="text-2xl font-semibold text-foreground">
            {question.question}
          </h3>
        </div>

        {question.type === 'multiple-choice' && question.options && (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === index ? 'default' : 'outline'}
                className={`w-full text-left justify-start h-auto py-4 px-6 transition-smooth ${
                  selectedOption === index 
                    ? 'gradient-primary text-white' 
                    : 'hover:border-primary'
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <span className="text-base">{option}</span>
              </Button>
            ))}
          </div>
        )}

        {question.type === 'slider' && (
          <div className="space-y-6 py-4">
            <Slider
              value={[sliderValue]}
              onValueChange={handleSliderChange}
              min={0}
              max={4}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-semibold">
                {sliderValue + 1}
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
});
