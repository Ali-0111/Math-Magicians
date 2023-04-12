import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import Quote from './components/Quote';
import './styles/App.css';

function App() {
  return (
    <div className="board">
      <Header />

      <main>

        <section>
          <Calculator />
        </section>

        <section>
          <Quote />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
