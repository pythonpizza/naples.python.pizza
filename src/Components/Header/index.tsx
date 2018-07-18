import * as React from 'react';

import SVGInline from 'react-svg-inline';

import './index.css';
import Container, { Sizes } from '@/Components/Container';

export default class Header extends React.Component {
    onNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        const target = e.target as HTMLAnchorElement;
        const destinationId = target.getAttribute('data-destination');
        const destinationDom: HTMLElement | null = window.document.querySelector(`#${destinationId}`);

        if (!destinationDom) {
            return;
        }

        window.scrollTo({
            top: destinationDom.offsetTop,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <div className="header">
                <Container size={Sizes.large}>
                    <SVGInline className="header--logo" svg={require('Assets/logo.svg')} />
                    <ul className="header--links">
                        <li>
                            <a onClick={this.onNavClick} href="#about" data-destination="about">
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={this.onNavClick} href="#speakers" data-destination="speakers">
                                Speakers
                            </a>
                        </li>
                        <li>
                            <a onClick={this.onNavClick} href="#sponsors" data-destination="sponsors">
                                Sponsors
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Tickets
                            </a>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}
