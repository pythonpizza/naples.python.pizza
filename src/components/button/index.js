import { h } from 'preact';

import cx from 'classnames';

import style from './style';

const getClass = props =>
	cx(style.button, {
		[style.inverted]: props.inverted
	});

const Button = ({ children, inverted, ...props }) => (
	<button tabindex="1" class={getClass({ inverted })} {...props}>
		{children}
	</button>
);

export const ButtonLink = ({ children, inverted, ...props }) => (
	<a tabindex="1" class={getClass({ inverted })} {...props}>
		{children}
	</a>
);

export default Button;
