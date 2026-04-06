export type CTAActionType =
  | "BOOK_STRATEGY"
  | "SCROLL_PROCESS"
  | "SCROLL_TESTIMONIALS";

export interface CTAActionConfig {
  type: CTAActionType;
  label: string;
}
