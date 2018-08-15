import Talk from '@/Types/Talk'

export default interface Speaker {
    name: string;
    photo: string;
    talk: Talk;
    job?: string;
}
