import * as React from 'react';

import SVGInline from 'react-svg-inline';

import './index.css';
import Container, { Sizes } from '@/Components/Container';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Container size={Sizes.large}>
                    <SVGInline className="header--logo" svg={require('Assets/logo.svg')} />
                    <ul className="header--links">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#speakers">Speakers</a>
                        </li>
                        <li>
                            <a href="#">Tickets</a>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}
