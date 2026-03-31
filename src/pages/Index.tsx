import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Brain, TrendingUp, Users, Sparkles } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Discover Your True Nature</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Unlock Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Temperament Profile
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Take our comprehensive 30-question assessment to understand your personality, 
            strengths, and unlock your full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gradient-primary hover:opacity-90 transition-smooth shadow-medium"
              onClick={() => navigate('/quiz')}
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 shadow-soft hover:shadow-medium transition-smooth border-border/50">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Deep Self-Awareness</h3>
            <p className="text-muted-foreground">
              Gain profound insights into your personality traits, behavioral patterns, 
              and emotional tendencies through our scientifically-designed assessment.
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-smooth border-border/50">
            <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">SWOT Analysis</h3>
            <p className="text-muted-foreground">
              Discover your unique strengths, acknowledge weaknesses, identify opportunities, 
              and understand potential threats to your personal growth.
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-smooth border-border/50">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Career Guidance</h3>
            <p className="text-muted-foreground">
              Get personalized career recommendations and business opportunities that align 
              perfectly with your temperament and natural abilities.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to understanding yourself better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Take the Quiz</h3>
              <p className="text-muted-foreground">
                Answer 30 carefully designed questions about your personality, 
                work style, and life preferences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Get Your Results</h3>
              <p className="text-muted-foreground">
                Receive your primary and secondary temperament types with a free 
                summary including your SWOT analysis.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Unlock Deep Insights</h3>
              <p className="text-muted-foreground">
                Access your detailed report for comprehensive analysis, career paths, 
                and personalized growth recommendations.
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6"
            onClick={() => navigate('/quiz')}
          >
            Begin Assessment
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 text-center gradient-primary">
          <div className="space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Discover Your True Self?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands who have gained life-changing insights into their personality
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => navigate('/quiz')}
            >
              Start Free Assessment
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
