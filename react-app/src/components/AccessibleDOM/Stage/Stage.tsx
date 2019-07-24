import * as React from "react";
import { CategoryNavigation } from "../Navigation/CategoryNavigation";
import { BlockNavigation } from "../Navigation/BlockNavigation";
import { ICategoryName } from "../ICategoryName";

export interface IStageProps{}
export interface IStageState{}

export class Stage extends React.Component<IStageProps,IStageState>{
    constructor(props: IStageProps){
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <section id="main">
                    Main area.
                </section>
            </React.Fragment>
        )
    }
}