import { useMultistepContext } from "@/hooks/useMultistepContext";
import { generateLink } from "@/lib/card/card-url-builder";
import { useMemo } from "react";

export const useCardUrl = () => {
  const { card } = useMultistepContext();
  return useMemo(() => generateLink(card), [card]);
};
