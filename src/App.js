import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './styles/App.css';

function App() {
  return (
    <main>

      <section>
        <Calculator />
      </section>

      <section>
        <Quote />
      </section>

    </main>
  );
}

export default App;
