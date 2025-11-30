import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuizResult } from '@/types/quiz';
import { temperamentDetails } from '@/data/temperamentDetails';
import { Lock, Sparkles, TrendingUp, Target, AlertTriangle, Lightbulb } from 'lucide-react';
import { SubmissionForm } from '@/components/SubmissionForm';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResult | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults');
    if (!savedResults) {
      navigate('/');
      return;
    }
    setResults(JSON.parse(savedResults));
    
    // Check if already submitted
    const submitted = localStorage.getItem('quizSubmitted');
    setIsSubmitted(submitted === 'true');
  }, [navigate]);

  const handleSubmission = async (name: string, email: string) => {
    if (!results) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('quiz_submissions')
        .insert([{
          name: name,
          email: email,
          primary_temperament: results.primary,
          secondary_temperament: results.secondary,
          scores: results.scores as any,
          payment_status: 'unpaid'
        }]);

      if (error) throw error;

      localStorage.setItem('quizSubmitted', 'true');
      localStorage.setItem('submittedEmail', email);
      setIsSubmitted(true);

      toast({
        title: "Results saved!",
        description: "Your temperament profile has been saved successfully"
      });
    } catch (error: any) {
      toast({
        title: "Failed to save",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!results) {
    return null;
  }

  const primaryDetail = temperamentDetails[results.primary];
  const secondaryDetail = temperamentDetails[results.secondary];

  // Generate SWOT based on combined temperaments
  const combinedStrengths = [
    ...primaryDetail.strengths.slice(0, 3),
    ...secondaryDetail.strengths.slice(0, 2)
  ];
  const combinedWeaknesses = [
    ...primaryDetail.weaknesses.slice(0, 3),
    ...secondaryDetail.weaknesses.slice(0, 2)
  ];
  const combinedOpportunities = [
    ...primaryDetail.opportunities.slice(0, 3),
    ...secondaryDetail.opportunities.slice(0, 2)
  ];
  const combinedThreats = [
    ...primaryDetail.threats.slice(0, 3),
    ...secondaryDetail.threats.slice(0, 2)
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Your Results</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Your Temperament Profile</h1>
            <p className="text-xl text-muted-foreground">
              Understanding your unique personality blend
            </p>
          </div>

          {/* Submission Form - Show if not yet submitted */}
          {!isSubmitted && (
            <SubmissionForm 
              onSubmit={handleSubmission}
              isSubmitting={isSubmitting}
            />
          )}

          {/* Temperament Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 shadow-medium border-2 border-primary">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-primary">Primary</h2>
                  <span className="text-3xl font-bold">{results.scores[0].percentage}%</span>
                </div>
                <h3 className="text-3xl font-bold">{results.primary}</h3>
                <p className="text-xl text-muted-foreground">{primaryDetail.tagline}</p>
                <p className="text-foreground">{primaryDetail.overview.substring(0, 200)}...</p>
              </div>
            </Card>

            <Card className="p-8 shadow-medium border-2 border-accent">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-accent">Secondary</h2>
                  <span className="text-3xl font-bold">{results.scores[1].percentage}%</span>
                </div>
                <h3 className="text-3xl font-bold">{results.secondary}</h3>
                <p className="text-xl text-muted-foreground">{secondaryDetail.tagline}</p>
                <p className="text-foreground">{secondaryDetail.overview.substring(0, 200)}...</p>
              </div>
            </Card>
          </div>

          {/* Score Breakdown */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-6">Complete Score Breakdown</h3>
            <div className="space-y-4">
              {results.scores.map((score) => (
                <div key={score.type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{score.type}</span>
                    <span className="text-muted-foreground">{score.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary rounded-full transition-smooth"
                      style={{ width: `${score.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SWOT Analysis */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Your SWOT Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <Card className="p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Strengths</h3>
                </div>
                <ul className="space-y-2">
                  {combinedStrengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Weaknesses */}
              <Card className="p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Weaknesses</h3>
                </div>
                <ul className="space-y-2">
                  {combinedWeaknesses.map((weakness, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-orange-600 mt-0.5">!</span>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Opportunities */}
              <Card className="p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Opportunities</h3>
                </div>
                <ul className="space-y-2">
                  {combinedOpportunities.map((opportunity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-blue-600 mt-0.5">→</span>
                      <span>{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Threats */}
              <Card className="p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Threats</h3>
                </div>
                <ul className="space-y-2">
                  {combinedThreats.map((threat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-red-600 mt-0.5">⚠</span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Unlock Detailed Report CTA */}
          <Card className="p-8 md:p-12 gradient-primary text-white shadow-strong">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Unlock Your Complete Analysis
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Get comprehensive insights including career paths, business opportunities, 
                relationship compatibility, communication style, and personalized growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
                  onClick={() => navigate('/detailed-report')}
                >
                  Get Detailed Report - $5
                </Button>
              </div>
              <p className="text-sm opacity-75">
                One-time payment • Instant access • 30-day money-back guarantee
              </p>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                localStorage.removeItem('quizResults');
                navigate('/quiz');
              }}
            >
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
