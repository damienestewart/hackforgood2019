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
        title:'play sound until done',
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
        placeholderText:'play sound {} until done'
    },
    {
        title:'stop all sounds',
        category: BlockCategory.Sound,
        attributes: [],
        placeholderText:'stop all sounds'
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
                placeholder:'25523',
                valueTypes:[
                    IValueType.Dropdown,
                    IValueType.Number
                ],
                value:null
                // TODO: Need to add Drop down values
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"play sound {} at {} Hz"
    },
    {
        title:'property of a sound',
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
                    IValueType.Dropdown
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"{} of sound {}"
        // TODO: Need to add Drop down values
    },
    {
        title:'rest for some beats',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'0.2',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"rest for {} beats"
    },
    {
        title:'play note for some beats',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'60',
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:'0.5',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"play note {} for {} beats"
    },
    {
        title:'set instrument',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'1',
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"set instrument to {}"
    },
    {
        title:'change tempo',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'20',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"change tempo by {}"
    },
    {
        title:'set tempo',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'60',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"set tempo by {} bpm"
    },
    {
        title:'tempo',
        attributes:[
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"tempo"
        //TODO: refactor, need to type for this
    },
    {
        title:'change volume',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'10',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"change volume by {}"
    },
    {
        title:'set volume',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'100',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"set volume to {}%"
    },
    {
    title:'volume',
    attributes:[
        {
            isVariableSize:false,
            placeholder:null,
            valueTypes:[
                IValueType.Text
            ],
            value:null
        }
    ],
    category:BlockCategory.Sound,
    placeholderText:"volume"
    //TODO: refactor, need to type for this
    },
    {
        title:'change balance',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'10',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"change balance by {}"
    },
    {
        title:'set balance',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'0',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"set balance to {}"
    },
    {
        title:'balance',
        attributes:[
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"balance"
        //TODO: refactor, need to type for this
    },
    {
        title:'play some frequency',
        attributes:[
            {
                isVariableSize:false,
                placeholder:'440',
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        category:BlockCategory.Sound,
        placeholderText:"play frequency {} Hz"
    },
    {
        title:'stop frequency',
        attributes:[],
        category:BlockCategory.Sound,
        placeholderText:"stop frequency"
    }
]