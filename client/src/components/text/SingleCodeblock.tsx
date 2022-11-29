import { FC } from "react";

interface SingleCodeblockProps {
  code: string;
}

const SingleCodeblock: FC<SingleCodeblockProps> = (props) => {
  return <span className="font-mono">{props.code}</span>;
};

export default SingleCodeblock;
