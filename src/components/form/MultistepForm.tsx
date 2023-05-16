"use client";

import { useMultistepContext } from "../../hooks/useMultistepContext";

const MultistepForm = () => {
  const { currentPage } = useMultistepContext();
  return <>{currentPage}</>;
};

export default MultistepForm;
