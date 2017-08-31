import { h } from 'preact';

import style from './style';


const TwoPane = ({ left, right }) => (
	<div class={style['two-pane']}>
		<div>{left}</div>
		<div>{right}</div>
	</div>
);

export default TwoPane;
