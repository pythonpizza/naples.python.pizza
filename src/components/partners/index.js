import { h } from 'preact';

import style from './style';

const sponsors = [
	{
		name: 'Python Software Foundation',
		url: 'https://www.python.org/psf/',
		image: require('../../assets/sponsors/psf.png')
	},
	{
		name: 'Bit4id',
		url: 'https://www.bit4id.com/',
		image: require('../../assets/sponsors/bit4id.png')
	}
];

const Item = ({ name, image, url }) => (
	<li class={style.item}>
		<a href={url} target="_blank">
			<img alt={name} src={image} />
		</a>
	</li>
);

const Partners = ({ children }) => (
	<ul class={style.list}>
		{sponsors.map((sponsor, index) => <Item key={index} {...sponsor} />)}
	</ul>
);

export default Partners;
