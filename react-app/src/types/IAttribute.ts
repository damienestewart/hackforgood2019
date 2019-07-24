export enum IValueType {
    Boolean = "boolean",
    Text = "text",
    Number = "number",
    List = "list",
    Block = "block",
    Any = "any type", // Boolean, Text, Number, List, Character, Block
}

export interface IAttribute<P> {
    isVariableSize: boolean,
    isVariableGenerator: boolean,
    valueType: IValueType,
    value: P,
    placeholder: P
}