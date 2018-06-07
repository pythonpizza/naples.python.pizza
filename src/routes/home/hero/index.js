import { h } from 'preact';

import Fullscreen from '../../../components/fullscreen';
import Logo from '../../../components/logo';
import Background from '../../../components/background';
import Section from '../../../components/section';
import { ButtonLink } from '../../../components/button';

import style from './style';

const SectionLogo = () => (
	<div class={style.logo}>
		<Logo />
	</div>
);

const Hero = ({ title, header, children }) => (
	<Fullscreen>
		<Background
			filename="hero"
			defaultSize={1103}
			sizes={[769, 1103, 1374, 1615, 2222]}
		/>


		<Section
			className={style.section}
			fullscreen
			noMargin
		>
			<SectionLogo />

			<div class={style.information}>
				<div>
					{/* <h1>
						<a
							href="https://goo.gl/maps/9GYbaLRHrc32"
							target="_blank"
							rel="noopener noreferrer"
						>
							Riot Studio, Napoli
						</a>
					</h1> */}
					<h1>15 Settembre 2018</h1>
					<h2>9:30 - 18:00</h2>
				</div>

				<div class={style.actions}>
					<ButtonLink
						target="_blank"
						href="#"
					>
						Registrati
					</ButtonLink>
					<ButtonLink
						target="_blank"
						href="#"
					>
						Sponsorizza
					</ButtonLink>
				</div>
			</div>
		</Section>
	</Fullscreen>
);

export default Hero;
