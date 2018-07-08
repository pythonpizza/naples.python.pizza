import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.small}>
                    <h1>About python.pizza</h1>
                    <p>
                        Lo scopo principale dell'evento è quello del "networking sociale" ossia fare incontrare "de
                        visu", per la prima volta, la parte territoriale campana della community globale degli utenti
                        Python.
                    </p>
                </Container>
            </section>
        );
    }
}
