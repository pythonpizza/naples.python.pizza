export enum Types {
    TALK,
    OTHER,
}

export default interface Schedule {
    order: number;
    time: string;
    type: Types;
    title: string;
    speaker?: number;
}
