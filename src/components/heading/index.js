import { h } from 'preact';

import style from './style';

const Heading = ({ children }) =>
	<h1 class={style.heading}>
		{children}
	</h1>;

export default Heading;
