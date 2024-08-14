import express from "express";
import Project from "../models/projectSchema.js";

const projectRouter = express.Router();

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
			res.status(404).json({ error: "Project not found" });
			return;
		}
		res.status(200).json(findProject);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

projectRouter.post("/", async (req, res) => {
	try {
		// const newProject = await Project.create({
		// 	title: "DevFusion",
		// 	description: "Online project collaboration platform.",
		// 	projectType: "Fullstack Project",
		// 	startDate: new Date(2024, 8),
		// 	endDate: new Date(2024, 8),
		// 	role: "Frontend Developer",
		// 	link: "https://github.com/Gersh01/Dev-Fusion",
		// 	technologies: ["React", "Express", "MongoDB", "NodeJS"],
		// 	images: ["/"],
		// });

		const newProject = req.body;
		await newProject.save();
		res.status(200).json(newProject);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

projectRouter.delete("/:id", async (req, res) => {
	try {
		await Project.findByIdAndDelete(req.params.id);
		res.sendStatus(204);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

projectRouter.patch("/:id", async (req, res) => {
	try {
		const projectId = req.params.id;
		const updatedProjectData = req.body;

		const updatedProject = await Project.findByIdAndUpdate(
			projectId,
			updatedProjectData,
			{
				new: true,
				runValidators: true,
			}
		);

		if (!updatedProject) {
			return res.status(404).json({ error: "Project not found" });
		}
		res.status(200).json(updatedProject);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

export default projectRouter;
