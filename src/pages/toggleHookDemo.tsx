import useToggle from "../hooks/useToggle";

const ToggleHookDemo = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className="">
      <div className="">目前的toggle value: {value.toString()}</div>
      <button onClick={() => toggleValue()}>純粹toggle</button>
      <button onClick={() => toggleValue(true)}>toggle to true</button>
      <button onClick={() => toggleValue(false)}>toggle to false</button>
    </div>
  );
};

export default ToggleHookDemo;
