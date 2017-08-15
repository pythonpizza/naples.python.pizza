import { h } from 'preact';

import style from './style';

const Background = ({ src, srcset }) =>
	<picture class={style.picture}>
		<img srcset={srcset} src={src} alt="" />
	</picture>;

export default Background;
