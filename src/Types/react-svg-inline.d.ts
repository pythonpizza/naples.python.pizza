/// <reference types="@types/react" />

declare module 'react-svg-inline' {
    interface SVGInlineProps {
        svg: string;
        className?: string;
    }

    export default class SVGInline extends React.Component<SVGInlineProps, {}> {}
}
