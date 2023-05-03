import { FC, ReactNode, createContext, useCallback, useState } from "react";
import PageFive from "../components/form/PageFive";
import PageFour from "../components/form/PageFour";
import PageOne from "../components/form/PageOne";
import PageSix from "../components/form/PageSix";
import PageThree from "../components/form/PageThree";
import PageTwo from "../components/form/PageTwo";
import { INITIAL_CARD } from "../const";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { Badge, BadgeDataTransfer, Card, Line } from "../types";
import PageSeven from "../components/form/PageSeven";

export interface MultistepContextType {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: ReactNode;
  currentPageIndex: number;
  totalPages: number;
  previousPage: () => void;
  nextPage: () => void;
  card: Card;
  updateCard: (updated: Partial<Card>) => void;
  addBadge: (lineNumber: number, badge: Omit<Badge, "position">) => void;
  removeBadge: (lineNumber: number, position: number) => void;
  grabbedBadge: BadgeDataTransfer | undefined;
  setGrabbedBadge: (grabbedBadge: BadgeDataTransfer | undefined) => void;
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
    <PageSeven />,
  ]);

  /**
   * Updates the card in a way that none of the card's parameters is required.
   *
   * @param {Partial<Card>} updated
   */
  const updateCard = useCallback(
    (updated: Partial<Card>) => setCard((prev) => ({ ...prev, ...updated })),
    []
  );

  /**
   * Updates a line with the specified lineNumber.
   * If the line with the lineNumber is not presented, it does nothing.
   *
   * @param {number} lineNumber
   * @param {(line: Line) => void} callback
   */
  const updateLine = useCallback(
    (lineNumber: number, callback: (line: Line) => void) => {
      setCard((prev) => {
        // check whether the line exists
        const idx = prev.lines.findIndex((x) => x.lineNumber === lineNumber);
        if (idx === -1) return prev;

        const newCard = structuredClone(prev);
        callback(newCard.lines[idx]);

        return newCard;
      });
    },
    []
  );

  /**
   * Pushes a badge to the end of a line.
   * You should pass the badge without the position property.
   *
   * @param {number} lineNumber
   * @param {Omit<Badge, "position">} badge
   */
  const addBadge = useCallback(
    (lineNumber: number, badge: Omit<Badge, "position">) => {
      updateLine(lineNumber, (line) => {
        const { badges } = line;
        badges.push({ position: badges.length, ...badge });
      });
    },
    [updateLine]
  );

  /**
   * Removes a badge in the specified line at the specified position.
   *
   * @param {number} lineNumber
   * @param {number} position
   */
  const removeBadge = useCallback(
    (lineNumber: number, position: number) => {
      updateLine(lineNumber, (line) => {
        const { badges } = line;

        // remove the old badge
        const idx = badges.map((x) => x.position).indexOf(position);
        if (idx !== -1) badges.splice(idx, 1);

        // rearrange the positions
        badges.forEach((badge, i) => (badge.position = i));
      });
    },
    [updateLine]
  );

  /**
   * Inserts a new badge in the specified line at a specified position.
   * This function also removes the old badge from the array.
   *
   * @param {number} lineNumber
   * @param {number} position
   * @param {BadgeDataTransfer} bdt
   */
  const insertBadge = useCallback(
    (lineNumber: number, position: number, bdt: BadgeDataTransfer) => {
      // If the grabbed badge is in the left side of the new position,
      // we need to decrement the position by one,
      // because we grabbed (technically removed) one from the new position's left side.
      if (position > bdt.badge.position) position--;

      updateLine(lineNumber, (line) => {
        const { badges } = line;

        // remove the old badge
        const idx = badges.map((x) => x.position).indexOf(bdt.badge.position);
        if (idx !== -1) badges.splice(idx, 1);

        // insert the new badge
        badges.splice(position, 0, bdt.badge);
        badges.forEach((badge, i) => (badge.position = i));
      });
    },
    [updateLine]
  );

  /**
   * Resets the card by setting it to it's initial state.
   */
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
