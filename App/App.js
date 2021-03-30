import * as React from 'react';

// Import TODO Screen
import Todo from './src/screens/Todo';

import {Provider} from 'react-redux';

import {createStore} from 'redux';
import rootReducer from './src/store/reducers';

// create redux store
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
