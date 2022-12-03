import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store"
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:3001'; // lo q hacemos con esta linea es avisarle a axios q todas las peticiones q vaya a hacer empiecen
//                                                   o tengan una misma baseURL es decir ---> http://localhost:3001
axios.defaults.baseURL = 'https://deploy-back-production-0fc5.up.railway.app/';

// SI QUEREMOS TRABAJAR DE FORMA LOCAL DESCOMENTAMOS LA LINEA DE ARRIBA Y COMENTAMOS LA DE LA LINEA 13

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
