import { h } from 'preact';

import style from './style';

const Wrapper = ({ children }) => (
	<div class={style.wrapper}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.95 261.95">
			<defs>
				<clipPath id="avatar-mask">
					<path d="M213.17,253.6h0a408.45,408.45,0,0,1-164.32,0h0A44.28,44.28,0,0,1,8.36,213.17v0a408.45,408.45,0,0,1,0-164.32v0A44.28,44.28,0,0,1,48.78,8.35h0a408.45,	408.45,0,0,1,164.32,0h.07A44.28,44.28,0,0,1,253.6,48.79v0a408.45,408.45,0,0,1,0,164.32v0A44.28,44.28,0,0,1,213.17,253.6Z" />
				</clipPath>
			</defs>
		</svg>

		{children}
	</div>
);

export default Wrapper;
