import * as React from "react";

export interface IAccessibleDOMProps{}
export interface IAccessibleDOMState{}

export class AccessibleDOM extends React.Component<IAccessibleDOMProps,IAccessibleDOMState>{
    constructor(props: IAccessibleDOMProps){
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                {}
            </React.Fragment>
        )
    }
}