import * as React from 'react';

import './index.css';

import Hero from '@/Components/Hero';

import About from './Sections/About';
import Speakers from './Sections/Speakers';
import Sponsors from './Sections/Sponsors';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Hero />
                <About />
                <Speakers />
                <Sponsors />
            </div>
        );
    }
}
