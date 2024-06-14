import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import store from './redux/store';

const App = React.lazy(() => import('./App'));

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);