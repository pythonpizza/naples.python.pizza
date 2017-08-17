import { h } from 'preact';

import style from './style';

const TalkItem = ({ talk }) =>
    <li class={style.item}>
        <div>
            <div>
                <div class={style.header}>
                    <div class={style.avatar}>
                        <svg viewBox="0 0 261.95 261.95">
                            <image
                                clip-path="url(#avatar-mask)"
                                height="100%"
                                width="100%"
                                xlinkHref={talk.author.avatar}
                            />
                        </svg>
                    </div>
                    <div>
                        <div class={style.title}>
                            {talk.title}
                        </div>
                    </div>
                </div>
            </div>
            <div class={style.description}>
                {talk.description}
                <div class={style.author}>
                    — {talk.author.name}
                </div>
            </div>
        </div>
    </li>;

export default TalkItem;
