const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const auth = {
  ALGORITHM: process.env.REACT_APP_ALGORITHM || "",
  IV_LENGTH: Number(process.env.REACT_APP_IV_LENGTH) || 1,
  ENCRYPTION_KEY: process.env.REACT_APP_ENCRYPTION_KEY || "some key",
};

const rootRoute = {
  admin: "/admin",
  teacher: "/teacher",
  student: "/student/section",
};

export { SERVER_URL, auth, rootRoute };
