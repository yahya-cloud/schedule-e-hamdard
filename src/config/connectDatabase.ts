import { connect } from "mongoose";
import chalk from "chalk";
import { CONNECTION_URL } from "./keys";

const connectDB = async () => {
	try {
		const connection = await connect(CONNECTION_URL);
		console.log(chalk.grey("MongoDB Connected :D"));
		return connection;
	} catch (err) {
		if (err instanceof Error) console.error(chalk.redBright(err.message));
	}
};

export default connectDB;
