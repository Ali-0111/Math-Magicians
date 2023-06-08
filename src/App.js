import React from 'react';
import Header from './components/Header/Header';
import AppRoutes from './util/helper/Routing/Routing';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
