import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import './style/App.css';
import './style/Footer.css'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        {/* Your main content goes here */}
        <p>Your affiliate products will be displayed here.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non atque soluta earum debitis blanditiis. Mollitia.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;

