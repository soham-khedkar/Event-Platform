import React, { useEffect, useState } from "react";
import { SDKProvider, retrieveLaunchParams } from "@tma.js/sdk-react"; 
import { TmaContext } from "./context";

export function TmaProvider({ children }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [telegramUser, setTelegramUser] = useState({});
  const [err, setErr] = useState("");


  function fetchTelegramUser() {
    try {
      const launchParams = retrieveLaunchParams();
      const user = launchParams.initData?.user;
      console.log({user});
      if (!user) {
        throw new Error("User not found");
      }
      setTelegramUser(user);
    } catch (error) {
        console.log(error)
        setErr(JSON.stringify(error,null, 2))
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTelegramUser();
  }, []);

  if (isLoading) return <div>Loading...</div>; // Replace with your loading indicator
  if (!isError) return <div>Error occurred...

    <p>
       error {err}
    </p>
  </div>; // Replace with your error handling

  return (
    <TmaContext.Provider value={{ user: telegramUser }}>
      <SDKProvider acceptCustomStyles debug>
        {children}
      </SDKProvider>
    </TmaContext.Provider>
  );
}
