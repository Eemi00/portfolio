export type Project = {
    title: string;
    description: string;
    tech: string[];
    repo: string;
    live: string;
}

export const projects: Project[] = [
    {
        title: 'Projektin Nimi 1',
        description: 'Lyhyt kuvaus projektista. Kerro ongelma, ratkaisu ja vaikutus.',
        tech: ['React', 'TypeScript', 'CSS'],
        repo: 'https://github.com/Eemi00/projekti-1',
        live: 'https://esimerkki-1.netlify.app',
    },
    {
        title: 'Projektin Nimi 2',
        description: 'Toinen projekti: keskity visuaalisuuteen ja käytettävyyteen.',
        tech: ['Vite', 'Three.js', 'Framer Motion'],
        repo: 'https://github.com/Eemi00/projekti-2',
        live: 'https://esimerkki-2.netlify.app',
    },
    {
        title: 'Projektin Nimi 3',
        description: 'Kolmas projekti: suorituskykyinen, API-vetoinen näkymä.',
        tech: ['Next.js', 'Tailwind', 'API'],
        repo: 'https://github.com/Eemi00/projekti-3',
        live: 'https://esimerkki-3.netlify.app',
    },
]