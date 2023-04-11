import { FC, ReactElement } from "react";

interface MainProps {
  children: ReactElement[];
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="flex gap-4 mx-4 sm:mx-10 md:mx-32 lg:mx-36 mt-6 flex-col lg:flex-row">
      {children}
    </main>
  );
};

export default Main;
