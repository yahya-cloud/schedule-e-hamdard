import crypto from "crypto";
import utilLib from "../libs/utilLib";
import { constants } from "../libs/constants";
import { JWT, auth } from "../config/keys";
const { NUMBER_STRING, ALPHABET_STRING } = constants;

import jwt, { JwtPayload } from "jsonwebtoken";

export const issueToken = function (id: string) {
  return jwt.sign({ user_id: id }, JWT.secret, {
    expiresIn: JWT.expiresIn,
  });
};

export const verifyToken = async function (token: string) {
  const decoded = jwt.verify(token, JWT.secret) as JwtPayload;
  return decoded;
};

export const encryptString = (text: string) => {
  let iv = crypto.randomBytes(auth.IV_LENGTH);
  const key = crypto
    .createHash("sha256")
    .update(String(auth.ENCRYPTION_KEY))
    .digest("base64")
    .slice(0, 32);
  let cipher = crypto.createCipheriv(auth.ALGORITHM, key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
};

export const decryptString = (text: string) => {
  let textParts: Array<string> = text.split(":");
  let iv = Buffer.from(textParts.shift()!, "hex");
  let key = crypto
    .createHash("sha256")
    .update(String(auth.ENCRYPTION_KEY))
    .digest("base64")
    .slice(0, 32);
  let encryptedText = Buffer.from(textParts.join(":"), "hex");
  let decipher = crypto.createDecipheriv(auth.ALGORITHM, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

export const generatePassword = async function () {
  let password = utilLib.getCode(`${NUMBER_STRING}${ALPHABET_STRING}`, 5, "");
  password = encryptString(password);
  return password;
};

export const isValidEn_Number = (en_number: string): boolean => {
  let isValid = constants.EN_R_EXPRESSION.test(en_number);
  return isValid;
};
