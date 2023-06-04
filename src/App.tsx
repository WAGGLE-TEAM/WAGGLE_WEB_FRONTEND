import React from 'react';
import store from './store/configureStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <p className='test'>test</p>
      </div>
    </Provider>
  );
}

export default App;
