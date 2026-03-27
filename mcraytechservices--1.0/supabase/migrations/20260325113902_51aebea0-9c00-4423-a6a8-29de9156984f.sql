-- Drop the existing policy that only applies to anon role
DROP POLICY IF EXISTS "Anyone can read published posts" ON public.blog_posts;

-- Recreate it for both anon and authenticated roles
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts FOR SELECT
USING (published = true);