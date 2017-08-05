import { h } from 'preact';

import style from './style';

const sizes = [400, 800, 1200, 1400, 1800, 2000, 2500];

const getMapURL = width => {
	width = Math.ceil(width / 2);
	const height = Math.ceil(width / 1.6);

	const size = `${width}x${height}`;

	const url = `https://api.mapbox.com/styles/v1/splact/cj5zeldcb0o822rl0lx9efc8r/static/14.242626,40.831764,11.37,0.00,0.00/${size}@2x?access_token=pk.eyJ1IjoicGF0cmljazkxIiwiYSI6IjQxNGY5Y2M4ZDAxOTk1ZjlmMGIwYjAzOGUxNDkzNDgwIn0.h_QXhiuqxp2n0Oby13iWLg`;

	return encodeURI(url);
};

const getSrcSet = () =>
	sizes
		.map(size => {
			const url = getMapURL(size);
			return `${url} ${size}w`;
		})
		.join(',');

const MapBackground = () =>
	<picture class={style.picture}>
		<img
			sizes="(max-width: 2560px) 100vw, 2560px"
			srcset={getSrcSet()}
			src={getMapURL(800)}
			alt=""
		/>
	</picture>;

export default MapBackground;
