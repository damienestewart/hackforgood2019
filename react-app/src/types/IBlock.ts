import { IAttribute } from "./IAttribute";

export enum BlockCategory{
    Sound,
    Variable
}

export interface IBlock<P> {
    category:BlockCategory,
    title: string,
    attributes:IAttribute<P>[],
    placeholderText: string
}