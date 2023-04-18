import { AnchorHTMLAttributes, FC, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      {...props}
      className="text-gh-blue outline-none hover:underline focus-visible:underline"
    >
      {children}
    </a>
  );
};

export default Link;
