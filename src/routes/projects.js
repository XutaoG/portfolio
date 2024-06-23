import { Router } from "express";
import Project from "../schemas/projectSchema.js";

const projectRouter = Router();

projectRouter.post("/", async (req, res) => {
	try {
		const newProject = await Project.create({
			title: "Portfolio",
			category: "Fullstack Project",
			year: 2024,
			description:
				"blah blah blah blah blah blah blah blah blah blah blah blah",
			technologies: [
				"React",
				"Express",
				"MongoDB",
				"NodeJs",
				"MERN Stack",
			],
			keyFeatures: ["blah", "blah", "blah"],
			link: "https://www.github.com/xutaog",
			images: ["FDJSLK"],
		});
		await newProject.save();
		console.log(newProject);
		res.status(200).json(newProject);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

projectRouter.get("/", async (_, res) => {
	try {
		const projects = await Project.find();
		res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

projectRouter.get("/:id", async (req, res) => {
	try {
		const findProject = await Project.findById(req.params.id);
		if (findProject === null) {
			res.status(404).json({ error: "Invalid Project ID" });
			return;
		}
		res.status(200).json(findProject);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

export default projectRouter;
