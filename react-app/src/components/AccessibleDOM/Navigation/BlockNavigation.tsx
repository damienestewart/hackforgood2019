import * as React from "react";
import { ICategoryName } from "../ICategoryName";
import { AccessibleButton } from "../Buttons/AccessibleButton";
import { operators } from "../../../../assets/operators";
import { sounds } from "../../../../assets/sounds";
import { variables } from "../../../../assets/variables";

export interface IBlockNavigationProps{
    categoryName: ICategoryName
}

export interface IBlockNavigationState{}

export class BlockNavigation extends React.Component<IBlockNavigationProps,IBlockNavigationState>{
    constructor(props: IBlockNavigationProps){
        super(props)
    }

    getBlocksForCategory(categoryName: ICategoryName)
    {
        return [{text: "Hello, World!"}]
    }

    render() {
        return(
            <React.Fragment>
                <nav id="block-navigation" role="navigation" aria-label="Block navigation.">
                    {/* load blocks based on selected category. */}
                    {
                        this.getBlocksForCategory(this.props.categoryName).map(block =>
                            {
                                // create an accessible for representing the block here.
                                // <AccessibleButton>block.text</AccessibleButton>
                                console.log(block);
                            })
                    }
                </nav>
            </React.Fragment>
        )
    }
}