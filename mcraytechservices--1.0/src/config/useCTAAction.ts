import { useCallback } from "react";
import { CTAActionType } from "./ctaActions";
import { useNavigate } from "react-router-dom";

interface UseCTAActionParams {
  openBookingModal: () => void;
}

export const useCTAAction = ({ openBookingModal }: UseCTAActionParams) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return useCallback(
    (actionType: CTAActionType) => {
      switch (actionType) {
        case "BOOK_STRATEGY":
          openBookingModal();
          break;

        case "SCROLL_PROCESS":
          scrollToSection("process");
          break;

        case "SCROLL_TESTIMONIALS":
          scrollToSection("testimonials");
          break;

        default:
          break;
      }
    },
    [openBookingModal],
  );
};
