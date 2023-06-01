import React from 'react';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import './styles/App.css';

function App() {
  return (
    <main>
      <div className="calc-wrapper">
        <Calculator />
      </div>
      <div className="text-wrapper">
        <Quote />
      </div>
    </main>
  );
}

export default App;
