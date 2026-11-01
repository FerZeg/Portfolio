// The only source of content for the site. Every page reads from here.

export type Lang = 'en' | 'es';

export const links = {
	linkedin: 'https://www.linkedin.com/in/fernando-estrada-gallardo/',
	github: 'https://github.com/FerZeg',
	email: 'fern.j.e.g@gmail.com',
};

export const atlasStart = '2024-03';

// Whole years and months worked since a YYYY-MM start, counting from the start month.
export function tenure(since: string, lang: Lang, now: Date = new Date()): string {
	const [year, month] = since.split('-').map(Number);
	const total = (now.getFullYear() - year) * 12 + now.getMonth() + 1 - month;
	const years = Math.floor(total / 12);
	const months = total % 12;
	const words = lang === 'es'
		? { y: ['año', 'años'], m: ['mes', 'meses'] }
		: { y: ['year', 'years'], m: ['month', 'months'] };
	const parts = [];
	if (years) parts.push(`${years} ${words.y[years === 1 ? 0 : 1]}`);
	if (months) parts.push(`${months} ${words.m[months === 1 ? 0 : 1]}`);
	return parts.join(lang === 'es' ? ' y ' : ' and ');
}

type Certification = {
	name: string;
	issuer: string;
	year?: string;
	url?: string;
	credentialId?: string;
};

export const certifications: Certification[] = [
	{
		name: 'Claude Certified Architect - Foundations',
		issuer: 'Anthropic',
		year: '2026',
		url: 'https://www.credly.com/badges/a0cb011a-7ead-4716-8cbc-9c93a9386595',
	},
	{
		name: 'Certified Mid-Level Vue.js Developer',
		issuer: 'Certificates.dev',
		year: '2025',
		url: 'https://certificates.dev/c/a06e7c70-d1d7-41a2-a213-84ef1d21ec3c',
	},
	{
		name: 'Salesforce Certified Platform Developer I',
		issuer: 'Salesforce',
		year: '2024',
		credentialId: '5110562',
	},
];

export const tech = ['Laravel', 'Vue', 'React', 'Astro', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Redis', 'Git', 'Docker', 'Claude', 'Salesforce', 'Apex', 'LWC'];

export const project = {
	name: 'Viajes',
	url: 'https://viajes.fernandoestrada.dev',
	stack: ['Vue', 'Hono', 'Cloudflare Workers', 'D1', 'R2'],
};

export const cv = {
	en: {
		pageTitle: 'Fernando Estrada, full stack developer',
		description: 'Fernando Estrada is a full stack developer from Segovia, Spain, working at Atlas Cloud.',
		name: 'Fernando Estrada',
		role: 'Full stack developer',
		location: 'Segovia, Spain',
		otherLang: { label: 'Español', code: 'es' as Lang },
		headings: {
			work: 'Work',
			education: 'Education',
			certifications: 'Certifications',
			projects: 'Projects',
			tech: 'Tools',
			contact: 'Contact',
		},
		job: {
			company: 'Atlas Cloud S.L.',
			period: 'March 2024 to present',
			summary: 'I joined Atlas Cloud as an intern and stayed on as a full stack developer. I work mainly with Laravel, Vue, SQL and Salesforce.',
		},
		education: {
			school: 'IES María Moliner',
			title: 'Higher Education Diploma in Web Application Development',
			period: '2022 to 2024',
		},
		projectSummary: 'A web app for planning group trips: itinerary, packing, shared expenses and photos. People use it on real trips.',
		certificationsLink: 'All certifications on LinkedIn',
		builtWith: 'Built with',
	},
	es: {
		pageTitle: 'Fernando Estrada, desarrollador full stack',
		description: 'Fernando Estrada es desarrollador full stack de Segovia, España, y trabaja en Atlas Cloud.',
		name: 'Fernando Estrada',
		role: 'Desarrollador full stack',
		location: 'Segovia, España',
		otherLang: { label: 'English', code: 'en' as Lang },
		headings: {
			work: 'Trabajo',
			education: 'Formación',
			certifications: 'Certificaciones',
			projects: 'Proyectos',
			tech: 'Herramientas',
			contact: 'Contacto',
		},
		job: {
			company: 'Atlas Cloud S.L.',
			period: 'Marzo de 2024 a la actualidad',
			summary: 'Entré en Atlas Cloud en prácticas y me quedé como desarrollador full stack. Trabajo sobre todo con Laravel, Vue, SQL y Salesforce.',
		},
		education: {
			school: 'IES María Moliner',
			title: 'Grado Superior en Desarrollo de Aplicaciones Web',
			period: '2022 a 2024',
		},
		projectSummary: 'Una aplicación web para planificar viajes en grupo: itinerario, maleta, gastos compartidos y fotos. Se usa en viajes reales.',
		certificationsLink: 'Todas las certificaciones en LinkedIn',
		builtWith: 'Hecho con',
	},
};
