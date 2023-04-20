import { FC, ReactNode, createContext, useState, useCallback } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import PageOne from "../components/form/PageOne";
import PageTwo from "../components/form/PageTwo";
import PageThree from "../components/form/PageThree";
import { Card } from "../types";

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

export const MultistepContext = createContext<MultistepContextType | null>(
  null
);

interface MultistepProviderProps {
  children: ReactNode;
}

export const MultistepProvider: FC<MultistepProviderProps> = ({ children }) => {
  const [card, setCard] = useState<Card>({
    title: "",
    theme: "github",
    align: "",
    titleAlign: "",
    showBorder: true,
    hideBg: false,
    borderRadius: "",
    fontWeight: "",
    fontSize: "",
    fontFamily: "",
    gap: "",
    lineHeight: "",
    hideTitle: false,
    lines: [],
    backgroundColor: "",
    borderColor: "",
    titleColor: "",
    badgeColor: "",
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
  } = useMultistepForm([<PageOne />, <PageTwo />, <PageThree />]);

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
