import dotenv from "dotenv";
import connectDB from "../config/connectDatabase";
import { BatchModel, SectionModel, UserModel } from "../models";
import batch from "./batch";
import section from "./section";
import users from "./users";
import chalk from "chalk";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await BatchModel.deleteMany();
    await SectionModel.deleteMany();
    await UserModel.deleteMany();

    await BatchModel.insertMany(batch);
    await SectionModel.insertMany(section);
    await UserModel.insertMany(users);

    console.log(chalk.green("Data Added Successfully:)"));
    process.exit();
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.redBright(error.message));
      process.exit(1);
    }
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await BatchModel.deleteMany();
    await SectionModel.deleteMany();
    await UserModel.deleteMany();
    console.log(chalk.green("Data Destroyed Successfully:)"));
    process.exit();
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.redBright(error.message));
      process.exit(1);
    }
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
