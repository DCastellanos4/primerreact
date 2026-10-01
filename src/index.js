import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//SIEMPRE HAY QUE IMPORTAR LOS COMPONENTES ANTES DE USARLOS
import Saludo from './components/Saludo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludo/>
    <App />
  </React.StrictMode>
);
//AQUI ES DONDE SE PINTAN LOS DIFERENTES COMPONENTES

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
