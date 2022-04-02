import React from 'react';
import { useEffect, useState } from 'react';
function LastProduct(){

    const [lastProduct,setLastProduct] = useState([]);

    useEffect(()=>{

        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
           

           
            setLastProduct(data.products.pop())
        })

    },[lastProduct])


    /*let product = lastProduct*/
    
    return(
   
    
        
        <div className="col-lg-6 mb-4">
            
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <span className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</span>
                    
                    <h5 className="m-0 font-weight-bold text-gray-800">{lastProduct.Name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.Image} alt="Product"/>
                    </div>
                    <p>{lastProduct.Description}</p>
                    <a className="btn btn-danger text-center" target="_blank" rel="nofollow" href="/">Ver más</a>
                </div>
            </div>
        </div>
        
   
    )
}

export default LastProduct;