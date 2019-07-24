import * as React from 'react';
import { KeyCodes } from 'office-ui-fabric-react/lib/Utilities';
import { INav } from 'office-ui-fabric-react';

export interface IElementNavigation {
    up?: React.RefObject<any>,
    down?: React.RefObject<any>,
    left?: React.RefObject<any>,
    right?: React.RefObject<any>,
    tab?: React.RefObject<any>
}

export interface INavigationProps {
    onKeyDown?:(ev:React.KeyboardEvent<HTMLDivElement>) => void
    componentRef:React.RefObject<any>
    id:string
}

export interface INavigationConfig {
    onKeyDown?:(ev:React.KeyboardEvent<HTMLDivElement>) => void
    root: React.RefObject<any>
    refMap: { [key:string]:IElementNavigation }
}

export interface INavigationState{
    selectedRef:React.RefObject<any>
}

export const withNavigation = <P extends object>(Component: React.ComponentType<P>) =>{
    return class WithNavigation extends React.Component<P & INavigationConfig, INavigationState> {

        /*
        This Hoc provides a wrapper to assist with keyboard navigation

        A ref map should provide a mapping from Ref.id => Navigation Map
        the root is a ref to the element that has the focus to start

        the selected ref is the ref that is currently selected
        */

        constructor(props:P & INavigationConfig){
            super(props);
            this.state= {
                selectedRef:props.root
            }
        }

        focus = () => {
            console.log("focus", this.state.selectedRef.current)
            this.state.selectedRef.current.focus()
        }

        componentDidMount(){
            this.props.root.current.focus()
        }

        componentDidUpdate(prevProps: P & INavigationConfig, prevState:INavigationState){
            this.focus()
        }

        private moveFocus = (newRef?: React.RefObject<any>) => {
            console.log('move Focus',newRef)
            newRef && this.setState({
                selectedRef:newRef
            })
        }

        public _onKeyDown = (ev:React.KeyboardEvent<HTMLDivElement>) => {
            let { onKeyDown, refMap } = this.props;
            let { selectedRef } = this.state

            console.log(ev.keyCode)
            ev.stopPropagation();
            onKeyDown && onKeyDown(ev);
            if(!ev.defaultPrevented){
                let navMap: IElementNavigation = refMap[selectedRef.current.id]
                console.log('current id', selectedRef.current.id, navMap)
                switch(ev.keyCode){
                    case KeyCodes.right:
                        navMap && this.moveFocus(navMap.right);
                        break;
                    case KeyCodes.left:
                        navMap && this.moveFocus(navMap.left);
                        break;
                    case KeyCodes.up:
                        navMap && this.moveFocus(navMap.up);
                        break;
                    case KeyCodes.down:
                        navMap && this.moveFocus(navMap.down);
                        break;
                    case KeyCodes.tab:
                        navMap && this.moveFocus(navMap.tab);
                        break;
                }
            }
        }

        render() {
            return <Component {...this.props as P} onKeyDown={this._onKeyDown}/>;
        }
    };
}
    
