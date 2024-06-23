import { Schema, model } from "mongoose";

const projectSchema = Schema({
	title: {
		type: Schema.Types.String,
		required: true,
	},
	category: {
		type: Schema.Types.String,
		required: true,
	},
	year: {
		type: Schema.Types.Number,
		required: true,
	},
	description: {
		type: Schema.Types.String,
		required: true,
	},
	technologies: {
		type: [Schema.Types.String],
		required: true,
	},
	keyFeatures: {
		type: [Schema.Types.String],
	},
	role: {
		type: Schema.Types.String,
	},
	link: {
		type: Schema.Types.String,
		required: true,
	},
	images: {
		type: [Schema.Types.String],
		required: true,
	},
});

export default model("projects", projectSchema);
