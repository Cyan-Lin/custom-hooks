import { useState } from "react";

type ToggleType = [boolean, (value?: boolean) => void];

const useToggle = (defaultValue: boolean): ToggleType => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
