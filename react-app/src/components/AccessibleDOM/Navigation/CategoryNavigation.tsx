import * as React from "react";
import { ICategoryName } from "../ICategoryName";
import { AccessibleButton } from "../Buttons/AccessibleButton";

export interface ICategoryNavigationProps{
    setCategory: (categoryName: ICategoryName) => void;
}
export interface ICategoryNavigationState{}

export class CategoryNavigation extends React.Component<ICategoryNavigationProps,ICategoryNavigationState>{
    constructor(props: ICategoryNavigationProps){
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <nav id="category-navigation" aria-label="Category">
                    <AccessibleButton>{ICategoryName.Motion}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Looks}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Sound}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Pen}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Control}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Sensing}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Operators}</AccessibleButton>
                    <AccessibleButton>{ICategoryName.Variables}</AccessibleButton>
                </nav>
            </React.Fragment>
        )
    }
}