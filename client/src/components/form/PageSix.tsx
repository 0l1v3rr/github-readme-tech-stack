import { useMultistepContext } from "../../hooks/useMultistepContext";
import LineItem from "../lines/LineItem";
import FormWrapper from "../ui/FormWrapper";
import P from "../ui/P";
import Quote from "../ui/Quote";

const PageSix = () => {
  const { card } = useMultistepContext();

  return (
    <FormWrapper title="Badges">
      <P>
        On this page you can customize the most important part of the card: the
        badges. You set the number of lines you want on the previous page.
      </P>

      <Quote variant="Info">
        You can drag and drop the badges to rearrange them or double-click to
        delete them.
      </Quote>

      {card.lines.map((line) => (
        <LineItem key={line.lineNumber} line={line} />
      ))}
    </FormWrapper>
  );
};

export default PageSix;
