import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare global {
    interface Window {
        Auth:any,
        Role:any,
        ID: any,
        Reserveid:any;
        barID: any;
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));