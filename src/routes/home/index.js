import { h } from 'preact';
import style from './style';

import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import TalkList from '../../components/talk-list';
import Partners from '../../components/partners';
import TwoPane from '../../components/two-pane';
import { ButtonLink } from '../../components/button';

import Hero from './hero';

export default () => (
	<div class={style.home}>
		<Hero />

		<Section title="Cos'è Python Pizza">
			<Paragraph>
				Lo scopo principale dell'evento è quello del "networking sociale" ossia
				fare incontrare "de visu", per la prima volta, la parte territoriale
				campana della community globale degli utenti Python.
			</Paragraph>
		</Section>

		<Section title="Programma">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 261.95 261.95"
				width="0"
			>
				<defs>
					<clipPath id="avatar-mask">
						<path d="M213.17,253.6h0a408.45,408.45,0,0,1-164.32,0h0A44.28,44.28,0,0,1,8.36,213.17v0a408.45,408.45,0,0,1,0-164.32v0A44.28,44.28,0,0,1,48.78,8.35h0a408.45,	408.45,0,0,1,164.32,0h.07A44.28,44.28,0,0,1,253.6,48.79v0a408.45,408.45,0,0,1,0,164.32v0A44.28,44.28,0,0,1,213.17,253.6Z" />
					</clipPath>
				</defs>
			</svg>

			<TalkList />
		</Section>

		<Section title="Sponsor">
			<Partners />
		</Section>

		<TwoPane
			left={
				<img
					style={{
						width: '100%',
						height: 'auto'
					}}
					src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/static/pin-s-p+285A98(14.2587399,40.8496048)/14.2587399,40.8485048,15,0,39/600x400@2x?access_token=pk.eyJ1IjoicGF0cmljazkxIiwiYSI6IjQxNGY5Y2M4ZDAxOTk1ZjlmMGIwYjAzOGUxNDkzNDgwIn0.h_QXhiuqxp2n0Oby13iWLg"
				/>
			}
			right={
				<div>
					<h2>Riot Studio</h2>
					<address>
						Via San Biagio Dei Librai, 39, <br />80138 Napoli
					</address>

					<ButtonLink
						style={{
							marginTop: '1em'
						}}
						inverted
					>
						Registrati
					</ButtonLink>
				</div>
			}
		/>
	</div>
);
