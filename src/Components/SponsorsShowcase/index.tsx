import * as React from 'react';

import SponsorGroup from '@/Types/SponsorGroup';

import './index.css';

import BeASponsor from './BeASponsor';

export interface SponsorsShowcaseProps {
    sponsors: SponsorGroup[];
}

export default class SponsorsShowcase extends React.Component<SponsorsShowcaseProps, {}> {
    render() {
        const sponsors = this.props.sponsors;

        return (
            <div className="sponsors-showcase">
                {sponsors.map((group, i) => {
                    return (
                        <React.Fragment>
                            <h2 className="sponsors-showcase--tier">{group.tier}</h2>
                            <div key={i} className="sponsors-showcase--row">
                                {group.sponsors.map(sponsor => (
                                    <a
                                        className="sponsors-showcase--sponsor"
                                        id={sponsor.id}
                                        key={sponsor.name}
                                        href={sponsor.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img alt={sponsor.name} src={sponsor.photo} />
                                    </a>
                                ))}
                                <BeASponsor />
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}
