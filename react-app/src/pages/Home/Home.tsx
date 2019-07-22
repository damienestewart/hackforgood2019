import * as React from 'react';
import { connect } from 'react-redux';

import { IApplicationState } from '../../store';

import './Home.scss';

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
