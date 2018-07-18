import * as React from 'react';
import Sponsor from '@/Types/Sponsor';

import './index.css';

export interface SponsorsShowcaseProps {
    sponsors: Sponsor[];
}

export default class SponsorsShowcase extends React.Component<SponsorsShowcaseProps, {}> {
    render() {
        const sponsors = this.props.sponsors;
        return (
            <div className="sponsors-showcase">
                {sponsors.map(sponsor => (
                    <a key={sponsor.name} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                        <img src={sponsor.photo} />
                    </a>
                ))}
            </div>
        );
    }
}
