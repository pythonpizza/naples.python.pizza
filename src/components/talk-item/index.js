import { h } from 'preact';

import style from './style';

const TalkItem = () =>
	<li class={style.item}>
		<div>TIME</div>
		<div>TITLE</div>
		<div>Description</div>
	</li>;

export default TalkItem;
