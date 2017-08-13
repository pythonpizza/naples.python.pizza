import { h } from 'preact';

import Heading from '../heading';

import style from './style';

const Section = ({ title, children }) =>
	<section class={style.section}>
		<header class={style.header}>
			<Heading>
				{title}
			</Heading>
		</header>

		<div class={style.content}>
			{children}
		</div>
	</section>;

export default Section;
