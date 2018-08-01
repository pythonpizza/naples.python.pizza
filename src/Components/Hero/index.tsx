import * as React from 'react';

import Wave from '@/Components/Wave';

import './index.css';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero--info">
                    <h1>Python pizza</h1>
                    <h2>
                        <a href="https://www.google.com/maps/place/Palazzo+delle+Arti+Napoli/@40.8368426,14.2346782,17z/data=!3m1!4b1!4m5!3m4!1s0x133b08ffaf19f077:0x29aeaac14bce93b2!8m2!3d40.8368426!4d14.2368669" target="_blank" rel="noopener noreferrer">
                            Napoli @ PAN
                        </a>
                    </h2>
                    <h2>15 Settembre 2018</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
