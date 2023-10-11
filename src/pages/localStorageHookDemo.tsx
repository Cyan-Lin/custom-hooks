import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageHookDemo = () => {
  const [value1, setValue1] = useLocalStorage({
    key: "username",
    initialValue: "initial username",
  });
  const [value2, setValue2] = useLocalStorage({
    key: "password",
    initialValue: () => "initial password",
  });

  useEffect(() => {
    console.log("value1", value1);
    console.log("value2", value2);
  }, []);

  return (
    <div className="">
      <div className="">
        <label htmlFor="username">Username: </label>
        <input
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          type="text"
          id="username"
        />
      </div>
      <div className="">
        <label htmlFor="password">Password: </label>
        <input
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          type="text"
          id="password"
        />
      </div>
    </div>
  );
};

export default LocalStorageHookDemo;
