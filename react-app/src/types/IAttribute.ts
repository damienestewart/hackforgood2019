export enum IValueType {
    Boolean,
    Text,
    Number,
    List,
    Dropdown
}

export interface IAttribute<P> {
    isVariableSize: boolean,
    valueTypes: IValueType[],
    value: P,
    placeholder: P
}