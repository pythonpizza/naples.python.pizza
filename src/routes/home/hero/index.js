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
		<Background src="http://i.imgur.com/HZLm2Rj.jpg" />

		<Section className={style.section} header={<SectionLogo />} fullscreen>
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
