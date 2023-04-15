import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactElement;
  className?: string;
};

const Main = ({ children, className }: Props) => {
  return (
    <main
      className={twMerge(
        "mx-auto flex min-h-screen w-[48rem] flex-col gap-2 bg-gh-bg py-6",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Main;
