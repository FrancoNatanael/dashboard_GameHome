import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react';

function Cards(){

    
    const [cardUsersCount,setCardUsersCount] = useState([]);
    const [cardTotalProducts, setCardTotalProducts] = useState([]);


   

    useEffect(()=>{

        fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            console.log(data);
            setCardUsersCount(data.total)
        })

    },[cardUsersCount]);

    useEffect(()=>{

        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            console.log(data);
            setCardTotalProducts(data.count)
        });

    },[cardTotalProducts])



    


   

    const cartUsers = {
        title:'Total de usuarios',
        color:'primary',
        cuantity:cardUsersCount,
        icon:'fa-user-check'
    };

    const cardTotalProductos = {
        title:'Total de productos' ,
        color:'primary',
        cuantity:cardTotalProducts,
        icon:'fa-user-check'
    }



    let cartProps = [cartUsers, cardTotalProductos];

    return (
    
        <div className="row">
            
           {cartProps.map( (cart, i) => {

                return <SmallCard {...cart} key={i}/>
            
            })}

        </div>
    )
}

export default Cards;