import {
  apiMethod,
  RequestBodyType,
  SectionType,
  unknownObject,
} from "./global";

type user_type = "teacher" | "admin" | "student";

interface UserType {
  _id: string;
  photo: string;
  unique_id: string;
  name: string;
  email: string;
  phone_number: number;
  user_type: user_type;
  password: string;
  section?: SectionType;
  __t: string;
}

interface RequestMessage {
  message: string;
  severity: "success" | "error";
}

interface UserContextType {
  user: UserType | null;
  message: RequestMessage | null;
  makeApiCall: (
    url: string,
    payload: RequestBodyType,
    method: apiMethod,
  ) => Promise<unknownObject | undefined>;
  setUser: (user: UserType) => void;
  logout: () => Promise<void>;
  loading: boolean;
}

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
