
import * as React from 'react';
import { connect } from 'react-redux';

import { IApplicationState } from '../../store';
import { SnapFrame } from '../../components/SnapFrame/SnapFrame';
import { AccessibilityExample } from "../../components/withNavigation/AccessibilityExample";
import './Home.scss';
import { AccessibleDOM } from '../../components/AccessibleDOM/AccessibleDOM';

const categoryButtons:string[] = [ "Motion", "Looks", "Sound"]

interface IComponentState {
}

interface IPropsFromState {
}

interface IPropsFromDispatch {
}

type IAllProps = IPropsFromState & IPropsFromDispatch;


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
    };
  }


  /**
   * Renders the component
   * @returns Component element
   */
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <SnapFrame/>
        <AccessibleDOM />
        <AccessibilityExample />
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
