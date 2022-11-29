import { FC, useEffect } from "react";

interface OverlayProps {
  isActive: boolean;
  closePopup?: () => void;
}

const BlurOverlay: FC<OverlayProps> = (props) => {
  useEffect(() => {
    document.body.style.overflow = props.isActive ? "hidden" : "auto";
  }, [props.isActive]);

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 transition-all duration-300 
      z-20 ${props.isActive ? "backdrop-blur-sm" : "pointer-events-none"}`}
      onClick={props.closePopup}
    />
  );
};

export default BlurOverlay;
