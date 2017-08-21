import { h } from 'preact';

import style from './style';


const generateSrcFromSizes = (filename, sizes) =>
	sizes.reduce(
		(acc, size) => `${acc}${require(`../../assets/background/${filename}x${size}.jpg`)} ${size}w,`,
		''
	);

const Background = ({ src, srcset, filename, sizes, defaultSize }) => {
	const htmlSrcset = sizes ? generateSrcFromSizes(filename, sizes).slice(0, -1) : srcset;
	const srcToUse = sizes ? require(`../../assets/background/${filename}x${defaultSize}.jpg`) : src;

	return <picture class={style.picture}>
		<img srcset={htmlSrcset} src={srcToUse} alt="" />
	</picture>;
};

export default Background;
