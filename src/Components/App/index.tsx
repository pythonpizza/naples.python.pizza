import * as React from 'react';

import Home from '@/Components/Home';
import Header from '@/Components/Header';

import './reset.css';
import './theme.css';
import './typography.css';

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
