import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

export const SPEAKERS: Speaker[] = [
    {
        name: 'Domenico Testa',
        photo: 'https://s3-eu-west-1.amazonaws.com/pythonpizza/speakers/domenico-testa.jpg',
        job: 'Bit4id',
    },
    {
        name: 'Fiorella De Luca',
        photo: 'https://pbs.twimg.com/profile_images/914168800962121729/8_kIl1M-_400x400.jpg',
        job: 'Women Techmakers',
    },
    {
        name: 'Andrea Stagi',
        photo: 'https://pbs.twimg.com/profile_images/963179422475083778/wcQt7MlF_400x400.jpg',
        job: 'Lotrek',
    },
    {
        name: 'Salvatore Busiello',
        photo: 'https://pbs.twimg.com/profile_images/931954046822502400/8yONc3hg_400x400.jpg',
        job: 'Lotrek',
    },
    {
        name: 'Vincenzo Santopietro',
        photo: 'https://pbs.twimg.com/profile_images/928684714185064448/jhl36f7W_400x400.jpg',
        job: 'Intel Student Ambassador',
    },
    {
        name: 'Iacopo Spalletti',
        photo: 'https://pbs.twimg.com/profile_images/2527288391/wr949gu8t2n995u19h98_400x400.png',
        job: 'Nephila',
    },
    {
        name: 'Valerio Maggio',
        photo: 'https://pbs.twimg.com/profile_images/955716617006211072/vW5eTirr_400x400.jpg',
        job: 'Fondazione Bruno Kessler',
    },
    {
        name: 'Elena Nieddu',
        photo:
            'https://media.licdn.com/dms/image/C5603AQGV5UrhBFqt5Q/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=c9uuFmxCHZg4slnv9SbrAE9bjHC9-FM32ASlohR3ph0',
        job: 'PhD student in Computer Science',
    },
];

export const SPONSORS: Sponsor[] = [
    {
        id: 'pythonitalia',
        name: 'Python Italia',
        photo: require('Assets/sponsors/python-italia.png'),
        link: 'https://pycon.it/',
    },
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
        id: '012factory',
        name: '012 Factory',
        photo: require('Assets/sponsors/012factory.png'),
        link: 'https://www.012factory.it/',
    },
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
        title: 'Nome Talk Domenico Testa',
        type: Types.TALK,
        speaker: 0,
    },
    {
        order: 3,
        time: '11:30',
        title: 'Nome Talk Vincenzo Santopietro',
        type: Types.TALK,
        speaker: 4,
    },
    {
        order: 4,
        time: '12:15',
        title: 'Break',
        type: Types.OTHER,
    },
    {
        order: 5,
        time: '12:30',
        title: 'Nome Talk Salvatore Busiello',
        type: Types.TALK,
        speaker: 3,
    },
    {
        order: 6,
        time: '13:15',
        title: 'Nome Talk Andrea Stagi',
        type: Types.TALK,
        speaker: 2,
    },
    {
        order: 7,
        time: '14:00',
        title: 'Pizza!',
        type: Types.OTHER,
    },
    {
        order: 8,
        time: '15:00',
        title: 'Nome Talk Fiorella De Luca',
        type: Types.TALK,
        speaker: 1,
    },
    {
        order: 9,
        time: '15:00',
        title: 'Nome Talk Valerio Maggio',
        type: Types.TALK,
        speaker: 6,
    },
    {
        order: 10,
        time: '16:30',
        title: 'Break',
        type: Types.OTHER,
    },
    {
        order: 11,
        time: '16:45',
        title: 'Nome Talk Elena Nieddu',
        type: Types.TALK,
        speaker: 7,
    },
    {
        order: 12,
        time: '17:30',
        title: 'Nome Talk Iacopo Spalletti',
        type: Types.TALK,
        speaker: 5,
    },
    {
        order: 13,
        time: '18:15',
        title: 'Outro',
        type: Types.OTHER,
    },
];
