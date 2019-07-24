import * as React from "react";
import { CategoryNavigation } from "./Navigation/CategoryNavigation";
import { BlockNavigation } from "./Navigation/BlockNavigation";
import { ICategoryName } from "./ICategoryName";
import { Stage } from "./Stage/Stage";

export interface IAccessibleDOMProps{}
export interface IAccessibleDOMState{
    selectedCategory: ICategoryName
}

export class AccessibleDOM extends React.Component<IAccessibleDOMProps,IAccessibleDOMState>{
    constructor(props: IAccessibleDOMProps){
        super(props)
        this.state = {
            selectedCategory: ICategoryName.Motion
        };
    }

    selectCategory(categoryName: ICategoryName) : void
    {
        this.setState({selectedCategory: categoryName});
    }

    render() {
        return(
            <React.Fragment>
                <section id="accessible-dom">
                    <CategoryNavigation setCategory={this.selectCategory.bind(this)} />
                    <BlockNavigation categoryName={this.state.selectedCategory} />
                </section>
            </React.Fragment>
        )
    }
}