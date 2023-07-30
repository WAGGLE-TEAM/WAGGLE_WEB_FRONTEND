import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';

function App() {
    return <Provider store={store} />;
}

export default App;
