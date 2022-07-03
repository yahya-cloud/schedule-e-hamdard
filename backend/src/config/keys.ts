import dotenv from "dotenv";

dotenv.config();

export const auth = {
  ALGORITHM: process.env.ALGORITHM || "",
  IV_LENGTH: Number(process.env.IV_LENGTH) || 1,
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || "some key",
};

export const JWT = {
  secret: process.env.JWT_SECRET || "secret",
  expiresIn: "7d",
};

export const CONNECTION_URL = process.env.CONNECTION_URL!;
export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
