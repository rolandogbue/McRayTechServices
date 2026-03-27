
ALTER TABLE public.blog_posts ADD COLUMN slug text UNIQUE;

-- Generate slugs for existing posts
UPDATE public.blog_posts SET slug = LOWER(REGEXP_REPLACE(REGEXP_REPLACE(title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g')) || '-' || LEFT(id::text, 8);

-- Make slug NOT NULL after populating
ALTER TABLE public.blog_posts ALTER COLUMN slug SET NOT NULL;

-- Create a function to auto-generate slug from title
CREATE OR REPLACE FUNCTION public.generate_blog_slug()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := LOWER(REGEXP_REPLACE(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g')) || '-' || LEFT(NEW.id::text, 8);
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_blog_slug
  BEFORE INSERT ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.generate_blog_slug();
