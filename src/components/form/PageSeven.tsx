import CodeWrapper from "@/components/form/CodeWrapper";
import FormWrapper from "@/components/form/FormWrapper";
import CodeBlock from "@/components/ui/CodeBlock";
import { useCardUrl } from "@/hooks/useCardUrl";
import { useMultistepContext } from "@/hooks/useMultistepContext";

const PageSeven = () => {
  const { card } = useMultistepContext();
  const url = useCardUrl();

  return (
    <FormWrapper title="Your Card" className="items-center px-6">
      <img className="select-none" src={url} alt={card.title} />

      <CodeWrapper title="URL">
        <CodeBlock language="xml" code={url} />
      </CodeWrapper>

      <CodeWrapper title="Markdown">
        <CodeBlock language="xml" code={`[![${card.title}](${url})`} />
      </CodeWrapper>

      <CodeWrapper title="HTML">
        <CodeBlock
          language="xml"
          code={`<img src="${url}" alt="${card.title}" />`}
        />
      </CodeWrapper>
    </FormWrapper>
  );
};

export default PageSeven;
