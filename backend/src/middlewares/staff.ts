import { NextFunction, Request, Response } from "express";
import { constants } from "../libs/constants";
import utilLib from "../libs/utilLib";

export default async (req: Request, res: Response, next: NextFunction) => {
  if (utilLib.byPass(req.originalUrl)) {
    return next();
  }
  //CUD - Create, Update, Delete
  if (utilLib.isCUD(req.method)) {
    let user = (req as any)!.user.user_type;
    let isStaff = constants.STAFF.indexOf(user) > -1;
    if (isStaff) {
      return next();
    } else {
      res.status(404).json({ message: "Not a staff member" });
    }
  } else {
    return next();
  }
};
