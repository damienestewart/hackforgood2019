import * as React from 'react';
import * as Loadable from 'react-loadable';

/**
 * Default loading component to display a loading message
 */
export default class Loading extends React.Component<Loadable.LoadingComponentProps> {
  /**
   * Returns the component as a ReactNode
   */
  public render(): React.ReactNode {
    const { error, pastDelay } = this.props;
    if (error) {
      return <div>Error!</div>;
    } else if (pastDelay) {
      return <div>Loading... </div>;
    }
    return null;
  }
}
