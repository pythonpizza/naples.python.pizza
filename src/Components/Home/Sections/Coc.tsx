import * as React from 'react';

import './Coc.css';

import Container, { Sizes } from '@/Components/Container';

export default () => (
    <section id="coc" className="coc">
        <Container size={Sizes.medium}>
            <h1>Code of conduct</h1>
            <p>
                Tutti i delegati, relatori, espositori e volontari di Python Pizza sono tenuti ad attenersi al seguente
                codice di condotta. Gli organizzatori faranno rispettare questo codice durante tutta la manifestazione.
            </p>
            <p>
                Python Pizza è dedicata a fornire un'esperienza della conferenza senza molestie per tutti,
                indipendentemente da genere, orientamento sessuale, disabilità, aspetto fisico, dimensione corporea,
                razza o religione. Non tolleriamo molestie ai partecipanti alla conferenza in qualsiasi forma.
                Linguaggio e immagini sessuali non sono appropriate per qualsiasi ambito della conferenza, compresi le
                presentazioni. I partecipanti alla conferenza che violano queste regole possono essere sanzionati o
                espulsi dalla conferenza a discrezione degli organizzatori della conferenza.
            </p>

            <p>
                Le molestie includono commenti offensivi verbali legati a genere, orientamento sessuale, disabilità,
                aspetto fisico, dimensione corporea, razza, religione, immagini sessuali in spazi pubblici,
                intimidazioni intenzionali, stalking, inseguimenti, fotografie o registrazioni moleste, interruzione
                continuata di presentazioni o altri eventi, contatto fisico inappropriato e attenzioni sessuali
                sgradite.
            </p>

            <p>
                Ci aspettiamo che i partecipanti seguano queste regole in tutti gli ambiti della conferenza e durante
                gli eventi sociali collegati alla conferenza.
            </p>
            <p>
                Il personale della conferenza sarà lieto di aiutare i partecipanti a contattare la sicurezza della sede
                o le locali forze dell'ordine, fare da scorta, o assistere in altro modo coloro che subiscono molestie,
                in modo da farli sentire al sicuro per la durata della conferenza. Apprezziamo la vostra presenza.
            </p>
            <p>
                Doveste aver bisogno di parlare privatamente con gli organizzatori, prima o durante Python Pizza,
                contattate una delle seguenti persone:
            </p>
            <ul>
                <li>
                    Marco Acierno{' '}
                    <a rel="noopener noreferrer" target="_blank" href="mailto:marco@python.pizza">
                        marco@python.pizza
                    </a>
                </li>
                <li>
                    Dario Carella{' '}
                    <a rel="noopener noreferrer" target="_blank" href="mailto:dario@python.pizza">
                        dario@python.pizza
                    </a>
                </li>
            </ul>
            <p>
                Lo staff di Python Pizza sarà riconoscibile grazie alla maglia rossa e al badge con la scritta 'Staff'
                sopra.
            </p>
            <p>
                Il CoC di Python Pizza è ispirato al CoC di Pycon Italia, disponibile{' '}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/pythonitalia/code-of-conducts/blob/master/conference/italian.md"
                >
                    qui
                </a>.
            </p>
        </Container>
    </section>
);
