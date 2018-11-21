import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'));
}

render(App);

if (module.hot) {
  module.hot.accept('./ui/App', () => {
    const ReloadedApp = require('./ui/App').default;

    render(ReloadedApp);
  });
}
