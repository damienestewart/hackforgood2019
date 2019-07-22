import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { routeConfig } from '../../Routes';

/**
 * App component used to bootstrap the entire application
 */
class App extends React.Component {
  /**
   * Returns the component JSX to be rendered.
   * @return {JSX} The JSX markup.
   */
  public render(): React.ReactNode {
    return (
      <div className="app">
        <Header />
        <div className="app-container">
          {renderRoutes(routeConfig)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
