import { RefObject, useEffect, useRef } from "react";

export const useOuterClick = <T extends HTMLElement>(
  callback: () => void
): RefObject<T | null> => {
  // eslint-disable-next-line
  const callbackRef = useRef<() => void>(() => {});
  const ref = useRef<T>(null);

  // update the callback on each render
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return ref;
};
