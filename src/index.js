import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Routes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from "./redux/store";
import { history } from './components/custom';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
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
