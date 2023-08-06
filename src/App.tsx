import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';

function App() {
    return <Provider store={store}>{undefined}</Provider>;
}

export default App;
