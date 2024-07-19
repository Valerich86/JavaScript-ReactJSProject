import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './css/main.css'

// создаем объект, куда будем помещать информацию
const root = ReactDOMClient.createRoot(document.getElementById('root'));

// отображаем элементы
root.render(<App />);
