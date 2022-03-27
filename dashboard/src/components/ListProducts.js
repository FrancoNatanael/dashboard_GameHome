import React from 'react';
import ChartRow from './ChartRow';
import { useEffect, useState } from 'react';



function ListProducts (){

    const [products,setProducts] = useState([]);


    useEffect(()=>{
        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            console.log(data.products);
            setProducts(data.products)
        })
    },[products])


    let productsList = products; 

    


    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Id</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                 <th>Nombre</th>
                                <th>Id</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            productsList.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ListProducts;