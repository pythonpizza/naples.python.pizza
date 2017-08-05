import { h } from 'preact';

import style from './style';

const Wrapper = ({ children }) =>
	<div class={style.wrapper}>
		{children}
	</div>;

export default Wrapper;
