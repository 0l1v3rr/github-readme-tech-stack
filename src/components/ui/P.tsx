import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const P = ({ children }: Props) => {
  return <p className="text-gh-text">{children}</p>;
};

export default P;
