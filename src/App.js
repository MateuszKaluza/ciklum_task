import React from 'react';
import './App.css'
import OrderForm from './OrderForm';
import Orders from './Orders';

function App() {
  return (
    <div className="wrapper">
      <OrderForm />
      <Orders/>
    </div>
  );
}

export default App;
