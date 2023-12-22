import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

/*
O React pode ser inserido em apenas alguns trechos da nossa página web.
Isso vai depender de onde vai haver a declaração atuação da renderização React 
realizada pelo ReactDOM. Neste caso está sendo realizada por meio da declaração do
id root localizado dentro de uma div no index.html, mas eu posso modificar essa questão.
*/
