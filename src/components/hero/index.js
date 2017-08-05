import { h } from 'preact';

import style from './style';

const Hero = ({ children }) =>
	<div class={style.hero}>
		{children}
	</div>;

export default Hero;
