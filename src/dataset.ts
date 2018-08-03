import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';

export const SPEAKERS: Speaker[] = [
    {
        name: 'Patrick Guido Arminio',
        photo: 'https://pbs.twimg.com/profile_images/919207390880456705/gqcS3mMB_400x400.jpg',
        job: 'Stink Studios',
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
