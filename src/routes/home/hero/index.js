import { h } from 'preact';

import Fullscreen from '../../../components/fullscreen';
import Logo from '../../../components/logo';
import Background from '../../../components/background';
import Section from '../../../components/section';
import { ButtonLink } from '../../../components/button';

import style from './style';

const SectionLogo = () =>
    <div class={style.logo}>
        <Logo />
    </div>;

const Hero = ({ title, header, children }) =>
    <Fullscreen>
        <Background
            filename="hero"
            defaultSize={1103}
            sizes={[190, 769, 1103, 1374, 1615, 1830, 2033, 2222, 2406, 2581, 2749, 2914, 3070, 3234, 3386, 3530, 3676, 3838, 3835, 3840]}
        />

        <Section className={style.section} header={<SectionLogo />} fullscreen noMargin>
            <div class={style.information}>
                <div>
                    <h1>Riot Studio, Napoli</h1>
                    <h1>16 Settembre 2017</h1>
                </div>

                <div class={style.actions}>
                    <ButtonLink
                        target="_blank"
                        href="https://www.eventbrite.it/e/pythonpizza-tickets-36788948736"
                    >
                        Registrati
                    </ButtonLink>
                    <ButtonLink
                        target="_blank"
                        href="https://drive.google.com/file/d/0BzLKfHQcu_LwZWs0YlRDRWZXcW8/view?usp=sharing"
                    >
                        Sponsorizza
                    </ButtonLink>
                </div>
            </div>
        </Section>
    </Fullscreen>;

export default Hero;
