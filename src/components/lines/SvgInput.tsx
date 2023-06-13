import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface SvgInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SvgInput = forwardRef<HTMLInputElement, SvgInputProps>(
  ({ className, required, value = "", onBtnClick, ...rest }, ref) => {
    return (
      <div className={cn("group flex items-stretch", className)}>
        <Input
          ref={ref}
          value={value}
          type="text"
          required={required}
          className="z-10 rounded-br-none rounded-tr-none transition-none [border-right:none!important]"
          {...rest}
        />

        <Button
          tabIndex={-1}
          onClick={onBtnClick}
          variant="secondary"
          className="rounded-bl-none rounded-tl-none bg-gh-bg px-3 text-lg"
          icon={<AiOutlineCloudUpload />}
        />
      </div>
    );
  }
);

SvgInput.displayName = "SvgInput";

export default SvgInput;
