import { useEffect, useRef } from "react";

type Callback = () => void;
type Dependencies<T> = T[];

const useUpdateEffect = <T>(
  callback: Callback,
  dependencies: Dependencies<T>
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      callback();
    }
  }, dependencies);
};

export default useUpdateEffect;
