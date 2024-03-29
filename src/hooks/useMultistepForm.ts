import { ReactNode, useState } from "react";

export const useMultistepForm = (pages: ReactNode[]) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const previousPage = () =>
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : prev));

  const nextPage = () =>
    setCurrentPageIndex((prev) =>
      pages.length - 1 !== prev ? prev + 1 : prev
    );

  const goToPageFirst = () => setCurrentPageIndex(0);

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  const currentPage = pages[currentPageIndex];
  const totalPages = pages.length;

  return {
    currentPage,
    currentPageIndex,
    isFirstPage,
    isLastPage,
    previousPage,
    nextPage,
    totalPages,
    goToPageFirst,
  };
};
