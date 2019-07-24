import { IBlock, BlockCategory, BlockReturnType } from "../src/types/IBlock";
import { IValueType } from "../src/types/IAttribute";

export const variables : IBlock<any>[] = [
    {
        title:'set variable',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [
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
                placeholder:0,
                valueTypes:IValueType.Number,
                value:null
            }
        ],
        placeholderText:'set {} to {}'
    }, 
    {
        title:'change variable',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [
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
                placeholder:0,
                valueTypes:IValueType.Number,
                value:null
            }
        ],
        placeholderText:'change {} by {}'
    }, 
    {
        title:'show variable',
        category: BlockCategory.Variable,
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
        placeholderText:'show variable {}'
    },
    {
        title:'hide variable',
        category: BlockCategory.Variable,
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
        placeholderText:'hide variable {}'
    },
    {
        title:'script variable',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [
            {
                isVariableSize:true,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Number,
                value:null
            },
        ],
        placeholderText:'script variables {}'
    },
    {
        title:'inherit variable',
        category: BlockCategory.Variable,
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
        placeholderText:'inherit {}'
    },
    {
        title:'list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:true,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Any,
                value:null
            }
        ],
        placeholderText:'list {}'
    },
    {
        title:'numbers in some range',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Number,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.Number,
                value:null
            }
        ],
        placeholderText:'numbers from {} to {}'
    },
    {
        title:'some input in front of some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Any,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'{} in front of {}'
    },
    {
        title:'some item from some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.DropdownNumber,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'item {} of {}'
    },
    {
        title:'all but first item of some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'all but first {}'
    },
    {
        title:'length of some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'length of {}'
    },
    {
        title:'some list contains some thing',
        returnType: BlockReturnType.Boolean,
        category: BlockCategory.Variable,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.Any,
                value:null
            }
        ],
        placeholderText:'set {} to {}'
    },
    {
        title:'is some list empty',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Boolean,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'is {} emtpty'
    },
    {
        title:'map',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Block,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'map {} over {}'
    },
    {
        title:'keep items',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Block,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'keep items {} from {}'
    },
    {
        title:'find first item',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Block,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'find first item {} in {}'
    },
    {
        title:'combine',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.Any,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.Block,
                value:null
            }
        ],
        placeholderText:'combine {} using {}'
    },
    {
        title:'for each item in some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [ //TODO: We did not capture the draggable varibale items here and in script variable
            {
                isVariableSize:false,
                isVariableGenerator:true,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'for each {} in {}'
    },    
    {
        title:'add some input to some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.DropdownAny,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'add {} to {}'
    },    
    {
        title:'delete something from some list',
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.DropdownNumber,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:0,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'delete {} of {}'
    },
    {
        title:'insert some input into some list at some position', //Maybe change the wording here?
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Any,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:1,
                valueTypes:IValueType.DropdownNumber,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            }
        ],
        placeholderText:'insert {} at {} of {}'
    },
    {
        title:'replace some item of some list with some input', 
        category: BlockCategory.Variable,
        returnType: BlockReturnType.None,
        attributes: [            
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:1,
                valueTypes:IValueType.DropdownNumber,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.List,
                value:null
            },
            {
                isVariableSize:false,
                isVariableGenerator:false,
                placeholder:null,
                valueTypes:IValueType.Any,
                value:null
            }
        ],
        placeholderText:'replace item {} of {} with {}'
    }
]