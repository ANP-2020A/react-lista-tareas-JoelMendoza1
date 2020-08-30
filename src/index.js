import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


//const name= 'Josh Perez';
//const element = <h1>Hello, {name}</h1>
/*function formatName(name) {
    return user.firstName + ' ' + user.lastName;
}*/
/*
const users =[
    {
    firstName:'Hareper',
    lastName:'Perez',
    },
    {
        firstName:'Joel',
        lastName:'Mendoza',
    },
    {
        firstName:'Raquel',
        lastName:'Mendoza',
    },
];
*/

ReactDOM.render(
    <React.StrictMode>
        <App /*users = {users}*//>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
