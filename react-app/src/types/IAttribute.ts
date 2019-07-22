export enum IAttributeType {
    SingleValue,
    SelectedValue,
    MultiValue,
    SingleSelectedValue
}

export enum IValueType {
    Boolean,
    Text,
    Number,
    List
}

export interface IAttribute<P> {
    attrbuteType:IAttributeType,
    valueType:IValueType,
    value: P,
    placeholder: P
}