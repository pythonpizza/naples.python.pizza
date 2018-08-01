import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.small}>
                    <h1>About python.pizza</h1>
                    <p>
                        Python.pizza è un evento gratuito organizzato da Python Italia che ha il doppio scopo di portare
                        le ultime tendenze di programmazione Python organizzando sessioni di talk con speakers
                        provenienti da tutta Italia, e di invogliare le persone a creare a loro volta community locali
                        ed eventi per accelerare lo sviluppo tecnologico nel sud Italia.
                    </p>
                </Container>
            </section>
        );
    }
}
