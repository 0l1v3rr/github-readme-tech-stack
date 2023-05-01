import { useCallback, useState } from "react";
import Button from "../ui/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { cn } from "../ui/utils";

type Props = {
  closePopup: () => void;
  file: File | null;
  uploadFile: (file: File) => void;
  clearIcon: () => void;
};

const Upload = ({ closePopup, uploadFile, file, clearIcon }: Props) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
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

    uploadFile(file);
    setIsError(false);
    setIsDraggedOver(false);
    closePopup();
  }, []);

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
          onClick={() => closePopup()}
          label="Cancel"
        />

        {file !== null && (
          <Button
            size="small"
            variant="danger"
            onClick={() => {
              clearIcon();
              closePopup();
            }}
            label="Remove icon"
          />
        )}
      </div>
    </>
  );
};

export default Upload;
