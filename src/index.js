import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/App';
import Banner from './scripts/components/banner';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
