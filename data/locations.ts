// Location Data for SEO Landing Pages
// This file contains information for each city/location we serve

export interface LocationData {
    city: string;
    slug: string;
    postalCode: string;
    region: string;
    description: string;
    landmarks: string[];
    services: string[];
    testimonial?: {
        text: string;
        author: string;
        service: string;
    };
    mapUrl: string;
}

export const locations: LocationData[] = [
    {
        city: 'Ulm',
        slug: 'ulm',
        postalCode: '89075',
        region: 'Baden-Württemberg',
        description:
            'Professioneller Garten- und Landschaftsbau in Ulm. Von der Pflanzung und Pflasterarbeiten bis hin zur regelmäßigen Pflege – wir bedienen die gesamte Region mit hochwertiger Handwerkskunst.',
        landmarks: [
            'Ulmer Münster',
            'Fischerviertel',
            'Donaupark',
            'Wiblingen',
            'Eselsberg',
        ],
        services: [
            'Garten- & Landschaftsbau',
            'Pflasterarbeiten',
            'Rasenverlegung',
            'Pflanzungen',
            'Baumpflege',
            'Gartenpflege',
            'Terrassenbau',
            'Zaunbau',
        ],
        testimonial: {
            text: 'Beni Garten und Grünanlagenpflege hat unseren Garten in Ulm wunderbar transformiert. Die neue Terrasse sieht fantastisch aus!',
            author: 'Jane D.',
            service: 'Gartenbau',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84877.92523456385!2d9.914552438883624!3d48.39682782780775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479964a2f8d8c973%3A0x41ebd66fd0e1e60!2sUlm!5e0!3m2!1sde!2sde!4v1703080000000!5m2!1sde!2sde',
    },
    {
        city: 'Neu-Ulm',
        slug: 'neu-ulm',
        postalCode: '89231',
        region: 'Bayern',
        description:
            'Ihr lokaler Partner für Landschaftsbau in Neu-Ulm. Wir sind spezialisiert auf Rasenverlegung, Pflanzungen und dauerhafte Pflasterarbeiten für private und gewerbliche Immobilien.',
        landmarks: [
            'Glacis-Park',
            'Wiley',
            'Pfuhl',
            'Ludwigsfeld',
            'Neu-Ulm Mitte',
        ],
        services: [
            'Terrassenbau',
            'Rasenverlegung',
            'Pflasterarbeiten',
            'Zaunbau',
            'Baumschnitt',
            'Regelmäßiges Mähen',
            'Gartenpflege',
            'Bewässerungssysteme',
        ],
        testimonial: {
            text: 'Hervorragende Arbeit an unserer Auffahrt in Neu-Ulm. Sehr empfehlenswert für alle Pflasterarbeiten!',
            author: 'Mark S.',
            service: 'Pflasterarbeiten',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42436.93663952796!2d9.967814234720935!3d48.39665123512255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47996417730e2fd1%3A0x41ffd3c8d0955f0!2sNeu-Ulm!5e0!3m2!1sde!2sde!4v1703080000000!5m2!1sde!2sde',
    },
    {
        city: 'Blaustein',
        slug: 'blaustein',
        postalCode: '89134',
        region: 'Baden-Württemberg',
        description:
            'Umfassende Gartenbau-Dienstleistungen in Blaustein. Wir bieten hochwertige Pflege, Steinanlagen und Pflanzarbeiten, damit Ihr Garten in Blaustein das ganze Jahr über fantastisch aussieht.',
        landmarks: [
            'Blautal',
            'Herrlingen',
            'Ehrenstein',
            'Klingenstein',
        ],
        services: [
            'Pflegearbeiten',
            'Wege & Stufen',
            'Baumfällung & Schnitt',
            'Zaunmontage',
            'Rasenpflege',
            'Vertikutieren',
            'Pflanzarbeiten',
            'Bewässerungssysteme',
        ],
        testimonial: {
            text: 'Das Team war sehr reaktionsschnell und hat bei unseren Gartenarbeiten in Blaustein hervorragende Arbeit geleistet.',
            author: 'Robert P.',
            service: 'Gartenpflege',
        },
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42429.62310189083!2d9.851984252119958!3d48.4116348651816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799661c9441a131%3A0x41ebd66fd0e2270!2sBlaustein!5e0!3m2!1sde!2sde!4v1703080000000!5m2!1sde!2sde',
    },
    {
        city: 'Senden',
        slug: 'senden',
        postalCode: '89250',
        region: 'Bayern',
        description:
            'Zuverlässige Gartenbaulösungen für Einwohner in Senden. Spezialisiert auf Pflaster, Rollrasen, Steinanlagen und saisonale Pflege.',
        landmarks: [
            'Illerauwald',
            'Wullenstetten',
            'Ay',
            'Iller',
        ],
        services: [
            'Pflasterverlegung',
            'Terrassenbau',
            'Holzzäune',
            'Baumpflege',
            'Rollrasen',
            'Rasenmähen',
            'Saisonale Gartenpflege',
            'Heckenschnitt',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42484.51659851614!2d10.010214652438743!3d48.33089454848352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47996fca0495f2a1%3A0x41ffd3c8d095540!2sSenden!5e0!3m2!1sde!2sde!4v1703080000000!5m2!1sde!2sde',
    },
    {
        city: 'Erbach',
        slug: 'erbach',
        postalCode: '89155',
        region: 'Baden-Württemberg',
        description:
            'Exzellente Landschaftspflege in Erbach. Wir kümmern uns mit Leidenschaft um Ihre Immobilie in Erbach.',
        landmarks: [
            'Schloss Erbach',
            'Donau',
            'Ersingen',
            'Dellmensingen',
        ],
        services: [
            'Landschaftsbau',
            'Terrassen & Wege',
            'Zaunreparatur & Installation',
            'Pflanzung & Schnitt',
            'Pflege',
            'Rasenpflege',
            'Vertikutieren',
            'Bewässerung',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42491.54593922312!2d9.862413726588231!3d48.322881267597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47997b6aed2ff0ff%3A0x41ebd66fd0e2240!2sErbach!5e0!3m2!1sde!2sde!4v1703080000000!5m2!1sde!2sde',
    },
    {
        city: 'Dornstadt',
        slug: 'dornstadt',
        postalCode: '89160',
        region: 'Baden-Württemberg',
        description:
            'Erstklassige Gartenpflege in Dornstadt. Wir bieten professionelle Dienstleistungen, Pflasterarbeiten und komplette Rasenpflege für Privathäuser und Unternehmen in Dornstadt.',
        landmarks: [
            'Tomerdingen',
            'Scharenstetten',
            'Bollingen',
            'Lerchenfeld',
        ],
        services: [
            'Pflasterarbeiten',
            'Zäune',
            'Gartengestaltung',
            'Rasenpflege',
            'Baumpflege',
            'Mähen & Reinigen',
            'Winterdienst',
            'Pflanzungen',
        ],
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42385.11186716773!2d9.904875951805904!3d48.47355152778641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799652aeca1fc1b%3A0x41ebd66fd0e2290!2sDornstadt!5e0!3m2!1sde!2sde!4v1703080000000!5m2!1sde!2sde',
    },
];

// Helper function to get location by slug
export const getLocationBySlug = (slug: string): LocationData | undefined => {
    return locations.find((loc) => loc.slug === slug);
};

// Helper function to get all location slugs (for routing)
export const getLocationSlugs = (): string[] => {
    return locations.map((loc) => loc.slug);
};
