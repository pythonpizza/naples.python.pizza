import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';

export const SPEAKERS: Speaker[] = [
    {
        name: 'Domenico Testa',
        photo: 'https://s3-eu-west-1.amazonaws.com/pythonpizza/speakers/domenico-testa.jpg',
        job: 'Bit4id',
        talk: {
            order: 3,
            time: '11:45',
            title: 'Web services sql',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Fiorella De Luca',
        photo: 'https://pbs.twimg.com/profile_images/914168800962121729/8_kIl1M-_400x400.jpg',
        job: 'Women Techmakers',
        talk: {
            order: 1,
            time: '10:15',
            title: 'Boto styled-components knockout fetch firebase',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Andrea Stagi',
        photo: 'https://pbs.twimg.com/profile_images/963179422475083778/wcQt7MlF_400x400.jpg',
        job: 'Lotrek',
        talk: {
            order: 2,
            time: '11:00',
            title: 'Safari',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Salvatore Busiello',
        photo: 'https://pbs.twimg.com/profile_images/931954046822502400/8yONc3hg_400x400.jpg',
        job: 'Lotrek',
        talk: {
            order: 4,
            time: '12:30',
            title: 'Ie babel vue angular jquery',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Vincenzo Santopietro',
        photo: 'https://pbs.twimg.com/profile_images/928684714185064448/jhl36f7W_400x400.jpg',
        job: 'Intel Student Ambassador',
        talk: {
            order: 5,
            time: '13:15',
            title: 'Source gatsby moment isomorphic pillow backbone',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Iacopo Spalletti',
        photo: 'https://pbs.twimg.com/profile_images/2527288391/wr949gu8t2n995u19h98_400x400.png',
        job: 'Nephila',
        talk: {
            order: 6,
            time: '14:00',
            title: 'Reactive redux edge vue webvr',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Valerio Maggio',
        photo: 'https://pbs.twimg.com/profile_images/955716617006211072/vW5eTirr_400x400.jpg',
        job: 'Fondazione Bruno Kessler',
        talk: {
            order: 7,
            time: '14:45',
            title: 'Gatsby jquery',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
    },
    {
        name: 'Elena Nieddu',
        photo:
            'https://media.licdn.com/dms/image/C5603AQGV5UrhBFqt5Q/profile-displayphoto-shrink_800_800/0?e=1539216000&v=beta&t=c9uuFmxCHZg4slnv9SbrAE9bjHC9-FM32ASlohR3ph0',
        job: 'PhD student in Computer Science',
        talk: {
            order: 8,
            time: '15:30',
            title: 'Web services',
            abstract: 'Webvr python edge javascript edge node jquery redux nano webpack angular knockout web services webvr, throttle eslint, react debugger, reactive ember meteor webgl debugger debounce ajax shuffle bourbon git knockout, shuffle, preact bourbon python debounce polymer sql postcss saga git classnames history, wordpress, flask cloud pillow gulp.',
        }
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
