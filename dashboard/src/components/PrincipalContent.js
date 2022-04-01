import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import LastProduct from './LastProduct';
import Categories from './Categories';
import LastUserCreated from './LastUserCreated';
import ListProducts from './ListProducts';



function PrincipalContent(){
    return(
    <React.Fragment>
        <Header />
      <Cards /> 
      <LastProduct/>
      <Categories/>
      <LastUserCreated/>
      <Footer />
      </React.Fragment>
    )
}

export default PrincipalContent;