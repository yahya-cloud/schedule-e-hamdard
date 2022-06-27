import {
  apiMethod,
  RequestBodyType,
  ResponseBodyType,
  unknownObject,
} from "./global";

interface UserType {
  _id: string;
  photo: string;
  unique_id: string;
  name: string;
  email: string;
  phone_number: number;
  user_type: string;
  __t: string;
}

interface RequestMessage {
  message: string;
  type: string;
}

type UserContextType = {
  user: User | null;
  message: RequestMessage | null;
  makeApiCall: (
    url: string,
    payload: RequestBodyType,
    method: apiMethod
  ) => Promise<unknownObject | undefined>;
  setUser: (user: User) => void;
};

interface StaffSchemaType extends UserSchemaType {
  unique_id: string;
  photo: string;
}

export default UserContextType;
export { UserType, RequestMessage, StaffSchemaType, fetchedUser };
