import { h, Component } from 'preact';
import style from './style';

import Logo from '../../components/logo';
import MapBackground from '../../components/map-background';
import Hero from '../../components/hero';
import Wrapper from '../../components/wrapper';
import Heading from '../../components/heading';
import Paragraph from '../../components/paragraph';
import TalkList from '../../components/talk-list';
import { ButtonLink } from '../../components/button';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Hero>
					<MapBackground />
					<Logo />

					<div class={style.information}>
						<h1>python.pizza</h1>
						<p>Riot Studio, Napoli</p>
						<p>16 Settembre 2017</p>
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
				</Hero>

				<Wrapper>
					<Heading>Cos'è Python Pizza</Heading>

					<Paragraph>
						Induco paratus infantia ventum vitae, induco, eligo quis juvenis
						elit induco sum. Sit virtus elit, neque minim commodi. Ora, ora
						cogito canvallis, commodi gratia neque negotium. Lacuna legis lege
						sit infantia caelum. Legis gratia virtus culpa vitae sit cogito
						minim impera lege infantia impera.
					</Paragraph>

					<Heading>Programma</Heading>

					<TalkList />
				</Wrapper>
			</div>
		);
	}
}
