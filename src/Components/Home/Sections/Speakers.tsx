import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import Grid from '@/Components/Grid';
import SpeakerCard from '@/Components/SpeakerCard';
import { SPEAKERS } from '@/dataset';
import Speaker from '@/Types/Speaker';

export default class Speakers extends React.Component {
    shuffleArray(arr: Speaker[]) {
        return [...arr].sort(() => 0.5 - Math.random());
    }

    render() {
        return (
            <section id="speakers" className="speakers">
                <Container size={Sizes.large}>
                    <Container size={Sizes.small}>
                        <h1>15+ international speakers</h1>
                        <p className="speakers--description">
                            Yup babel debugger lodash s3 classnames webpack. Stackoverflow cloud throttle grunt reactive
                            Yup babel debugger lodash s3 classnames webpack. Stackoverflow cloud throttle grunt reactive
                        </p>
                    </Container>
                    <Grid>
                        {this.shuffleArray(SPEAKERS).map((speaker, i) => <SpeakerCard key={i} speaker={speaker} />)}
                    </Grid>
                </Container>
            </section>
        );
    }
}
