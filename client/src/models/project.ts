export interface Project {
	_id: string;
	startDate: string;
	endDate: string;
	title: string;
	description: string;
	projectType: string;
	role: string;
	link: string;
	technologies: { technology: string; description: string }[];
	features: { feature: string; description: string }[];
	images: string[];
}

// export const projects: project[] = [
// 	{
// 		title: "DevFusion",
// 		description: "Online project collaboration platform.",
// 		projectType: "Fullstack Project",
// 		startDate: new Date(2024, 8),
// 		endDate: new Date(2024, 8),
// 		role: "Frontend Developer",
// 		link: "https://github.com/Gersh01/Dev-Fusion",
// 		technologies: ["React", "Express", "MongoDB", "NodeJS"],
// 	},
// 	{
// 		title: "Project 2",
// 		description: "Online project collaboration platform.",
// 		projectType: "Fullstack Project",
// 		startDate: new Date(2024, 7),
// 		endDate: new Date(2024, 8),
// 		role: "Frontend Developer",
// 		link: "https://github.com/Gersh01/Dev-Fusion",
// 		technologies: ["React", "Express", "MongoDB", "NodeJS"],
// 	},
// 	{
// 		title: "Project 3",
// 		description: "Online project collaboration platform.",
// 		projectType: "Fullstack Project",
// 		startDate: new Date(2024, 7),
// 		endDate: new Date(2024, 8),
// 		role: "Frontend Developer",
// 		link: "https://github.com/Gersh01/Dev-Fusion",
// 		technologies: ["React", "Express", "MongoDB", "NodeJS"],
// 	},
// 	{
// 		title: "Project 4",
// 		description: "Online project collaboration platform.",
// 		projectType: "Fullstack Project",
// 		startDate: new Date(2024, 7),
// 		endDate: new Date(2024, 8),
// 		role: "Frontend Developer",
// 		link: "https://github.com/Gersh01/Dev-Fusion",
// 		technologies: ["React", "Express", "MongoDB", "NodeJS"],
// 	},
// 	{
// 		title: "Project 5",
// 		description: "Online project collaboration platform.",
// 		projectType: "Fullstack Project",
// 		startDate: new Date(2024, 7),
// 		endDate: new Date(2024, 8),
// 		role: "Frontend Developer",
// 		link: "https://github.com/Gersh01/Dev-Fusion",
// 		technologies: ["React", "Express", "MongoDB", "NodeJS"],
// 	},
// 	{
// 		title: "Project 6",
// 		description: "Online project collaboration platform.",
// 		projectType: "Fullstack Project",
// 		startDate: new Date(2024, 7),
// 		endDate: new Date(2024, 8),
// 		role: "Frontend Developer",
// 		link: "https://github.com/Gersh01/Dev-Fusion",
// 		technologies: ["React", "Express", "MongoDB", "NodeJS"],
// 	},
// ];

// export Project;
