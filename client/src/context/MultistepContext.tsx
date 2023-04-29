import { FC, ReactNode, createContext, useState, useCallback } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import PageOne from "../components/form/PageOne";
import PageTwo from "../components/form/PageTwo";
import PageThree from "../components/form/PageThree";
import { Card } from "../types";
import PageFour from "../components/form/PageFour";
import PageFive from "../components/form/PageFive";
import PageSix from "../components/form/PageSix";

export interface MultistepContextType {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: ReactNode;
  currentPageIndex: number;
  totalPages: number;
  previousPage: () => void;
  nextPage: () => void;
  card: Card;
  updateCard: () => (updated: Partial<Card>) => void;
  setCard: React.Dispatch<React.SetStateAction<Card>>;
}

export const MultistepContext = createContext<MultistepContextType>(
  {} as MultistepContextType
);

interface MultistepProviderProps {
  children: ReactNode;
}

export const MultistepProvider: FC<MultistepProviderProps> = ({ children }) => {
  const [card, setCard] = useState<Card>({
    title: "My Tech Stack",
    theme: "github",
    align: "left",
    titleAlign: "left",
    showBorder: true,
    hideBg: false,
    borderRadius: 4.5,
    fontWeight: "semibold",
    fontSize: 18,
    fontFamily: "Segoe UI",
    gap: 10,
    lineHeight: 7,
    hideTitle: false,
    lines: [{ lineNumber: 1, badges: [] }],
    backgroundColor: "",
    borderColor: "",
    titleColor: "",
    badgeColor: "",
    width: 495,
  });

  const updateCard = useCallback(
    () => (updated: Partial<Card>) => {
      setCard((prev) => ({ ...prev, ...updated }));
    },
    []
  );

  const {
    currentPage,
    currentPageIndex,
    isFirstPage,
    isLastPage,
    previousPage,
    nextPage,
    totalPages,
  } = useMultistepForm([
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />,
    <PageSix />,
  ]);

  return (
    <MultistepContext.Provider
      value={{
        isFirstPage,
        isLastPage,
        currentPage,
        currentPageIndex,
        previousPage,
        nextPage,
        totalPages,
        card,
        updateCard,
        setCard,
      }}
    >
      {children}
    </MultistepContext.Provider>
  );
};
