import { h, Component } from 'preact';
import style from './style';

import Logo from '../../components/logo';
import MapBackground from '../../components/map-background';
import { ButtonLink } from '../../components/button';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
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
			</div>
		);
	}
}
