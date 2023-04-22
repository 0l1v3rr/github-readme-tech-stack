import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Flex = ({ children }: Props) => (
  <div className="flex gap-4">{children}</div>
);

export default Flex;
