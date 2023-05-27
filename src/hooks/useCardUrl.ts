import { generateLink } from "@/lib/card/card-url-builder";
import { useMultistepContext } from "@/hooks/useMultistepContext";
import { useMemo } from "react";

export const useCardUrl = () => {
  const { card } = useMultistepContext();
  return useMemo(() => generateLink(card), [card]);
};
