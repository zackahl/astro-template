export interface Lightbox {
    id: string;
    title: string;
    alt: string;
    caption: string;
    src: string;
    width: number;
    height: number;
    date?: Date;
    eager?: boolean;
}