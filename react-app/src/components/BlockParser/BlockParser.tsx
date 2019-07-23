import * as React from "react";
import { IBlock } from "../../types/IBlock"
import { IAttribute, IValueType } from "../../types/IAttribute"

export interface IBlockParserProps<P>{
    block:IBlock<P>;
}
export interface IBlockParserState{}

export class BlockParser<P> extends React.Component<IBlockParserProps<P>,IBlockParserState> {
    constructor(props: IBlockParserProps<P>) {
        super(props);
    }

    private static hackyIntToCharMapping: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"] // shouldn't be more than 8 args

    validValueTypesToString(valueTypes: IValueType[]) {
        var valueTypeString = "";
        var i = 0;
        while (i < valueTypes.length - 1) {
            valueTypeString.concat(valueTypes[i++].toString() + " or ");
        }
        valueTypeString.concat(valueTypes[i].toString());
        return valueTypeString;
    }
    
    validValueTypesToStringInStringOption(valueTypes: IValueType[]) {
        return this.validValueTypesToString(valueTypes);
    }

    validValueTypesToStringOutOfStringOption(attributes: IAttribute<P>[]) {
        var valueTypeString = ", where ";
        var i = 0;
        while (i < attributes.length - 2) {
            valueTypeString.concat(BlockParser.hackyIntToCharMapping[i] + " is of type "
                + this.validValueTypesToString(attributes[i].valueTypes) + ", ");
            i++;
        }
        while (i < attributes.length - 1) {
            valueTypeString.concat(BlockParser.hackyIntToCharMapping[i] + " is of type "
                + this.validValueTypesToString(attributes[i].valueTypes) + " and ");
            i++;
        }
        valueTypeString.concat(BlockParser.hackyIntToCharMapping[i] + " is of type "
            + this.validValueTypesToString(attributes[i].valueTypes));
        return valueTypeString;
    }

    parsePlaceholderText(placeholderText: string, attributes: IAttribute<P>[], isInStringParse: boolean) {
        if (isInStringParse) {
            for (var i = 0; i < attributes.length; i++) {
                placeholderText = placeholderText.replace(/{*}/, this.validValueTypesToStringInStringOption(attributes[i].valueTypes)
                    + BlockParser.hackyIntToCharMapping[i]);
            }
        }
        else {
            for (var i = 0; i < attributes.length; i++) {
                placeholderText = placeholderText.replace(/{*}/, BlockParser.hackyIntToCharMapping[i]);
            }
            placeholderText.concat(this.validValueTypesToStringOutOfStringOption(attributes));
        }
        return placeholderText;
    }

    render() {
        var textToRead = this.parsePlaceholderText(this.props.block.placeholderText, this.props.block.attributes, false);
        
        return (
            <React.Fragment>
                <p>
                    {textToRead}
                </p>
            </React.Fragment>
        );
    }
}