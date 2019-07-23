import * as React from "react";
import { ICategoryName } from "./ICategoryName"

export interface IBlockNavProps{
    categoryName: ICategoryName
}

export interface IBlockNavState{}

export class BlockNav extends React.Component<IBlockNavProps,IBlockNavState>{
    constructor(props: IBlockNavProps){
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <nav role="navigation" aria-label="Blocks">
                    {/* load blocks based on selected category. */}
                    {console.log(this.props.categoryName)}
                </nav>
            </React.Fragment>
        )
    }
}