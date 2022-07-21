import React, { useCallback, useState, useEffect, createContext } from "react";
import UserContextType, {
  RequestMessage,
  UserType,
} from "../@types/userContext";
import {
  apiMethod,
  RequestBodyType,
  ResponseBodyType,
  unknownObject,
} from "../@types/global";
import makeRequest from "../service/api";
import { AxiosError } from "axios";

type Props = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [message, setMessage] = useState<RequestMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const makeApiCall = useCallback(
    async (
      url: string,
      payload: RequestBodyType,
      method: apiMethod,
    ): Promise<unknownObject | undefined> => {
      try {
        setLoading(true);
        const result: ResponseBodyType = await makeRequest(
          url,
          payload,
          method,
        );
        setMessage({ message: result.message, severity: "success" });
        setLoading(false);
        return result.data;
      } catch (error) {
        const err = error as AxiosError;
        setMessage({ message: err.response?.data.message, severity: "error" });
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    async function getUser() {
      const fetchedUser = (await makeApiCall(
        "/user/getUser",
        {},
        "get",
      )) as UserType;
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    }
    getUser();
  }, [makeApiCall]);

  const logout = async () => {
    await makeApiCall("/user/logout", {}, "get");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, message, logout, makeApiCall, setUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserProvider;
