-- Create a security definer function to get current user's email
CREATE OR REPLACE FUNCTION public.get_current_user_email()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT email FROM auth.users WHERE id = auth.uid()
$$;

-- Drop the problematic policy
DROP POLICY IF EXISTS "Users can view their own submissions by email" ON public.quiz_submissions;

-- Recreate with the security definer function
CREATE POLICY "Users can view their own submissions by email"
ON public.quiz_submissions
FOR SELECT
TO authenticated
USING (email = public.get_current_user_email());