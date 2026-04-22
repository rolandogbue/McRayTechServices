
ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS challenge text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS solution text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS services text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS testimonial_quote text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS testimonial_author text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS industry text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS duration text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS featured boolean NOT NULL DEFAULT false;
