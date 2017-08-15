import { h, Component } from 'preact';
import style from './style';

import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import TalkList from '../../components/talk-list';
import Partners from '../../components/partners';

import Hero from './hero';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Hero />

				<Section title="Cos'è Python Pizza">
					<Paragraph>
						Induco paratus infantia ventum vitae, induco, eligo quis juvenis
						elit induco sum. Sit virtus elit, neque minim commodi. Ora, ora
						cogito canvallis, commodi gratia neque negotium. Lacuna legis lege
						sit infantia caelum. Legis gratia virtus culpa vitae sit cogito
						minim impera lege infantia impera.
					</Paragraph>
				</Section>

				<Section title="Programma">
					<TalkList />
				</Section>

				<Section title="Sponsor">
					<Partners />
				</Section>
			</div>
		);
	}
}
