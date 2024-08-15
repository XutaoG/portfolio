import express from "express";
import Project from "../models/projectSchema.js";
import cloudinary from "cloudinary";

// * Connect to Cloudinary
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET;

cloudinary.v2.config({
	cloud_name: "dd5vwykwi",
	api_key: cloudinaryApiKey,
	api_secret: cloudinaryApiSecret,
	secure: true,
});

const getCloudinaryUrl = (imageName) => {
	return cloudinary.url(imageName, {
		transformation: [
			{
				quality: "auto",
				fetch_format: "auto",
			},
			{
				width: 1200,
			},
		],
	});
};

const projectRouter = express.Router();

projectRouter.get("/", async (_, res) => {
	try {
		const projects = await Project.find();
		projects.forEach((project) => {
			project.images = [getCloudinaryUrl(project.images[0])];
		});
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
		findProject.images = findProject.images.map((imageName) => {
			return getCloudinaryUrl(imageName);
		});
		res.status(200).json(findProject);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

projectRouter.post("/", async (req, res) => {
	try {
		const newProject = await Project.create(req.body);
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
