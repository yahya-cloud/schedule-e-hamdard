import {
  apiMethod,
  RequestBodyType,
  SectionType,
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
  password: string;
  __t: string;
}

interface RequestMessage {
  message: string;
  severity: "success" | "error";
}

type UserContextType = {
  user: UserType;
  message: RequestMessage;
  makeApiCall: (
    url: string,
    payload: RequestBodyType,
    method: apiMethod,
  ) => Promise<unknownObject | undefined>;
  setUser: (user: UserType) => void;
  logout: () => Promise<void>;
  loading: boolean;
};

interface StaffSchemaType extends UserType {
  unique_id: string;
  photo: string;
  sections: SectionType[];
}

interface StudentSchemaType extends UserType {
  en_number: string;
  section: Types.ObjectId | undefined;
  password: string;
}

export default UserContextType;
export { UserType, RequestMessage, StudentSchemaType, StaffSchemaType };
