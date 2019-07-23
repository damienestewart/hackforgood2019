import { IBlock, BlockCategory } from "../src/types/IBlock";
import { IValueType } from "../src/types/IAttribute";

export const operators : IBlock<any>[] = [
    {
        title:'addition',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} plus {}'
    },
    {
        title:'subtraction',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} minus {}'
    },
    {
        title:'multiplication',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} times {}'
    },
    {
        title:'division',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} divided by {}'
    },
    {
        title:'exponentiation',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} raised to the power of {}'
    },
    {
        title:'mod',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} mod {}'
    },
    {
        title:'round',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'round {}'
    },
    {
        title:'other math operations',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:"sqrt", // TODO: Make Enum for other math operations
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:10,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} of {}'
    },
    {
        title:'pick random',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:1, 
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:10,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'pick random {} to {}'
    },
    {
        title:'less than',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} is less than {}' // Note: Would it be better to have an is here?
    },
    {
        title:'equal to',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} is equal to {}'
    },
    {
        title:'greater than',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'{} is greater than {}'
    },
    {
        title:'and',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Boolean
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Boolean
                ],
                value:null
            }
        ],
        placeholderText:'{} and {}'
    },
    {
        title:'or',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Boolean
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:[
                    IValueType.Boolean
                ],
                value:null
            }
        ],
        placeholderText:'{} or {}'
    },
    {
        title:'not',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Boolean
                ],
                value:null
            }
        ],
        placeholderText:'not {}'
    },
    {
        title:'boolean switch',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:true, 
                valueTypes:[
                    IValueType.Boolean // Maybe dropdown would work here
                ],
                value:null
            }
        ],
        placeholderText:'{}'
    },
    { // TODO : Talk about how arrays are represented
        title:'join',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:true,
                placeholder:["hello", "world"], 
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        placeholderText:'join []'
    },
    {
        title:'split',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:"hello world", 
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            },
            {
                isVariableSize:true,
                placeholder:null, 
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            }
        ],
        placeholderText:'split {} by {}'
    },
    {
        title:'letter of some string',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:1, 
                valueTypes:[
                    IValueType.Dropdown,
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:"world", 
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        placeholderText:'letter {} of {}'
    },
    {
        title:'length of some string',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:"world", 
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        placeholderText:'length of {}'
    },
    {
        title:'unicode of some char as int',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:'a', 
                valueTypes:[
                    IValueType.Character
                ],
                value:null
            }
        ],
        placeholderText:'unicode of {}'
    },
    {
        title:'unicode of some int as char',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:65, 
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            }
        ],
        placeholderText:'unicode {} as letter'
    },
    {
        title:'is some input some type?',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:5, 
                valueTypes:[
                    IValueType.Number
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:"number", 
                valueTypes:[
                    IValueType.Dropdown
                ],
                value:null
            }
        ],
        placeholderText:'is {} a {} ?' // Should this be written as "question mark"
    },
    {
        title:'is some input identical to some other input?',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Number,
                    IValueType.Boolean,
                    IValueType.Character,
                    IValueType.List,
                    IValueType.Text
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Number,
                    IValueType.Boolean,
                    IValueType.Character,
                    IValueType.List,
                    IValueType.Text
                ],
                value:null
            }
        ],
        placeholderText:'is {} identical to {} ?' // Should this be written as "question mark"
    },
    {
        title:'Javascript function',
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:true,
                placeholder:null, 
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            },
            {
                isVariableSize:false,
                placeholder:null, 
                valueTypes:[
                    IValueType.Text
                ],
                value:null
            }
        ],
        placeholderText:'Javascript function ({}) \{ {} \} ?' // Ask about how to represent curly braces
    },
]