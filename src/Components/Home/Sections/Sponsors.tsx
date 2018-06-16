import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import ImagesShowcase from '@/Components/ImagesShowcase';
import Image from '@/Types/Image';

export default class Sponsors extends React.Component {
    render() {
        let sponsors: Image[] = [
            {
                name: 'GitLab',
                image: require('Assets/sponsors/gitlab.svg'),
                link: 'https://gitlab.com',
            },
        ];
        sponsors = new Array(6).fill(sponsors[0], 0, 6);

        return (
            <section>
                <Container size={Sizes.small}>
                    <h1>Sponsors</h1>
                    <p>I nostri sponsors</p>
                </Container>
                <Container size={Sizes.large}>
                    <ImagesShowcase images={sponsors} />
                </Container>
            </section>
        );
    }
}
