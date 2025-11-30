import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long")
});

interface SubmissionFormProps {
  onSubmit: (name: string, email: string) => Promise<void>;
  isSubmitting: boolean;
}

export const SubmissionForm = ({ onSubmit, isSubmitting }: SubmissionFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = submissionSchema.safeParse({ name, email });
    
    if (!validation.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      validation.error.errors.forEach(err => {
        if (err.path[0] === 'name' || err.path[0] === 'email') {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await onSubmit(name, email);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="p-8 shadow-soft">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Save Your Results</h3>
          <p className="text-muted-foreground">
            Enter your details to save your temperament profile
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              disabled={isSubmitting}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              disabled={isSubmitting}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Results"}
          </Button>
        </form>
      </div>
    </Card>
  );
};
