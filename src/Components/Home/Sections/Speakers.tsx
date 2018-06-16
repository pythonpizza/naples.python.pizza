import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import Grid from '@/Components/Grid';
import SpeakerCard from '@/Components/SpeakerCard';
import Speaker from '@/Types/Speaker';

export default class Speakers extends React.Component {
    render() {
        let speakers: Speaker[] = [
            {
                name: 'Patrick Arminio',
                photo:
                    'https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                talk: 'GraphQL & Frontend',
            },
        ];
        speakers = new Array(9).fill(speakers[0], 0, 9);

        return (
            <section className="speakers">
                <Container size={Sizes.large}>
                    <Container size={Sizes.small}>
                        <h1>15+ international speakers</h1>
                        <p className="speakers--description">
                            Yup babel debugger lodash s3 classnames webpack. Stackoverflow cloud throttle grunt reactive
                            Yup babel debugger lodash s3 classnames webpack. Stackoverflow cloud throttle grunt reactive
                        </p>
                    </Container>
                    <Grid>{speakers.map((speaker, i) => <SpeakerCard key={i} speaker={speaker} />)}</Grid>
                </Container>
            </section>
        );
    }
}
