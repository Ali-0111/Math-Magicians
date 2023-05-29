import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
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
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/quote" element={<Quote />}> </Route>
          <Route path="/calc" element={<Calculator />}> </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
