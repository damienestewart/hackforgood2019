import { IAttribute } from "./IAttribute";

export enum BlockCategory{
    Sound
}

export interface IBlock<P> {
    category:BlockCategory,
    title: string,
    attributes:IAttribute<P>[],
    placeholderText: string
}