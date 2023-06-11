import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { useCallback, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

type Props = {
  onPopupCloseBtnClick: () => void;
  file: File | null;
  onFileUpload: (file: File) => void;
  onIconClear: () => void;
};

const Upload = ({
  onPopupCloseBtnClick,
  onFileUpload,
  file,
  onIconClear,
}: Props) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!e.dataTransfer.files || !e.dataTransfer.files[0]) {
        setIsError(true);
        return;
      }

      const file = e.dataTransfer.files[0];

      // the file has to be svg
      if (!file.name.endsWith(".svg")) {
        setIsError(true);
        return;
      }

      onFileUpload(file);
      setIsError(false);
      setIsDraggedOver(false);
      onPopupCloseBtnClick();
    },
    [onPopupCloseBtnClick, onFileUpload]
  );

  return (
    <>
      <div className="select-none border-b border-gh-border bg-gh-bg-secondary px-3 py-2 font-semibold text-gh-text">
        Upload custom SVG file
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragEnter={() => {
          setIsDraggedOver(true);
          setIsError(false);
        }}
        onDragLeave={() => {
          setIsDraggedOver(false);
          setIsError(false);
        }}
        className={cn(
          "z-50 mx-3 my-1 flex select-none flex-col items-center justify-center rounded-sm border px-4 py-4 text-5xl text-gh-text transition-all duration-150",
          isDraggedOver
            ? "border-solid border-gh-gray-active bg-gh-bg-secondary"
            : "border-dashed border-gh-border",
          isError ? "border-gh-red-active text-gh-red-active" : ""
        )}
      >
        <AiOutlineCloudUpload />
        <div className="text-base text-gh-text-secondary">
          {file === null ? (
            "Drop anywhere to import"
          ) : (
            <>
              <span className="text-gh-lime">{file.name}</span> selected
            </>
          )}
        </div>
      </div>

      <div className="border-border flex items-stretch gap-2 border-t border-gh-border px-3 py-2">
        <Button
          size="small"
          variant="secondary"
          onClick={() => onPopupCloseBtnClick()}
        >
          Cancel
        </Button>

        {file !== null && (
          <Button
            size="small"
            variant="danger"
            onClick={() => {
              onIconClear();
              onPopupCloseBtnClick();
            }}
          >
            Remove icon
          </Button>
        )}
      </div>
    </>
  );
};

export default Upload;
