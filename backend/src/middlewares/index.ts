import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import jwtCookieMiddleware from "./jwtAuth";
import isStaff from "./staff";
import { CLIENT_URL } from "../config/keys";

const corsOptions = {
  origin: CLIENT_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type",
  credentials: true,
};

const addMiddleWare = (app: Express) => {
  app.use(cors(corsOptions));
  app.set("trust proxy", 1);
  app.use(express.json());
  app.use(cookieParser()); // Parse cookies
  app.use(express.urlencoded({ extended: true }));

  if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }

  app.use(jwtCookieMiddleware);
  app.use(isStaff);
};

export default addMiddleWare;
