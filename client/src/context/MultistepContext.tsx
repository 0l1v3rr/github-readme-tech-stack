import { FC, ReactNode, createContext, useState, useCallback } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import PageOne from "../components/form/PageOne";
import PageTwo from "../components/form/PageTwo";
import PageThree from "../components/form/PageThree";
import { Badge, BadgeDataTransfer, Card } from "../types";
import PageFour from "../components/form/PageFour";
import PageFive from "../components/form/PageFive";
import PageSix from "../components/form/PageSix";
import { INITIAL_CARD } from "../const";

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
  resetCard: () => void;
}

export const MultistepContext = createContext<MultistepContextType>(
  {} as MultistepContextType
);

interface MultistepProviderProps {
  children: ReactNode;
}

export const MultistepProvider: FC<MultistepProviderProps> = ({ children }) => {
  const [grabbedBadge, setGrabbedBadge] = useState<BadgeDataTransfer>();
  const [card, setCard] = useState<Card>(structuredClone(INITIAL_CARD));

  const {
    currentPage,
    currentPageIndex,
    isFirstPage,
    isLastPage,
    previousPage,
    nextPage,
    totalPages,
    goToPageFirst,
  } = useMultistepForm([
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />,
    <PageSix />,
  ]);

  const updateCard = useCallback(
    () => (updated: Partial<Card>) => {
      setCard((prev) => ({ ...prev, updated }));
    },
    []
  );

  const addBadge = useCallback(
    (lineNumber: number, badge: Omit<Badge, "position">) => {
      setCard((prev) => {
        // check whether the line exists
        const line = prev.lines.findIndex((x) => x.lineNumber === lineNumber);
        if (line === -1) return prev;

        const newCard = structuredClone(prev);

        // update the badges
        newCard.lines[line].badges = [
          ...newCard.lines[line].badges,
          { ...badge, position: newCard.lines[line].badges.length },
        ];

        return newCard;
      });
    },
    []
  );

  const removeBadge = useCallback((lineNumber: number, position: number) => {
    setCard((prev) => {
      // check whether the line exists
      const line = prev.lines.findIndex((x) => x.lineNumber === lineNumber);
      if (line === -1) return prev;

      const newCard = structuredClone(prev);

      // remove the badge and rearrange the positions
      newCard.lines[line].badges = newCard.lines[line].badges
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
        // check whether the line exists
        const line = prev.lines.findIndex((x) => x.lineNumber === lineNumber);
        if (line === -1) return prev;

        const newCard = structuredClone(prev);
        const badges = newCard.lines[line].badges;
        const badgePositions = badges.map((badge) => badge.position);

        // remove the old badge
        const idx = badgePositions.indexOf(bdt.badge.position);
        if (idx !== -1) badges.splice(idx, 1);

        // insert the new badge
        badges.splice(position, 0, bdt.badge);

        // rearrange the positions
        badges.forEach((badge, i) => (badge.position = i));

        return newCard;
      });
    },
    []
  );

  const resetCard = useCallback(() => {
    goToPageFirst();
    setCard(structuredClone(INITIAL_CARD));
  }, []);

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
        resetCard,
      }}
    >
      {children}
    </MultistepContext.Provider>
  );
};
