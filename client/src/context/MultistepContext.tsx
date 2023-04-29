import { FC, ReactNode, createContext, useState, useCallback } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import PageOne from "../components/form/PageOne";
import PageTwo from "../components/form/PageTwo";
import PageThree from "../components/form/PageThree";
import { Badge, Card } from "../types";
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
  addBadge: (lineNumber: number, badge: Badge) => void;
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

  const addBadge = useCallback((lineNumber: number, badge: Badge) => {
    setCard((prev) => {
      const newObj = { ...prev };
      const lineIdx = newObj.lines.findIndex(
        (x) => x.lineNumber === lineNumber
      );

      // line with the specified lineNumber doesn't exist
      if (lineIdx === -1) return prev;

      // update the badges
      newObj.lines[lineIdx].badges = [
        ...newObj.lines[lineIdx].badges,
        { ...badge },
      ];

      return newObj;
    });
  }, []);

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
        addBadge,
      }}
    >
      {children}
    </MultistepContext.Provider>
  );
};
