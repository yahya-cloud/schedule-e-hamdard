import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT } from "../config/keys";
import utilLib from "../libs/utilLib";

const verifyToken = async (token: string) => {
  const decoded = jwt.verify(token, JWT.secret) as JwtPayload;
  const user = await UserModel.findById(decoded.user_id);
  return user;
};

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (utilLib.byPass(req.originalUrl)) {
      return next();
    }

    const token = req.cookies.jwt;
    if (token) {
      const user = await verifyToken(token);
      if (!user) {
        throw new Error("User not authenticated");
      }
      (req as any).user = user;
      next();
    } else {
      throw new Error("User not authenticated");
    }
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};
