import * as React from 'react';

import SVGInline from 'react-svg-inline';

import './index.css';
import Container, { Sizes } from '@/Components/Container';

export default class Header extends React.Component {
    render() {
        return (
            <Container className="header" size={Sizes.large}>
                <SVGInline className="header--logo" svg={require('Assets/logo.svg')} />
                <ul className="header--links">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Speakers</a>
                    </li>
                    <li>
                        <a href="#">Biglietto</a>
                    </li>
                </ul>
            </Container>
        );
    }
}
