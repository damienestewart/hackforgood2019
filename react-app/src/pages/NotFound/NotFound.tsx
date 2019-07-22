import * as React from 'react';

/**
 * Not found page component to be used when navigating to a route that does not exist
 */
export default class NotFound extends React.Component {
  /**
   * Returns the component as a ReactNode
   */
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Not Found</h2>
        <p>Sorry unable to find the resource, please check the URL.</p>
      </div>
    );
  }
}
