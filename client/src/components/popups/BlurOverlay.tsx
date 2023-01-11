import { FC } from "react";

interface OverlayProps {
  isActive: boolean;
}

const BlurOverlay: FC<OverlayProps> = (props) => {
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 transition-all duration-300 
      z-20 ${
        props.isActive
          ? "backdrop-blur-sm bg-black/[.5]"
          : "pointer-events-none"
      }`}
    />
  );
};

export default BlurOverlay;
