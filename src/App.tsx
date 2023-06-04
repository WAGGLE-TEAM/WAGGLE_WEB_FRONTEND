import React from 'react';
import store from './store/configureStore'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;
