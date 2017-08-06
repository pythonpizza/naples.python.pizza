import { h } from 'preact';

import style from './style';

const sponsors = [1, 2, 3];

const Item = () =>
	<li class={style.item}>
		<a href="" target="_blank">
			<img src={require('../../assets/sponsors/bit4id.png')} />
		</a>
	</li>;

const Partners = ({ children }) =>
	<ul class={style.list}>
		{sponsors.map(index => <Item key={index} />)}
	</ul>;

export default Partners;
