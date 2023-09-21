import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type UserDataTypes = {
  authToken: string;
  userName: string;
  isLoggedIn: boolean;
};

const useUserData = () => {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  console.log(userData);
  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    const parsedUserData = JSON.parse(userDataCookie || "{}") as UserDataTypes;
    setUserData(parsedUserData);

    const storageEventListener = (e: StorageEvent) => {
      if (e.key === "useData") {
        const upadteUserData = JSON.parse(e.newValue || "{}") as UserDataTypes;
        setUserData(upadteUserData);
      }
    };

    window.addEventListener("storage", storageEventListener);

    return () => {
      window.removeEventListener("storage", storageEventListener);
    };
  }, []);

  return userData;
};

export default useUserData;
