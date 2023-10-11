import React from 'react'
import ReactDOM from 'react-dom/client'
import {Counter} from './Counter'
import { Carta } from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <Carta />
  </React.StrictMode>,
)
