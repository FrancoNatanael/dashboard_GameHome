import React from "react";
import CardCategory from "./CardCategory";
import { useEffect, useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch('api/products')
      .then(response => {
       return response.json();
      })
      .then(data => {
        setCategories(data.countByCategory)
    })
}, [categories]);

  return (
    <div>
            <h3 className="titulos">Total de productos por categoría:</h3>
            
                {categories.length === 0 && <p>Cargando...</p>}
                {
                    categories.map((category, i) => {
                         let key = Object.entries(category) 
                        return <CardCategory category={key[0][0]} count={key[0][1]} />
                    })
                }

           
        </div>
  );
}

export default Categories;