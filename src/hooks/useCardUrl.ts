import { useMemo } from "react";
import { generateLink } from "../utils/generate";
import { useMultistepContext } from "./useMultistepContext";

export const useCardUrl = () => {
  const { card } = useMultistepContext();
  return useMemo(() => generateLink(card), [card]);
};
