import { h } from 'preact';

import style from './style';

const TalkItem = () =>
	<li class={style.item}>
		<div class={style.time}>18.30</div>
		<div>
			<div>
				<div class={style.header}>
					<div class={style.avatar}>
						<img src="https://pbs.twimg.com/profile_images/3760396480/667e792df246fa1d455c76faff615f30_400x400.jpeg" />
					</div>
					<div>
						<div class={style.title}>
							Tensorflow per OCR: da zero allo stato dell'arte
						</div>
					</div>
				</div>
			</div>
			<div class={style.description}>
				Proin ac volutpat tortor. Integer at tortor ex. Aenean pretium quis
				ipsum vel pellentesque. Sed ullamcorper, libero ut auctor varius, lectus
				quam semper felis, vel consectetur leo odio id ante. In sit amet augue
				eu lorem mollis maximus. Pellentesque et risus orci. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Vivamus id placerat elit.
				<div class={style.author}>— Vincenzo Santopietro</div>
			</div>
		</div>
	</li>;

export default TalkItem;
