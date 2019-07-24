import * as React from "react"

import { INavigationProps } from "./withNavigation";

export interface IAccessibleBaseProps extends INavigationProps {
}

export class AccessibleBase extends React.Component<IAccessibleBaseProps>{
    render(){
        return(<div tabIndex={-1} {...this.props} ref={this.props.componentRef}>{this.props.children}</div>)
    }
}