import FormWrapper from "../ui/FormWrapper";
import { useCardUrl } from "@/hooks/useCardUrl";
import { useMultistepContext } from "../../hooks/useMultistepContext";
import CodeBlock from "../ui/CodeBlock";
import CodeWrapper from "./CodeWrapper";

const PageSeven = () => {
  const { card } = useMultistepContext();
  const url = useCardUrl();

  return (
    <FormWrapper title="Your Card" className="items-center px-6">
      <img
        className="select-none"
        // width={card.width}
        src={url}
        alt={card.title}
      />

      <CodeWrapper title="URL">
        <CodeBlock code={url} />
      </CodeWrapper>

      <CodeWrapper title="Markdown">
        <CodeBlock code={`[![${card.title}](${url})`} />
      </CodeWrapper>

      <CodeWrapper title="HTML">
        <CodeBlock code={`<img src="${url}" alt="${card.title}" />`} />
      </CodeWrapper>
    </FormWrapper>
  );
};

export default PageSeven;
