export interface Project {
	_id: string;
	startDate: string;
	endDate: string;
	title: string;
	description: string;
	projectType: string;
	role: string;
	link: string;
	responsibility: string;
	technologies: { technology: string; description: string }[];
	features: { feature: string; description: string }[];
	images: string[];
}
