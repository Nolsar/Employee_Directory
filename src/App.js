import React from 'react'
import Navbar from './components/navBar'
import Footer from './components/footer'
import MainContainer from './components/mainContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;