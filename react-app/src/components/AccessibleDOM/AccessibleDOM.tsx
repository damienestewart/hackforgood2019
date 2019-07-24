import * as React from "react";
import { CategoryNav } from "./CategoryNav";
import { BlockNav } from "./BlockNav";
import { ICategoryName } from "./ICategoryName"

export interface IAccessibleDOMProps{}
export interface IAccessibleDOMState{
    selectedCategoryName: ICategoryName
}

export class AccessibleDOM extends React.Component<IAccessibleDOMProps,IAccessibleDOMState>{
    constructor(props: IAccessibleDOMProps){
        super(props)
        this.state = {
            selectedCategoryName: ICategoryName.Motion
        };
    }

    selectCategoryName(categoryName: ICategoryName)
    {
        this.setState({selectedCategoryName: categoryName});
    }

    render() {
        return(
            <React.Fragment>
                <section id="accessible-dom">
                    <CategoryNav categoryNameChangeHandler={this.selectCategoryName.bind(this)} />
                    <BlockNav categoryName={this.state.selectedCategoryName} />
                    <section id="main">

                    </section>
                </section>
            </React.Fragment>
        )
    }
}