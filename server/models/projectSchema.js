import { Schema, model } from "mongoose";

const projectSchema = Schema({
	title: {
		type: Schema.Types.String,
		required: true,
	},
	description: {
		type: Schema.Types.String,
		required: true,
	},
	role: {
		type: Schema.Types.String,
	},
	link: {
		type: Schema.Types.String,
		required: true,
	},
	projectType: {
		type: Schema.Types.String,
		required: true,
	},
	technologies: {
		type: [Schema.Types.String],
		required: true,
	},
	startDate: {
		type: Schema.Types.Date,
		required: true,
	},
	endDate: {
		type: Schema.Types.Date,
		required: true,
	},
	images: {
		type: [Schema.Types.String],
		required: true,
	},
});

export default model("projects", projectSchema);
