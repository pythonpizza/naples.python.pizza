import { h } from 'preact';

import TalkItem from '../talk-item';
import style from './style';

const talks = [1, 2, 3];

const TalkList = ({ children }) =>
	<ol class={style.list}>
		{talks.map(index => <TalkItem key={index} />)}
	</ol>;

export default TalkList;
