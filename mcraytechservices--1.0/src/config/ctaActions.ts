export type CTAActionType =
  | "BOOK_STRATEGY"
  | "SCROLL_SERVICES"
  | "SCROLL_TESTIMONIALS";

export interface CTAActionConfig {
  type: CTAActionType;
  label: string;
}
