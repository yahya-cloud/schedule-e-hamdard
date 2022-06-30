const SERVER_URL = "http://localhost:4000/v1";
const auth = {
  ALGORITHM: process.env.REACT_APP_ALGORITHM || "",
  IV_LENGTH: Number(process.env.REACT_APP_IV_LENGTH) || 1,
  ENCRYPTION_KEY: process.env.REACT_APP_ENCRYPTION_KEY || "some key",
};

export { SERVER_URL, auth };
