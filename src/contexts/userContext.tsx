import React, { useState, useEffect, createContext } from "react";
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

interface Props {
  children: React.ReactNode;
}

let defaultValues = {
  user: {
    _id: "",
    photo: "",
    unique_id: "",
    name: "",
    email: "",
    phone_number: 0,
    password: "",
    user_type: "",
    __t: "",
  },
  message: { message: "", type: "" },
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>({ ...defaultValues.user });
  const [message, setMessage] = useState<RequestMessage>({
    ...defaultValues.message,
  });

  const makeApiCall = async (
    url: string,
    payload: RequestBodyType,
    method: apiMethod
  ): Promise<unknownObject | undefined> => {
    try {
      const result: ResponseBodyType = await makeRequest(url, payload, method);
      setMessage({ message: result.message, type: "success" });
      return result.data;
    } catch (error) {
      //@ts-ignore
      if (error.response) {
        console.log(error);
        //@ts-ignore
        setMessage({ message: error.response.data.message, type: "error" });
      }
    }
  };

  useEffect(() => {
    async function getUser() {
      const fetchedUser = (await makeApiCall(
        "/user/getUser",
        {},
        "get"
      )) as UserType;
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    }
    getUser();
  }, []);

  const logout = async () => {
    await makeApiCall("/user/logout", {}, "get");
    setUser({ ...defaultValues.user });
  };

  return (
    <UserContext.Provider
      value={{ user, message, logout, makeApiCall, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserProvider;
