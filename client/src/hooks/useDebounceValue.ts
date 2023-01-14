import { useEffect, useState } from "react";

export const useDebounceValue = <T>(value: T, time: number = 200): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), time);

    return () => clearTimeout(timeout);
  }, [value, time]);

  return debounceValue;
};
