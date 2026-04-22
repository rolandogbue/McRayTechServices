
CREATE TABLE public.case_study_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  case_study_id UUID NOT NULL REFERENCES public.case_studies(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.case_study_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view case study images"
ON public.case_study_images FOR SELECT
USING (
  EXISTS (SELECT 1 FROM public.case_studies WHERE id = case_study_id AND published = true)
);

CREATE POLICY "Admins can read all images"
ON public.case_study_images FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert images"
ON public.case_study_images FOR INSERT TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update images"
ON public.case_study_images FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete images"
ON public.case_study_images FOR DELETE TO authenticated
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Moderators can read all images"
ON public.case_study_images FOR SELECT TO authenticated
USING (has_role(auth.uid(), 'moderator'));

CREATE POLICY "Moderators can insert images"
ON public.case_study_images FOR INSERT TO authenticated
WITH CHECK (has_role(auth.uid(), 'moderator'));

CREATE POLICY "Moderators can update images"
ON public.case_study_images FOR UPDATE TO authenticated
USING (has_role(auth.uid(), 'moderator'));

CREATE POLICY "Moderators can delete images"
ON public.case_study_images FOR DELETE TO authenticated
USING (has_role(auth.uid(), 'moderator'));

CREATE INDEX idx_case_study_images_study ON public.case_study_images(case_study_id, sort_order);
