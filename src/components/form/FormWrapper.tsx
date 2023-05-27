import Button from "@/components/ui/Button";
import { useMultistepContext } from "@/hooks/useMultistepContext";
import { cn } from "@/lib/utils/cn";
import { FormHTMLAttributes, ReactNode } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgEnter, CgErase } from "react-icons/cg";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children?: ReactNode;
}

const FormWrapper = ({ title, children, className, ...props }: Props) => {
  const {
    isFirstPage,
    isLastPage,
    currentPageIndex,
    previousPage,
    nextPage,
    totalPages,
    resetCard,
  } = useMultistepContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reportValidity();
        nextPage();
      }}
      className="h-full w-full rounded-md border border-gh-border shadow-card"
      {...props}
    >
      <div className="flex select-none items-center gap-4 rounded-tl-md rounded-tr-md border-b border-gh-border bg-gh-bg-secondary px-4 py-3 leading-none">
        <AiOutlineSetting className="text-gh-text-secondary" />

        <h2 className="font-semibold text-gh-text">{title}</h2>

        <div className="ml-auto flex items-center gap-0.5 text-gh-text-secondary">
          <span className="text-gh-blue">#{currentPageIndex + 1}</span>
          <span>/</span>
          <span>{totalPages}</span>
        </div>
      </div>

      <div className={cn("flex w-full flex-col gap-2 px-4 py-2", className)}>
        {children}
      </div>

      <div className="flex items-center gap-2 border-t border-gh-border px-4 py-2">
        <Button
          onClick={resetCard}
          label="Reset"
          variant="danger"
          size="small"
          icon={<CgErase />}
        />

        <Button
          onClick={previousPage}
          disabled={isFirstPage}
          label="Previous"
          variant="secondary"
          size="small"
          className="ml-auto"
        />

        <Button
          type="submit"
          disabled={isLastPage}
          label="Next"
          variant="success"
          size="small"
          icon={<CgEnter />}
        />
      </div>
    </form>
  );
};

export default FormWrapper;
