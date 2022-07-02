"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const connectDatabase_1 = __importDefault(require("./config/connectDatabase"));
const chalk_1 = __importDefault(require("chalk"));
const v1_1 = __importDefault(require("./routes/v1"));
const middlewares_1 = __importDefault(require("./middlewares"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const httpServer = new http_1.default.Server(app);
(0, connectDatabase_1.default)();
(0, middlewares_1.default)(app);
(0, v1_1.default)(app);
app.use("/", (req, res) => res.send(`
  <h1>Server is Running :)))</h1>
`));
httpServer.listen(PORT, () => console.log(chalk_1.default.blueBright(`Express Server listening to port ${PORT}`)));
