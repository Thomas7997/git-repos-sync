import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Routes from './components/common/Routes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;