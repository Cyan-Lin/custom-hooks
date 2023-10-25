import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageHookDemo = () => {
  const [isUseLocalStorage, setIsUseLocalStorage] = useLocalStorage({
    key: "isUseLocalStorage",
    initialValue: "Y",
  });

  const [localStorageUsername, setLocalStorageUsername] = useLocalStorage({
    key: "username",
    initialValue: "initial username",
  });
  const [localStoragePassword, setLocalStoragePassword] = useLocalStorage({
    key: "password",
    initialValue: () => "initial password",
  });

  const [normalUsername, setNormalUsername] = useState("normal username");
  const [normalPassword, setNormalPassword] = useState("normal password");

  useEffect(() => {
    console.log("localStorageUsername", localStorageUsername);
    console.log("localStoragePassword", localStoragePassword);
    console.log("isUseLocalStorage", isUseLocalStorage);
  }, []);

  const onUsernameChange = (inputValue: string) => {
    if (isUseLocalStorage === "Y") {
      setLocalStorageUsername(inputValue);
    } else {
      setNormalUsername(inputValue);
    }
  };
  const onPasswordChange = (inputValue: string) => {
    if (isUseLocalStorage === "Y") {
      setLocalStoragePassword(inputValue);
    } else {
      setNormalPassword(inputValue);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <div className="">
        <label htmlFor="username">Username: </label>
        <input
          value={
            isUseLocalStorage === "Y" ? localStorageUsername : normalUsername
          }
          onChange={(e) => onUsernameChange(e.target.value)}
          type="text"
          id="username"
        />
      </div>
      <div className="">
        <label htmlFor="password">Password: </label>
        <input
          value={
            isUseLocalStorage === "Y" ? localStoragePassword : normalPassword
          }
          onChange={(e) => onPasswordChange(e.target.value)}
          type="text"
          id="password"
        />
      </div>
      <div className="action" style={{ marginTop: "10px" }}>
        <label htmlFor="isUseLocalStorage">使用useLocalStorage:</label>
        <select
          id="isUseLocalStorage"
          value={isUseLocalStorage}
          onChange={(e) => setIsUseLocalStorage(e.target.value)}
        >
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
      </div>
    </div>
  );
};

export default LocalStorageHookDemo;
