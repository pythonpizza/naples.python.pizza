import * as React from 'react';
import * as smoothscroll from 'smoothscroll-polyfill';
import { register } from 'register-service-worker';

import Home from '@/Components/Home';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import AlertBadge from '@/Components/AlertBadge';

import './reset.css';
import './theme.css';
import './typography.css';

smoothscroll.polyfill();

type State = {
    badgeMessage: string | null;
};

export default class App extends React.Component<{}, State> {
    state = {
        badgeMessage: null,
    };

    componentWillMount() {
        const showMessage = (message: string) => {
            this.setState({
                badgeMessage: message,
            });
        };

        register(`${process.env.PUBLIC_URL}service-worker.js`, {
            ready(registration) {
                console.log('Service worker is active.');
            },
            registered(registration) {
                console.log('Service worker has been registered.');
            },
            cached(registration) {
                showMessage('🎉 You can now visit the website while offline!');
                console.log('Content has been cached for offline use.');
            },
            updatefound(registration) {
                console.log('New content is downloading.');
            },
            updated(registration) {
                showMessage('✨ Refresh the page to see the new changes!');
                console.log('New content is available; please refresh.');
            },
            offline() {
                showMessage('⌛️ No internet connection! The schedule might be out of date');
                console.log('No internet connection found. App is running in offline mode.');
            },
            error(error) {
                console.error('Error during service worker registration:', error);
            },
        });
    }

    render() {
        const { badgeMessage } = this.state;

        return (
            <div>
                <Header />
                <Home />
                <Footer />
                <AlertBadge message={badgeMessage} />
            </div>
        );
    }
}
