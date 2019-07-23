import * as React from "react";
import { ICategoryName } from "./ICategoryName"

export interface ICategoryNavProps{
    categoryNameChangeHandler: (categoryName: ICategoryName) => void;
}
export interface ICategoryNavState{}

export class CategoryNav extends React.Component<ICategoryNavProps,ICategoryNavState>{
    constructor(props: ICategoryNavProps){
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <nav role="navigation" aria-label="Category">
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Motion)}>Motion</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Looks)}>Looks</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Sound)}>Sound</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Pen)}>Pen</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Control)}>Control</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Sensing)}>Sensing</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Operators)}>Operators</button>
                    <button type="button" onClick={() => this.props.categoryNameChangeHandler(ICategoryName.Variables)}>Variables</button>
                </nav>
            </React.Fragment>
        )
    }
}