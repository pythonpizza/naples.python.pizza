import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import Grid from '@/Components/Grid';
import ScheduleItem from '@/Components/ScheduleItem';
import { SPEAKERS } from '@/dataset';
import Speaker from '@/Types/Speaker';

export default class Schedule extends React.Component {
    sortArray(arr: Speaker[]) {
        return [...arr].sort((a, b) => a.talk.order > b.talk.order);
    }

    render() {
        return (
            <section id="schedule" className="schedule">
                <Container size={Sizes.large}>
                    <Container size={Sizes.small}>
                        <h1>Programma</h1>
                    </Container>
                    <ul>
                        {this.sortArray(SPEAKERS).map((speaker, i) => <ScheduleItem key={i} speaker={speaker} />)}
                    </ul>
                </Container>
            </section>
        );
    }
}
