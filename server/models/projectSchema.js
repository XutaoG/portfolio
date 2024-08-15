import { Schema, model } from "mongoose";

const technologySchema = Schema({
	technology: {
		type: Schema.Types.String,
		required: true,
	},
	description: {
		type: Schema.Types.String,
		required: true,
	},
});

const featureSchema = Schema({
	feature: {
		type: Schema.Types.String,
		required: true,
	},
	description: {
		type: Schema.Types.String,
		required: true,
	},
});

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
		type: [technologySchema],
		required: true,
		validate: [
			(val) => {
				return val.length >= 1;
			},
			"technologies cannot be empty",
		],
	},
	features: {
		type: [featureSchema],
		required: true,
		validate: [
			(val) => {
				return val.length >= 1;
			},
			"features cannot be empty",
		],
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
		validate: [
			(val) => {
				return val.length >= 1;
			},
			"images cannot be empty",
		],
	},
});

export default model("projects", projectSchema);
