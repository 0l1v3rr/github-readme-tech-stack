import FormWrapper from "../ui/FormWrapper";
import { useCardUrl } from "../../hooks/useCardUrl";
import { useMultistepContext } from "../../hooks/useMultistepContext";

const PageSeven = () => {
  const { card } = useMultistepContext();
  const url = useCardUrl();

  return (
    <FormWrapper title="Your Card" className="items-center">
      <img
        className="select-none"
        width={`${card.width}px`}
        src={url}
        alt={card.title}
      />
    </FormWrapper>
  );
};

export default PageSeven;
