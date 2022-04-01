import React from "react";
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Carrucel = () =>{
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

    return(

        <div>


                <Carousel>
                <Carousel.Item interval={1000}>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.Image} alt="Product"/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.Image} alt="Product"/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.Image} alt="Product"/>
                    <Carousel.Caption interval={1000}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>


        </div>




    )

}

export default Carrucel