import { IBlock, BlockCategory } from "../src/types/IBlock";
import { IValueType } from "../src/types/IAttribute";

export const sounds : IBlock<any>[] = [
    {
        title:'play sound',
        category: BlockCategory.Sound,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            }
        ],
        placeholderText:'play sound {}'
    },
    {
        title:'play sound at some frequency',
        attributes:[
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Dropdown,
                    IValueType.Number
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"play sound {} at {} Hz"
    }
]