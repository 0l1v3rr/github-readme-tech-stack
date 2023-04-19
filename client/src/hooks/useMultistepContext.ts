import { useContext } from "react";
import {
  MultistepContext,
  MultistepContextType,
} from "../context/MultistepContext";

export const useMultistepContext = (): MultistepContextType => {
  return useContext(MultistepContext) as MultistepContextType;
};
