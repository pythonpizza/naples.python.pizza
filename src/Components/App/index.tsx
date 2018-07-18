import * as React from 'react';

import * as smoothscroll from 'smoothscroll-polyfill';

import Home from '@/Components/Home';
import Header from '@/Components/Header';

import './reset.css';
import './theme.css';
import './typography.css';

smoothscroll.polyfill();

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}
