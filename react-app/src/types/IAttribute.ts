export enum IValueType {
    Boolean,
    Text,
    Number,
    List,
    Dropdown,
    Block,
    Any, // Boolean, Text, Number, List, Character, Block
    DropdownNumber,
    DropdownTextNumber,
    DropdownAny
}

export interface IAttribute<P> {
    isVariableSize: boolean,
    isVariableGenerator: boolean,
    valueTypes: IValueType,
    value: P,
    placeholder: P
}