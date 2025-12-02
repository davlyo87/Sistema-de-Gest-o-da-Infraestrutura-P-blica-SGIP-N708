import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18 ou superior
import './index.css'; // Arquivo de estilos globais
import App from './App'; // O componente raiz da sua aplicação
import { BrowserRouter as Router } from 'react-router-dom'; // Para lidar com rotas

// Criar um ponto de montagem para a aplicação React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar o componente raiz da aplicação
root.render(
  <Router>
    <App /> {/* O componente que contém o roteamento e a lógica da sua aplicação */}
  </Router>
);