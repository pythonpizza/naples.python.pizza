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
	},
	{
		name: 'Roll Studio',
		url: 'http://www.rollstudio.co.uk',
		image: require('../../assets/sponsors/roll.png')
	},
	{
		name: '012 Factory',
		url: 'http://www.012factory.it/',
		image: require('../../assets/sponsors/012.png')
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
