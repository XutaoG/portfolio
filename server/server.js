import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import projectsRouter from "./routes/projectRoutes.js";
import cors from "cors";

const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;

// * Connect to MongoDB
(async function run() {
	try {
		await mongoose.connect(mongodbUri);
		console.log("Successfully connected to MongoDB");
	} catch (err) {
		console.log(
			"An error has occurred while connecting to MongoDB: " + err.message
		);
	}
})();

// * Create Express app
const app = express();

app.use(cors());

app.use(express.json());

// * Connect to projects router
app.use("/project", projectsRouter);

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});