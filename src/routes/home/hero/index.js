import { h } from 'preact';

import Fullscreen from '../../../components/fullscreen';
import Logo from '../../../components/logo';
import Background from '../../../components/background';
import Section from '../../../components/section';
import { ButtonLink } from '../../../components/button';

import style from './style';

const SectionLogo = () =>
	<div class={style.logo}>
		<Logo />
	</div>;

const Hero = ({ title, header, children }) =>
	<Fullscreen>
		<Background
			filename="hero"
			defaultSize={1397}
			sizes={[200, 775, 1111, 1397, 1633, 1842, 2042, 2245, 2424, 2599, 2766, 2934, 3092, 3249, 3403, 3557, 3702, 3834, 3840]}
		/>

		<Section header={<SectionLogo />} fullscreen>
			<div class={style.information}>
				<div>
					<h1>Riot Studio, Napoli</h1>
					<h1>16 Settembre 2017</h1>
				</div>

				<div class={style.actions}>
					<ButtonLink
						target="_blank"
						href="https://www.eventbrite.it/e/pythonpizza-tickets-36788948736"
					>
						Registrati
					</ButtonLink>
					<ButtonLink
						target="_blank"
						href="https://drive.google.com/file/d/0BzLKfHQcu_LwZWs0YlRDRWZXcW8/view?usp=sharing"
					>
						Sponsorizza
					</ButtonLink>
				</div>
			</div>
		</Section>
	</Fullscreen>;

export default Hero;
