import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { QuizResult } from '@/types/quiz';
import { temperamentDetails } from '@/data/temperamentDetails';
import { useToast } from '@/hooks/use-toast';
import { 
  Briefcase, Users, MessageSquare, Building, Heart, 
  TrendingUp, Target, BookOpen, CheckCircle 
} from 'lucide-react';

const DetailedReport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [results, setResults] = useState<QuizResult | null>(null);
  const [secretCode, setSecretCode] = useState('');
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults');
    if (!savedResults) {
      navigate('/');
      return;
    }
    setResults(JSON.parse(savedResults));

    // Check if user already has access
    const accessGranted = localStorage.getItem('detailedReportAccess');
    if (accessGranted === 'true') {
      setHasAccess(true);
    }
  }, [navigate]);

  const handleSecretCode = () => {
    if (secretCode.toUpperCase() === 'TECHIFICE') {
      localStorage.setItem('detailedReportAccess', 'true');
      setHasAccess(true);
      toast({
        title: 'Access Granted! 🎉',
        description: 'You now have full access to your detailed report.',
      });
    } else {
      toast({
        title: 'Invalid Code',
        description: 'Please check your code and try again.',
        variant: 'destructive',
      });
    }
  };

  const handlePayment = () => {
    // In a real app, this would integrate with Stripe
    toast({
      title: 'Payment Processing',
      description: 'Redirecting to secure checkout...',
    });
    // Simulate payment success
    setTimeout(() => {
      localStorage.setItem('detailedReportAccess', 'true');
      setHasAccess(true);
      toast({
        title: 'Payment Successful! 🎉',
        description: 'You now have full access to your detailed report.',
      });
    }, 2000);
  };

  if (!results) {
    return null;
  }

  const primaryDetail = temperamentDetails[results.primary];
  const secondaryDetail = temperamentDetails[results.secondary];

  // Payment Gate
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 md:p-12 shadow-strong">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                Unlock Your Detailed Report
              </h1>
              
              <div className="space-y-4">
                <p className="text-center text-muted-foreground">
                  Get instant access to your comprehensive personality analysis
                </p>

                <div className="grid gap-3 py-4">
                  {[
                    'In-depth temperament breakdown',
                    'Career and business opportunities',
                    'Relationship compatibility guide',
                    'Communication strategies',
                    'Growth and development roadmap',
                    'Famous personality matches'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Have a secret code?
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={secretCode}
                      onChange={(e) => setSecretCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleSecretCode}>
                      Apply
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or
                      </span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full gradient-primary text-lg py-6"
                    onClick={handlePayment}
                  >
                    Get Full Report - $5
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    One-time payment • Instant access • 30-day money-back guarantee
                  </p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/results')}
              >
                Back to Free Summary
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Full Detailed Report
  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Complete Temperament Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              Your {results.primary}-{results.secondary} Profile
            </p>
          </div>

          {/* Core Nature */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Your Core Nature
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{primaryDetail.name} (Primary)</h3>
                <p className="text-lg text-muted-foreground mb-4">{primaryDetail.tagline}</p>
                <p className="leading-relaxed">{primaryDetail.overview}</p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-2xl font-semibold mb-3">{secondaryDetail.name} (Secondary)</h3>
                <p className="text-lg text-muted-foreground mb-4">{secondaryDetail.tagline}</p>
                <p className="leading-relaxed">{secondaryDetail.overview}</p>
              </div>
            </div>
          </Card>

          {/* Core Traits */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6">Core Personality Traits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Primary Traits</h3>
                <ul className="space-y-2">
                  {primaryDetail.coreTraits.map((trait, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Secondary Traits</h3>
                <ul className="space-y-2">
                  {secondaryDetail.coreTraits.map((trait, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Communication Style */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-primary" />
              Communication Style
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed">{primaryDetail.communication}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground">With your {secondaryDetail.name} influence:</p>
                <p className="leading-relaxed mt-2">{secondaryDetail.communication}</p>
              </div>
            </div>
          </Card>

          {/* Relationships */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              Relationships & Compatibility
            </h2>
            <div className="space-y-6">
              <p className="leading-relaxed">{primaryDetail.relationships}</p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold mb-3">Best Friendships</h4>
                  <ul className="space-y-2 text-sm">
                    {primaryDetail.compatibility.friendship.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Romance</h4>
                  <ul className="space-y-2 text-sm">
                    {primaryDetail.compatibility.romance.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Leadership Synergy</h4>
                  <ul className="space-y-2 text-sm">
                    {primaryDetail.compatibility.leadership.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Work Style */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              Work Style & Preferences
            </h2>
            <p className="leading-relaxed mb-6">{primaryDetail.workStyle}</p>
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Your Ideal Work Environment</h4>
              <p className="text-muted-foreground">{primaryDetail.idealEnvironment}</p>
            </div>
          </Card>

          {/* Career Paths */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Ideal Career Paths</h3>
                <ul className="space-y-2">
                  {primaryDetail.careerPaths.map((career, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Secondary Options</h3>
                <ul className="space-y-2">
                  {secondaryDetail.careerPaths.slice(0, 6).map((career, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Business Opportunities */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Business & Entrepreneurship
            </h2>
            <p className="text-muted-foreground mb-6">
              Based on your {results.primary}-{results.secondary} profile, these business opportunities align with your natural strengths:
            </p>
            <div className="space-y-3">
              {primaryDetail.businessOpportunities.map((opportunity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{opportunity}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Growth Areas */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Personal Growth Recommendations
            </h2>
            <p className="text-muted-foreground mb-6">
              Focus on these areas for continued development and self-improvement:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {primaryDetail.growthAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 border rounded-lg">
                  <span className="text-2xl">{idx + 1}</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Famous Examples */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-3xl font-bold mb-6">Share Your Temperament With</h2>
            <div className="flex flex-wrap gap-3">
              {primaryDetail.famousExamples.map((person, idx) => (
                <div key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  {person}
                </div>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/results')}
            >
              Back to Summary
            </Button>
            <Button 
              size="lg"
              onClick={() => window.print()}
            >
              Print Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
