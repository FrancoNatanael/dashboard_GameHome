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

            
            <div className="card-body">
              <h3 className="titulos">Total de productos por categoría:</h3>
            <div className="card shadow mb-4">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Total</th>
                               
                    </tr>
                    </thead>
                {categories.length === 0 && <p>Cargando...</p>}
                {
                    categories.map((category, i) => {
                         let key = Object.entries(category) 
                         return <CardCategory category={key[0][0]} count={key[0][1]} />
                    })
                }
              </table>
                  </div>
                </div>
            </div>
           
  );
}

export default Categories;