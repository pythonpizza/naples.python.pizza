import { h } from 'preact';

import cx from 'classnames';

import Heading from '../heading';

import style from './style';

const Section = ({ title, header, children, fullscreen, className }) =>
	<section class={cx(style.section, { [style['is-fullscreen']]: fullscreen }, className )}>
		<header class={style.header}>
			{title &&
				<Heading>
					{title}
				</Heading>}
			{header}
		</header>

		<div class={style.content}>
			{children}
		</div>
	</section>;

export default Section;
