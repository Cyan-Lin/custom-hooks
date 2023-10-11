import { useEffect, useState } from "react";

type Props<T> = {
  key: string;
  initialValue: T;
};

const getSavedValue = <T>(key: string, initialValue: T) => {
  const savedValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || "")
    : null;

  if (savedValue) return savedValue; // 空字串是 falsy value

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = <T>(props: Props<T>) => {
  const { key, initialValue } = props;

  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
