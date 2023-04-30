import { InputHTMLAttributes, forwardRef } from "react";
import Input from "../ui/Input";
import { cn } from "../ui/utils";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Button from "../ui/Button";

// eslint-disable-next-line
interface SvgInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SvgInput = forwardRef<HTMLInputElement, SvgInputProps>(
  ({ className, required, value = "", onBtnClick, ...props }, ref) => {
    return (
      <div className={cn("group flex items-stretch", className)}>
        <Input
          ref={ref}
          value={value}
          type="text"
          required={required}
          pattern={`^${required ? "" : "[]{0}|"}#[a-fA-F0-9]{6}$`}
          className="z-10 rounded-br-none rounded-tr-none transition-none [border-right:none!important]"
          {...props}
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

export default SvgInput;
