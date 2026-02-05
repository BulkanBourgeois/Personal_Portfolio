export type Project = {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	tech: string[];
	links?: {
		github?: string;
		demo?: string;
	};
	image?: string; // e.g. "/images/my-project.png"
};

export const projects: Project[] = [
	{
		id: 'portfolio-mvp',
		title: '3D Portfolio (MVP)',
		subtitle: 'Threlte + SvelteKit',
		description:
			'Interactive one-page portfolio: a 3D room with a CRT TV that acts as the UI to browse projects.',
		tech: ['SvelteKit', 'Threlte', 'Three.js', 'Vercel'],
		links: {
			github: 'https://github.com/your-username/your-repo',
			demo: 'https://your-site.vercel.app'
		}
	}
];

