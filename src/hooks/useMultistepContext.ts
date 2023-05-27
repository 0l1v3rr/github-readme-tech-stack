"use client";

import {
  MultistepContext,
  MultistepContextType,
} from "@/context/MultistepContext";
import { useContext } from "react";

export const useMultistepContext = (): MultistepContextType => {
  return useContext(MultistepContext) as MultistepContextType;
};
