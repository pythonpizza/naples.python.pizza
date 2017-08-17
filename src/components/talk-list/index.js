import { h } from 'preact';

import TalkItem from '../talk-item';
import style from './style';

const talks = [
    {
        title: "Tensorflow per OCR: da zero allo stato dell'arte",
        description: `Proin ac volutpat tortor. Integer at tortor ex. Aenean pretium quis
       ipsum vel pellentesque. Sed ullamcorper, libero ut auctor varius, lectus
        quam semper felis, vel consectetur leo odio id ante. In sit amet augue
        eu lorem mollis maximus. Pellentesque et risus orci. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Vivamus id placerat elit.`,
        author: {
            name: 'Vincenzo Santopietro',
            avatar: 'https://pbs.twimg.com/profile_images/3760396480/667e792df246fa1d455c76faff615f30_400x400.jpeg'
        }
    }
];

const TalkList = ({ children }) =>
    <ol class={style.list}>
        {talks.map((talk, index) => <TalkItem key={index} talk={talk} />)}
    </ol>;

export default TalkList;
