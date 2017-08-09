
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import { AppContainer }     from 'react-hot-loader'
import reducer from './reducers/index.js';
import App from './containers/app';

const logger = createLogger();

const store = createStore(reducer, {}, applyMiddleware(logger));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
		<Provider store={store}>
      		<Component />
  		</Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('/', () => { render(AppRouter) })
}