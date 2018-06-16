import * as React from 'react';
import SVGInline from 'react-svg-inline';

import './index.css';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero--info">
                    <h1>Python pizza</h1>
                    <h2>15 Settembre 2018</h2>
                    <h2>Napoli</h2>
                </div>
                <SVGInline className="hero--wave" svg={require('Assets/wave.svg')} />
            </div>
        );
    }
}
