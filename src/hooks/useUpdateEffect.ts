import { useEffect, useRef } from "react";

type Props<T> = {
  dependencyArray: T[];
  effect: () => void;
};

const useUpdateEffect = <T>(props: Props<T>) => {
  const { dependencyArray, effect } = props;

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      effect();
    }
  }, dependencyArray);
};

export default useUpdateEffect;
