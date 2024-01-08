interface Project {
	id: string;
	img: string;
	alt: string;
	title: string;
	description: string;
	techs: string[];
	hasApp: boolean;
	webRepo: string;
	appRepo: string;
	appUrl?: string;
	webUrl?: string;
}
