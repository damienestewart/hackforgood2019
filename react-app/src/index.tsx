import { Fabric, initializeIcons } from 'office-ui-fabric-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import * as settings from './Settings';
import { store } from './store';

import 'normalize.css';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import './index.scss';

initializeIcons();

const renderContent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fabric>
            <App />
        </Fabric>
      </Router>
    </Provider>
  );
};

ReactDOM.render(renderContent(), document.getElementById('root') as HTMLElement);

// Register the service worker
serviceWorker.unregister();
