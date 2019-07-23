import * as React from 'react';
import { KeyCodes } from 'office-ui-fabric-react/lib/Utilities';
import { INav } from 'office-ui-fabric-react';

export interface IElementNavigation {
    up: React.RefObject<any>,
    down: React.RefObject<any>,
    left: React.RefObject<any>,
    right: React.RefObject<any>,
    tab: React.RefObject<any>
}

export interface INavigationProps {
    onKeyDown:(ev:React.KeyboardEvent<HTMLDivElement>) => void
    componentRef:React.RefObject<any>
}

export interface INavigationConfig {
    root: React.RefObject<any>
    refCallback: () => React.RefObject<any>[]
    refMap: { [key:string]:IElementNavigation }
}

export interface INavigationState{
    selectedRef:React.RefObject<any>
}

export const withNavigation = <P extends INavigationProps>(Component: React.ComponentType<P>) =>{
class withNavigation extends React.Component<P & INavigationConfig, INavigationState> {

        public refSource: React.RefObject<any> = React.createRef();

        constructor(props:P & INavigationConfig){
            super(props);
            this.state= {
                selectedRef:props.root
            }
        }

        shouldComponentUpdate(){
            return true
        }

        componentDidMount(){
            console.log(focus,this.state)
            this.state.selectedRef.current.focus()
        }

        componentDidUpdate(prevProps: P & INavigationConfig, prevState:INavigationState){
            console.log("update", this.state)
            this.state.selectedRef.current.focus();
        }

        public _onKeyDown = (ev:React.KeyboardEvent<HTMLDivElement>) => {
            let { onKeyDown, root } = this.props;
            console.log(ev.key)
            onKeyDown && onKeyDown(ev);
            if(!ev.defaultPrevented && root){

            }
        }

        render() {
            return <Component {...this.props as P} onKeyDown={this._onKeyDown} ref={this.refSource}/>;
        }
    };

    return 
}
    
