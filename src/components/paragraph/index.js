import { h } from 'preact';

import style from './style';

const Paragraph = ({ children }) =>
    <p class={style.paragraph}>
        {children}
    </p>;

export default Paragraph;
