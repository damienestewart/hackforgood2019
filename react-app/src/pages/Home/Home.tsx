
import * as React from 'react';
import { connect } from 'react-redux';
import { KeyCodes, getRTLSafeKeyCode } from 'office-ui-fabric-react/lib/Utilities';

import { AccessibleBase, IAccessibleBaseProps } from "../../components/withNavigation/AccessibleBase";
import { withNavigation, INavigationConfig } from "../../components/withNavigation/withNavigation";
import { IApplicationState } from '../../store';
import { SnapFrame } from '../../components/SnapFrame/SnapFrame';
import './Home.scss';

const categoryButtons:string[] = [ "Motion", "Looks", "Sound"]

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
class Home extends React.Component<IAllProps, IComponentState> {
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

  /**
   * Renders the component
   * @returns Component element
   */
  public render(): React.ReactNode {
    let accessProps : INavigationConfig & IAccessibleBaseProps = {
      onKeyDown: (ev) => {console.log(ev)},
      refCallback:()=>[],
      refMap:{},
      root: this.accessRef,
      componentRef:this.accessRef
    }
    return (
      <React.Fragment>
        <SnapFrame/>
        <AccessibleDiv {...accessProps}/>
      </React.Fragment>
    );
  }

}

const mapStateToProps = ({  }: IApplicationState): IPropsFromState => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
