import * as React from 'react';
import classnames from 'classnames';
import './index.css';
import Speaker from '@/Types/Speaker';

export interface ScheduleItemProps {
    speaker: Speaker;
}

export default class ScheduleItem extends React.Component<ScheduleItemProps, {}> {
    state = {
        isLoaded: false,
        isError: false,
    };

    componentDidMount() {
        const { speaker } = this.props;
        const img = new Image();
        img.onload = () => {
            this.setState({ isLoaded: true });
        }
        img.onerror = () => {
            this.setState({ isError: true });
        }
        setTimeout(() => {
            img.src = speaker.photo;
        }, 300 + 500 * Math.random());
    }

    render() {
        const { speaker } = this.props;
        const { isLoaded, isError } = this.state;

        const imageClasses = classnames('schedule-item--image', {
            'schedule-item--image--loaded': isLoaded,
            'schedule-item--image--error': isError,
        });

        return (
            <li className="schedule-item">
                <div className={imageClasses} style={{ backgroundImage: `url(${speaker.photo})` }} />
                <div className="schedule-item--info">
                    <h2>{speaker.name}</h2>
                    <p>{speaker.job}</p>
                </div>
            </li>
        );
    }
}
