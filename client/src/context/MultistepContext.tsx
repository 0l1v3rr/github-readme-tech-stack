import { FC, ReactNode, createContext } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import PageOne from "../components/form/PageOne";
import PageTwo from "../components/form/PageTwo";
import PageThree from "../components/form/PageThree";

export interface MultistepContextType {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: ReactNode;
  currentPageIndex: number;
  totalPages: number;
  previousPage: () => void;
  nextPage: () => void;
}

export const MultistepContext = createContext<MultistepContextType | null>(
  null
);

interface MultistepProviderProps {
  children: ReactNode;
}

export const MultistepProvider: FC<MultistepProviderProps> = ({ children }) => {
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
      }}
    >
      {children}
    </MultistepContext.Provider>
  );
};
