import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const CodeWrapper = ({ children, title }: Props) => {
  return (
    <div className="mt-2 flex w-full flex-col gap-1 border-t border-gh-border pt-2">
      <h3 className="text-xl font-semibold text-gh-text">{title}</h3>
      {children}
    </div>
  );
};

export default CodeWrapper;
