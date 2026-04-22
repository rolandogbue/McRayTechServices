
CREATE TABLE public.case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client text,
  description text NOT NULL DEFAULT '',
  results text NOT NULL DEFAULT '',
  image_url text,
  published boolean NOT NULL DEFAULT false,
  slug text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Public can read published case studies
CREATE POLICY "Anyone can read published case studies"
ON public.case_studies FOR SELECT TO public
USING (published = true);

-- Admins full access
CREATE POLICY "Admins can read all case studies"
ON public.case_studies FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert case studies"
ON public.case_studies FOR INSERT TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update case studies"
ON public.case_studies FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete case studies"
ON public.case_studies FOR DELETE TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Moderators access
CREATE POLICY "Moderators can read all case studies"
ON public.case_studies FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Moderators can insert case studies"
ON public.case_studies FOR INSERT TO authenticated
WITH CHECK (has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Moderators can update case studies"
ON public.case_studies FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Moderators can delete case studies"
ON public.case_studies FOR DELETE TO authenticated
USING (has_role(auth.uid(), 'moderator'::app_role));

-- Auto-update updated_at
CREATE TRIGGER update_case_studies_updated_at
  BEFORE UPDATE ON public.case_studies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
