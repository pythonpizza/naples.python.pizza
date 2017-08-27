import { h } from 'preact';

import TalkItem from '../talk-item';
import style from './style';

const talks = [
	{
		title: 'Introduzione a Python 🐍',
		description: `Descrizione in arrivo.`,
		author: {
			name: 'Rino Ragucci',
			avatar: require('./avatars/rino.jpg')
		}
	},
	{
		title: 'Pizza as a Service 🍕',
		description: `Quando la pizza incontra il cloud! Python al servizio di
			Google Cloud Platform; introduzione a Google App Engine.`,
		author: {
			name: 'Fabrizio Lapiello',
			avatar: require('./avatars/fabrizio.jpg')
		}
	},
	{
		title: "Tensorflow per OCR: da zero allo stato dell'arte 🖼",
		description: `Ogni azienda che miri ad essere competitiva, ai giorni nostri,
			non può fare a meno di tecniche di machine learning per i suoi prodotti.
			Se fino ad ora hai letto parole come “machine learning”, “deep learning”
			o “AI” e non ci hai capito un fico secco, cercherò chiarirti le idee
			introducendo alcuni concetti teorici fondamentali e sviluppando una
			semplice applicazione per l’optical character recognition (O.C.R.)
			in Python con la libreria open-source TensorFlow.`,
		author: {
			name: 'Vincenzo Santopietro',
			avatar: require('./avatars/vincenzo.jpg')
		}
	}
];

const TalkList = ({ children }) =>
	<ol class={style.list}>
		{talks.map((talk, index) => <TalkItem key={index} talk={talk} />)}
	</ol>;

export default TalkList;
