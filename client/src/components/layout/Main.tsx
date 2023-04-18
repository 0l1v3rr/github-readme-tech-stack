import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactElement | ReactElement[];
  className?: string;
};

const Main = ({ children, className }: Props) => {
  return (
    <main
      className={twMerge(
        "mx-auto flex min-h-screen w-full flex-col gap-2 bg-gh-bg px-4 py-6 lg:w-[48rem]",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Main;
