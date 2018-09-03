import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const DOMENICO_TESTA = 0;
const FIORELLA_DE_LUCA = 1;
const ANDREA_STAGI = 2;
const SALVATORE_BUSIELLO = 3;
const VINCENZO_SANTOPIETRO = 4;
const IACOPO_SPALLETTI = 5;
const VALERIO_MAGGIO = 6;
const ELENA_NIEDDU = 7;

export const SPEAKERS: Speaker[] = [
    {
        name: 'Domenico Testa',
        photo: require('../assets/speakers/domenico-testa.jpg'),
        job: 'Bit4id',
    },
    {
        name: 'Fiorella De Luca',
        photo: require('../assets/speakers/fiorella-de-luca.jpg'),
        job: 'Women Techmakers',
        social: 'https://twitter.com/fiorella_deluca',
    },
    {
        name: 'Andrea Stagi',
        photo: require('../assets/speakers/andrea-stagi.jpg'),
        job: 'Lotrek',
        social: 'https://twitter.com/4stagi',
    },
    {
        name: 'Salvatore Busiello',
        photo: require('../assets/speakers/salvatore-busiello.jpg'),
        job: 'Lotrek',
        social: 'https://twitter.com/owanesh',
    },
    {
        name: 'Vincenzo Santopietro',
        photo: require('../assets/speakers/vincenzo-santopietro.jpg'),
        job: 'Intel Student Ambassador',
        social: 'https://twitter.com/vinx_key',
    },
    {
        name: 'Iacopo Spalletti',
        photo: require('../assets/speakers/iacopo-spalletti.png'),
        job: 'Nephila',
        social: 'https://twitter.com/yakkys',
    },
    {
        name: 'Valerio Maggio',
        photo: require('../assets/speakers/valerio-maggio.jpg'),
        job: 'Fondazione Bruno Kessler',
        social: 'https://twitter.com/leriomaggio',
    },
    {
        name: 'Elena Nieddu',
        photo: require('../assets/speakers/elena-nieddu.jpg'),
        job: 'PhD student in Computer Science',
        social: 'https://www.linkedin.com/in/elena-nieddu-b06896154/',
    },
];

export const SPONSORS: Sponsor[][] = [
    [
        {
            id: 'pythonitalia',
            name: 'Python Italia',
            photo: require('Assets/sponsors/python-italia.png'),
            link: 'https://pycon.it/',
        },
        {
            id: 'psf',
            name: 'Python Software Foundation',
            photo: require('Assets/sponsors/psf.png'),
            link: 'https://www.012factory.it/',
        },
    ],
    [
        {
            id: 'bit4id',
            name: 'Bit4Id',
            photo: require('Assets/sponsors/bit4id.png'),
            link: 'http://www.bit4id.it/',
        },
        {
            id: 'roll',
            name: 'ROLL',
            photo: require('Assets/sponsors/roll.png'),
            link: 'https://rollstudio.co.uk/',
        },
        {
            id: 'f012actory',
            name: '012 Factory',
            photo: require('Assets/sponsors/012factory.png'),
            link: 'https://www.012factory.it/',
        },
    ],
    [
        {
            id: 'tattakki',
            name: 'Tattakki',
            photo: require('Assets/sponsors/tattakki.png'),
            link: 'https://www.instagram.com/tattakki/',
        },
        {
            id: 'notabug',
            name: 'Not a bug Conf',
            photo: require('Assets/sponsors/notabugconf.png'),
            link: 'https://notabugconf.it/',
        },
    ],
];

export const SCHEDULE: Schedule[] = [
    {
        order: 0,
        time: '10:00',
        title: 'Registrazione',
        type: Types.OTHER,
    },
    {
        order: 1,
        time: '10:30',
        title: 'Intro',
        type: Types.OTHER,
    },
    {
        order: 2,
        time: '10:45',
        title: "Codice Ratio: mining nell'Archivio Segreto Vaticano",
        type: Types.TALK,
        speaker: ELENA_NIEDDU,
    },
    {
        order: 3,
        time: '11:30',
        title: 'L’approccio a micro-servizi per le web-application con python e docker',
        type: Types.TALK,
        speaker: DOMENICO_TESTA,
    },
    {
        order: 4,
        time: '12:15',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 5,
        time: '12:30',
        title: 'Introduzione alle applicazioni realtime con Django',
        type: Types.TALK,
        speaker: IACOPO_SPALLETTI,
    },
    {
        order: 6,
        time: '13:15',
        title: 'AI at the edge with Intel Neural Compute Stick',
        type: Types.TALK,
        speaker: VINCENZO_SANTOPIETRO,
    },
    {
        order: 7,
        time: '14:00',
        title: 'Pizza!',
        type: Types.LUNCH,
    },
    {
        order: 8,
        time: '15:00',
        title: 'Scrivere i primi test frontend con python? Si Può!',
        type: Types.TALK,
        speaker: FIORELLA_DE_LUCA,
    },
    {
        order: 9,
        time: '15:45',
        title: 'TBA',
        type: Types.TALK,
        speaker: VALERIO_MAGGIO,
    },
    {
        order: 10,
        time: '16:30',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 11,
        time: '16:45',
        title: 'Read the stars with Apistar',
        type: Types.TALK,
        speaker: SALVATORE_BUSIELLO,
    },
    {
        order: 12,
        time: '17:30',
        title: 'Estendere Python con Go',
        type: Types.TALK,
        speaker: ANDREA_STAGI,
    },
    {
        order: 13,
        time: '18:15',
        title: 'Outro',
        type: Types.OTHER,
    },
];
