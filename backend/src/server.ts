import express from "express";
import mongoose from "mongoose";
import http from "http";
import connectDB from "./config/connectDatabase";
import chalk from "chalk";

import useRoutes from "./routes/v1";
import addMiddleWare from "./middlewares";

const app = express();
const PORT = process.env.PORT || 5000;
const httpServer = new http.Server(app);

connectDB();
addMiddleWare(app);
useRoutes(app);

app.use("/", (req, res) =>
  res.send(`
  <h1>Server is Running :)))</h1>
`),
);

httpServer.listen(PORT, () =>
  console.log(chalk.blueBright(`Express Server listening to port ${PORT}`)),
);
