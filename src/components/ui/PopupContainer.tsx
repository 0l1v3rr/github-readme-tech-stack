import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onCloseBtnClick: () => void;
  children: ReactNode;
};

const PopupContainer = ({ isOpen, onCloseBtnClick, children }: Props) => {
  return (
    <>
      <div
        onClick={onCloseBtnClick}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-screen transition-all duration-150",
          isOpen
            ? "pointer-events-auto bg-black/20 backdrop-blur-sm"
            : "pointer-events-none bg-transparent backdrop-blur-none"
        )}
      />

      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 flex w-96 -translate-x-1/2 -translate-y-1/2 flex-col gap-2 overflow-hidden rounded-md border border-gh-border bg-gh-bg shadow-popup transition-all duration-150",
          isOpen
            ? "pointer-events-auto scale-100 select-auto opacity-100"
            : "pointer-events-none scale-50 select-none opacity-0"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default PopupContainer;
