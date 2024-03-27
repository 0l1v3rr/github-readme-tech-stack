import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React, { useState } from "react";

interface LineCountAdjusterProps {
  initialCount: number;
  onChange: (value: number) => void;
}

const LineCountAdjuster: React.FC<LineCountAdjusterProps> = ({
  initialCount,
  onChange,
}) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowInput(!showInput)}
        variant="secondary"
        size="small"
      >
        Lines
      </Button>
      {showInput && (
        <Input
          id="lines"
          type="number"
          min={1}
          max={6}
          value={initialCount}
          onChange={(e) => onChange(e.target.valueAsNumber)}
          className="w-10 h-7 py-0  text-center "
        />
      )}
    </>
  );
};

export default LineCountAdjuster;
