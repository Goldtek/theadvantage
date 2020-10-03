import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { history } from './components/custom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter forceRefresh={true} history={history}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
