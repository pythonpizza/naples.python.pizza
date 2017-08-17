import { h } from 'preact';

import style from './style';

const Button = ({ children, ...props }) =>
    <button tabindex="1" class={style.button} {...props}>
        {children}
    </button>;

export const ButtonLink = ({ children, ...props }) =>
    <a tabindex="1" class={style.button} {...props}>
        {children}
    </a>;

export default Button;
