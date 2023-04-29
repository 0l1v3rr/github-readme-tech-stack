import { useMultistepContext } from "../../hooks/useMultistepContext";
import LineItem from "../lines/LineItem";
import FormWrapper from "../ui/FormWrapper";
import P from "../ui/P";

const PageSix = () => {
  const { card } = useMultistepContext();

  return (
    <FormWrapper title="Badges">
      <P>
        On this page you can customize the most important part of the card: the
        badges. You set the number of lines you want on the previous page.
      </P>

      {card.lines.map((line) => (
        <LineItem key={line.lineNumber} line={line} />
      ))}
    </FormWrapper>
  );
};

export default PageSix;
