import FormWrapper from "@/components/form/FormWrapper";
import LineItem from "@/components/lines/LineItem";
import P from "@/components/ui/P";
import Quote from "@/components/ui/Quote";
import { useMultistepContext } from "@/hooks/useMultistepContext";

const PageSix = () => {
  const { card } = useMultistepContext();

  return (
    <FormWrapper title="Badges">
      <P>
        On this page you can customize the most important part of the card: the
        badges. You have already set the number of lines you want on the
        previous page.
      </P>

      <Quote variant="info">
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
