import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import LastProduct from './components/LastProduct'
import Categories from './components/Categories'
import LastUserCreated from './components/LastUserCreated'
import ListProducts from './components/ListProducts'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cards /> 
      <LastProduct/>
      <Categories/>
      <LastUserCreated/>
      <ListProducts/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
