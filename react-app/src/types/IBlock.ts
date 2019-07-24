import { IAttribute } from "./IAttribute";

export enum BlockCategory{
    Sound,
    Control,
    Variable
}

export enum BlockReturnType{
    None,
    Boolean,
    Any,
    Initialize,
    Intermediate,
    End
}

export interface IBlock<P> {
    category:BlockCategory,
    title: string,
    returnType:BlockReturnType,
    attributes:IAttribute<P>[],
    placeholderText: string
}