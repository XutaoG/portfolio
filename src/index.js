import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`LOG: Server is running at http://localhost:${port}`);
});
