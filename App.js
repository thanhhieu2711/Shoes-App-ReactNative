import React from 'react';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
