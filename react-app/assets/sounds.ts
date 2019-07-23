import { IBlock, BlockCategory, BlockReturnType } from "../src/types/IBlock";
import { IValueType } from "../src/types/IAttribute";

export const sounds : IBlock<any>[] = [
    {
        title:'play sound',
        category: BlockCategory.Sound,
        returnType: BlockReturnType.None,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText:'play sound {}'
    },
    {
        title:'play sound at some frequency',
        returnType: BlockReturnType.None,
        attributes:[
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Dropdown,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.DropdownNumber,
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"play sound {} at {} Hz"
    }
]