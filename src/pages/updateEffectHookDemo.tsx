import { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

const UpdateEffectHookDemo = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    alert(`count: ${count}`);
  }, [count]);

  return (
    <div className="">
      <div className="">Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>count +1</button>
    </div>
  );
};

export default UpdateEffectHookDemo;
