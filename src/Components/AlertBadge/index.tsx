import * as React from 'react';
import * as cn from 'classnames';

const { useEffect, useState } = React;

import './index.css';

type Props = {
    message: string | null;
};

const AlertBadge: React.SFC<Props> = props => {
    const [isVisible, setIsVisible] = useState(false);
    const badger = () => {
        if (!props.message) {
            return;
        }

        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };
    useEffect(badger, []);
    useEffect(badger, [props.message]);

    const classes = cn('alert-badge', { visible: isVisible });
    return <div className={classes}>{props.message}</div>;
};

export default AlertBadge;
