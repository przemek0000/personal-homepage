import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyled from './styled';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyled />
      <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
)
