import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;
