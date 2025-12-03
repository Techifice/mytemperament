-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Admins can view all submissions" ON public.quiz_submissions;
DROP POLICY IF EXISTS "Users can view their own submissions by email" ON public.quiz_submissions;
DROP POLICY IF EXISTS "Anyone can insert their own submission" ON public.quiz_submissions;
DROP POLICY IF EXISTS "Admins can update all submissions" ON public.quiz_submissions;

-- Create permissive policies (default behavior, allows OR logic)
CREATE POLICY "Admins can view all submissions"
ON public.quiz_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view their own submissions by email"
ON public.quiz_submissions
FOR SELECT
TO authenticated
USING (email = (SELECT email FROM auth.users WHERE id = auth.uid()));

CREATE POLICY "Anyone can insert submission"
ON public.quiz_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can update all submissions"
ON public.quiz_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));