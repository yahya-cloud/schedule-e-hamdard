"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = exports.decryptString = exports.encryptString = exports.verifyToken = exports.issueToken = void 0;
const crypto_1 = __importDefault(require("crypto"));
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const constants_1 = require("../libs/constants");
const keys_1 = require("../config/keys");
const { NUMBER_STRING, ALPHABET_STRING } = constants_1.constants;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const issueToken = function (id) {
    return jsonwebtoken_1.default.sign({ user_id: id }, keys_1.JWT.secret, {
        expiresIn: keys_1.JWT.expiresIn,
    });
};
exports.issueToken = issueToken;
const verifyToken = function (token) {
    return __awaiter(this, void 0, void 0, function* () {
        const decoded = jsonwebtoken_1.default.verify(token, keys_1.JWT.secret);
        return decoded;
    });
};
exports.verifyToken = verifyToken;
const encryptString = (text) => {
    let iv = crypto_1.default.randomBytes(keys_1.auth.IV_LENGTH);
    const key = crypto_1.default
        .createHash("sha256")
        .update(String(keys_1.auth.ENCRYPTION_KEY))
        .digest("base64")
        .slice(0, 32);
    let cipher = crypto_1.default.createCipheriv(keys_1.auth.ALGORITHM, key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
};
exports.encryptString = encryptString;
const decryptString = (text) => {
    let textParts = text.split(":");
    let iv = Buffer.from(textParts.shift(), "hex");
    let key = crypto_1.default
        .createHash("sha256")
        .update(String(keys_1.auth.ENCRYPTION_KEY))
        .digest("base64")
        .slice(0, 32);
    let encryptedText = Buffer.from(textParts.join(":"), "hex");
    let decipher = crypto_1.default.createDecipheriv(keys_1.auth.ALGORITHM, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};
exports.decryptString = decryptString;
const generatePassword = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let password = utilLib_1.default.getCode(`${NUMBER_STRING}${ALPHABET_STRING}`, 5, "");
        password = (0, exports.encryptString)(password);
        return password;
    });
};
exports.generatePassword = generatePassword;
