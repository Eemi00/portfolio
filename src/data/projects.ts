export type Project = {
    title: string;
    description: string;
    tech: string[];
    repo: string;
    live: string;
    image: string;
    imageAlt: string;
}

export const projects: Project[] = [
    {
        title: 'PHP Lopputyö',
        description: 'Lopputyön tarkoitus oli harjoitella tietokantayhteyksien ja komentojen käyttöä sekä turvallista tietojen säilytystä.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql'],
        repo: 'https://github.com/Eemi00/php-lopputyo',
        live: 'https://geronimo.okol.org/~illeem/automiitti/',
        image: '/project1.png',
        imageAlt: 'Hero-näkymä lopputyöstä',
    },
    {
        title: 'React lopputyö',
        description: 'Lopputyön tarkoitus oli harjoitella React.Js käyttöä. Lisäsin myös projektiin myös rajapinnasta haun sillä halusin harjoitella sitä.',
        tech: ['Vite', 'Ajax', 'JSON', 'API'],
        repo: 'https://github.com/Eemi00/react-lopputyo',
        live: 'https://valtiot.eemille.fi',
        image: '/project2.png',
        imageAlt: 'Hero-näkymä lopputyöstä',
    },
    {
        title: 'Web lopputyö',
        description: 'Lopputyön tarkoitus oli ottaa ensi kosketus web ohjelmointiin. Tehtiin simppeli nettisivu jossa on divin värin vaihto ominaisuus.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/Eemi00/web-lopputyo',
        live: 'https://maalausfirma.eemille.fi',
        image: '/project3.png',
        imageAlt: 'Hero-näkymä projektista 1',
    },
]