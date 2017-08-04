import { h, Component } from 'preact';
import style from './style';

import Logo from '../../components/logo';
import MapBackground from '../../components/map-background';

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
			</div>
		);
	}
}
