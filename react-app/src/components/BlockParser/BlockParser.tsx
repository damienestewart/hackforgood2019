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

    //deprecated in current form
    /*
    validValueTypesToString(valueType: IValueType) : string {
        if (valueType === IValueType.Any) {
            return valueType;
        }
        else {
            return "type " + valueType;
        }
    }

    validValueTypesToStringOutOfStringOption(attributes: IAttribute<P>[]) {
        var valueTypeString = ", where ";
        var i = 0;
        while (i < attributes.length - 2) {
            valueTypeString.concat(BlockParser.hackyIntToCharMapping[i] + " is of"
                + this.validValueTypesToString(attributes[i].valueType) + ", ");
            i++;
        }
        while (i < attributes.length - 1) {
            valueTypeString.concat(BlockParser.hackyIntToCharMapping[i] + " is of type "
                + this.validValueTypesToString(attributes[i].valueType) + " and ");
            i++;
        }
        valueTypeString.concat(BlockParser.hackyIntToCharMapping[i] + " is of type "
            + this.validValueTypesToString(attributes[i].valueType));
        return valueTypeString;
    }
    */

    parsePlaceholderText(placeholderText: string, attributes: IAttribute<P>[], isInStringParse: boolean) {
        if (isInStringParse) {
            for (var i = 0; i < attributes.length; i++) {
                placeholderText = placeholderText.replace(/{*}/, attributes[i].valueType
                    + BlockParser.hackyIntToCharMapping[i]);
            }
        }
        /*
        else {
            for (var i = 0; i < attributes.length; i++) {
                placeholderText = placeholderText.replace(/{*}/, BlockParser.hackyIntToCharMapping[i]);
            }
            placeholderText.concat(this.validValueTypesToStringOutOfStringOption(attributes));
        }
        */
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