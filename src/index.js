import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

// Css
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);