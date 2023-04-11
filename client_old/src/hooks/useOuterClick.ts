import { RefObject, useEffect, useRef } from "react";

export const useOuterClick = (
  callback: () => void
): RefObject<HTMLDivElement> => {
  const callbackRef = useRef<() => void>(() => {});
  const ref = useRef<HTMLDivElement>(null);

  // update the callback on each render
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return ref;
};
