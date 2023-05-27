import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Main = ({ children, className }: Props) => {
  return (
    <main
      className={cn(
        "mx-auto flex min-h-screen w-full flex-col gap-2 bg-gh-bg px-4 py-6 lg:w-[48rem]",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Main;
