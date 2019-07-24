
import * as React from 'react';

import { AccessibleBase, IAccessibleBaseProps } from "../../components/withNavigation/AccessibleBase";
import { withNavigation, INavigationConfig } from "../../components/withNavigation/withNavigation";


const categoryButtons: string[] = ["Motion", "Looks", "Sound"]

interface IComponentState {
    //accessRef:React.RefObject<HTMLDivElement>
}

interface IPropsFromState {
}

interface IPropsFromDispatch {
}

type IAllProps = IPropsFromState & IPropsFromDispatch;

let AccessibleDiv = withNavigation(AccessibleBase);

/**
 * Home page and entry gateway for the application
 */
export class AccessibilityExample extends React.Component<IAllProps, IComponentState> {
    /**
     * @constructor
     */
    public constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            //accessRef:React.createRef()
        };
    }

    public accessRef: React.RefObject<any> = React.createRef();
    public ref2: React.RefObject<any> = React.createRef();
    public ref3: React.RefObject<any> = React.createRef();
    public ref4: React.RefObject<any> = React.createRef();

    onRenderBaseExample = () => {

        let accessProps: INavigationConfig & IAccessibleBaseProps = {
            onKeyDown: (ev:any) => { console.log(ev) },
            refMap: {
                "1": {
                    tab: this.ref4,
                    right: this.ref2
                }
            },
            root:this.accessRef,
            componentRef: this.accessRef,
            id: "1"
        }
        let accessProps2: INavigationConfig & IAccessibleBaseProps = {
            onKeyDown: (ev:any) => { console.log(ev) },
            refMap: {
                "2": {
                    tab: this.ref4,
                    down: this.ref3,
                    left: this.accessRef
                }
            },
            root:this.ref2,
            componentRef: this.ref2,
            id: "2"
        }
        let accessProps3: INavigationConfig & IAccessibleBaseProps = {
            onKeyDown: (ev:any) => { console.log(ev) },
            refMap: {
                "3": {
                    tab: this.ref4,
                    up: this.ref2,
                    left: this.accessRef
                }
            },
            root:this.ref3,
            componentRef: this.ref3,
            id: "3"
        }
        let accessProps4:INavigationConfig & IAccessibleBaseProps = {
            onKeyDown: (ev:any) => { console.log(ev) },
            refMap: {
                "4": {
                    tab: this.accessRef
                }
            },
            root:this.ref4,
            componentRef: this.ref4,
            id: "4"
        }


        return (
            <React.Fragment>
                <div>
                    <AccessibleDiv {...accessProps}>Test</AccessibleDiv>
                    <AccessibleDiv {...accessProps2}>Test</AccessibleDiv>
                    <AccessibleDiv {...accessProps3}>Test</AccessibleDiv>
                </div>
                <AccessibleDiv {...accessProps4}>Test</AccessibleDiv>
            </React.Fragment>
        );
    }

    /**
     * Renders the component
     * @returns Component element
     */
    public render(): React.ReactNode {
        let Example = withNavigation(this.onRenderBaseExample);

        let exampleProps: INavigationConfig = {
            refMap: {
                "1": {
                    tab: this.ref4,
                    right: this.ref2
                },
                "2": {
                    tab: this.ref4,
                    down: this.ref3,
                    left: this.accessRef
                },
                "3": {
                    tab: this.ref4,
                    up: this.ref2,
                    left: this.accessRef
                },
                "4": {
                    tab: this.accessRef
                }
            },
            root: this.accessRef
        }

        return <Example {...exampleProps} />
    }

}

