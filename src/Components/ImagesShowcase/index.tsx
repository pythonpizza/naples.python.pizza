import * as React from 'react';
import SVGInline from 'react-svg-inline';
import Image from '@/Types/Image';

import './index.css';

export interface ImagesShowcaseProps {
    images: Image[];
}

export default class ImagesShowcase extends React.Component<ImagesShowcaseProps, {}> {
    render() {
        const images = this.props.images;
        return (
            <div className="images-showcase">
                {images.map((image, i) => (
                    <a key={i} href={image.link} target="_blank" rel="noopener noreferrer">
                        <SVGInline svg={image.image} />
                    </a>
                ))}
            </div>
        );
    }
}
