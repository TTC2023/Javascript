import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import React, { useState } from 'react';


const [state, setState] = useState({
    items: [],
    totalPrice: 0.00
});
setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
console.log(state.items);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
