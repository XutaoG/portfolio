import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import projectRouter from "./routes/projects.js";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

// * Connect to MongoDB
const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Database connection successful");
	} catch (err) {
		console.log(err);
	}
};

connectToDb();

// * Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// * Use routers
app.use("/projects", projectRouter);

// * Listen for connections
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
