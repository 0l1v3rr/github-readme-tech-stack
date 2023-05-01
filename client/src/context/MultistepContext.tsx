import { FC, ReactNode, createContext, useState, useCallback } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import PageOne from "../components/form/PageOne";
import PageTwo from "../components/form/PageTwo";
import PageThree from "../components/form/PageThree";
import { Badge, BadgeDataTransfer, Card } from "../types";
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
  addBadge: (lineNumber: number, badge: Omit<Badge, "position">) => void;
  removeBadge: (lineNumber: number, position: number) => void;
  grabbedBadge: BadgeDataTransfer | undefined;
  setGrabbedBadge: React.Dispatch<
    React.SetStateAction<BadgeDataTransfer | undefined>
  >;
  insertBadge: (
    lineNumber: number,
    position: number,
    bdt: BadgeDataTransfer
  ) => void;
}

export const MultistepContext = createContext<MultistepContextType>(
  {} as MultistepContextType
);

interface MultistepProviderProps {
  children: ReactNode;
}

export const MultistepProvider: FC<MultistepProviderProps> = ({ children }) => {
  const [grabbedBadge, setGrabbedBadge] = useState<BadgeDataTransfer>();

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
    lines: [
      {
        lineNumber: 1,
        badges: [
          { position: 0, color: "auto", icon: "laravel", label: "laravel" },
          { position: 1, color: "auto", icon: "react", label: "react" },
          { position: 2, color: "auto", icon: "c", label: "c" },
        ],
      },
    ],
    backgroundColor: "",
    borderColor: "",
    titleColor: "",
    badgeColor: "",
    width: 495,
  });

  const updateCard = useCallback(
    () => (updated: Partial<Card>) => {
      setCard((prev) => ({ ...prev, updated }));
    },
    []
  );

  const addBadge = useCallback(
    (lineNumber: number, badge: Omit<Badge, "position">) => {
      setCard((prev) => {
        const newCard = structuredClone(prev);
        const lineIdx = newCard.lines.findIndex(
          (x) => x.lineNumber === lineNumber
        );

        // line with the specified lineNumber doesn't exist
        if (lineIdx === -1) return prev;

        // update the badges
        newCard.lines[lineIdx].badges = [
          ...newCard.lines[lineIdx].badges,
          { ...badge, position: newCard.lines[lineIdx].badges.length },
        ];

        return newCard;
      });
    },
    []
  );

  const removeBadge = useCallback((lineNumber: number, position: number) => {
    setCard((prev) => {
      const newCard = structuredClone(prev);
      const lineIdx = newCard.lines.findIndex(
        (x) => x.lineNumber === lineNumber
      );

      // line with the specified lineNumber doesn't exist
      if (lineIdx === -1) return prev;

      // remove the badge and rearrange the positions
      newCard.lines[lineIdx].badges = newCard.lines[lineIdx].badges
        .sort((a, z) => a.position - z.position)
        .filter((x) => x.position !== position)
        .map((prev, i) => ({ ...prev, position: i }));

      return newCard;
    });
  }, []);

  const insertBadge = useCallback(
    (lineNumber: number, position: number, bdt: BadgeDataTransfer) => {
      // If the grabbed badge is in the left side of the new position,
      // we need to decrement the position by one,
      // because we grabbed (technically removed) one from the new position's left side.
      if (position > bdt.badge.position) position--;

      setCard((prev) => {
        const newCard = structuredClone(prev);
        const lineIdx = newCard.lines.findIndex(
          (x) => x.lineNumber === lineNumber
        );

        // line with the specified lineNumber doesn't exist
        if (lineIdx === -1) return prev;

        // remove the old badge
        newCard.lines[lineIdx].badges = newCard.lines[lineIdx].badges
          .sort((a, z) => a.position - z.position)
          .filter((x) => x.position !== bdt.badge.position);

        // insert the new badge
        newCard.lines[lineIdx].badges.splice(position, 0, bdt.badge);

        // rearrange the positions
        newCard.lines[lineIdx].badges = newCard.lines[lineIdx].badges.map(
          (prev, i) => ({
            ...prev,
            position: i,
          })
        );

        return newCard;
      });
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
        addBadge,
        removeBadge,
        grabbedBadge,
        setGrabbedBadge,
        insertBadge,
      }}
    >
      {children}
    </MultistepContext.Provider>
  );
};
