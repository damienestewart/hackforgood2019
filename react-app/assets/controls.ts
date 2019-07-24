import { IBlock, BlockCategory } from "../src/types/IBlock";
import { IValueType } from "../src/types/IAttribute";

export const controls: IBlock<any>[] =
[
    {
        title: "When button is clicked",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "When green flag is clicked"
    },
    {
        title: "when a key is pressed",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder: "space",
                valueTypes: IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "when {} key is pressed"
    },
    {
        title: "When I am interacted with",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder: "clicked",
                valueTypes: IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "When I am {}"
    },
    {
        title: "when",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:false,
                valueTypes: IValueType.Boolean,
                value:null
            }
        ],
        placeholderText: "when {}"
    },
    {
        title: "When I receive",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes: IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "When I receive {}"
    },
    {
        title: "broadcast",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder: null,
                valueTypes: IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "broadcast {}"
    },
    {
        title: "broadcast and wait",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes: IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "broadcast {} and wait"
    },
    {
        title: "message",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "message"
    },
    {
        title: "warp",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "warp"
    },
    {
        title: "wait some seconds",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:"1",
                valueTypes: IValueType.Number,
                value:null
            }
        ],
        placeholderText: "wait {} seconds"
    },
    {
        title: "wait until",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            }
        ],
        placeholderText: "wait until {}"
    },
    {
        title: "forever",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "forever"
    },
    {
        title: "repeat",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Number,
                value: null
            }
        ],
        placeholderText: "repeat {}"
    },
    {
        title: "repeat until",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            }
        ],
        placeholderText: "repeat until {}"
    },
    {
        title: "for",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:IValueType.Text
            }
        ],
        placeholderText: "for {} = {} to {}"
    },
    {
        title: "if",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize:false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            }
        ],
        placeholderText: "if {}"
    },
    {
        title: "if else",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            }
        ],
        placeholderText: "if {} else {}"
    },
    {
        title: "if then else",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            },
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            },
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            }
        ],
        placeholderText: "if {} then {} else {}"
    },
    {
        title: "report",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Text,
                value:null
            }
        ],
        placeholderText: "report {}"
    },
    {
        title: "stop",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "stop {}"
    },
    {
        title: "run",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "run {}"
    },
    {
        title: "launch",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "launch {}"
    },
    {
        title: "call",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "call {}"
    },
    {
        title: "tell to",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            },
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "tell {} to {}"
    },
    {
        title: "ask for",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Boolean,
                value:null
            },
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "ask {} for {}"
    },
    {
        title: "run with continuation",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "run {} with continuation"
    },
    {
        title: "call with continuation",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:null,
                value:null
            }
        ],
        placeholderText: "call {} with continuation"
    },
    {
        title: "when I start as a clone",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "when I start as a clone"
    },
    {
        title: "create a clone of",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:null,
                valueTypes:IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "create a clone of {}"
    },
    {
        title: "a new clone of",
        category: BlockCategory.Control,
        attributes: [
            {
                isVariableSize: false,
                placeholder:["myself"],
                valueTypes:IValueType.Dropdown,
                value:null
            }
        ],
        placeholderText: "a new clone of {}"
    },
    {
        title: "delete this clone",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "delete this clone"
    },
    {
        title: "pause all",
        category: BlockCategory.Control,
        attributes: [],
        placeholderText: "pause all"
    }
] 