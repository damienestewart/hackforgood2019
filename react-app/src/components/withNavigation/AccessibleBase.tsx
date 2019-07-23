import * as React from "react"

import { INavigationProps } from "./withNavigation";

export interface IAccessibleBaseProps extends INavigationProps {
}

export class AccessibleBase extends React.Component<IAccessibleBaseProps>{
    render(){
        console.log(this.props)
        return(<div {...this.props} ref={this.props.componentRef}>Test</div>)
    }
}