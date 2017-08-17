import { h } from 'preact';

import style from './style';

const Fullscreen = ({ children }) =>
    <div class={style.fullscreen}>
        {children}
    </div>;

export default Fullscreen;
