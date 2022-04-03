import React from 'react';
//import SmallCard from './SmallCard';
import Tarjetas from './Tarjetas';
import { useEffect, useState } from 'react';
import { BsFillAlarmFill } from "react-icons/bs";

function Cards(){

    
    const [cardUsersCount,setCardUsersCount] = useState([]);
    const [cardTotalProducts, setCardTotalProducts] = useState([]);
    const [cardTotalCategories,setCardTotalCategories] = useState([]);

   

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

    },[cardTotalProducts]);

    useEffect(()=>{

        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            let count = 0;

            for(let i=0;i<data.countByCategory.length;i++){
                count++
            }

            setCardTotalCategories(count)
        });

    },[cardTotalCategories]);
    

    const cartUsers = {
        title:'Total de usuarios',
        color:'Light',
        cuantity:cardUsersCount,
        icon:'person-circle.svg'
    };

    const cardTotalProductos = {
        title:'Total de productos' ,
        color:'primary',
        cuantity:cardTotalProducts,
        icon:'laptop.svg'
    };

    const cardTotalCategorias = {
        title:'Total de categorias' ,
        color:'primary',
        cuantity:cardTotalCategories,
        icon:'tag-fill.svg'
    }


    let cartProps = [cartUsers, cardTotalProductos,cardTotalCategorias];

    return (
    
        <div className="row">
            
           {cartProps.map( (cart, i) => {

                return <Tarjetas {...cart} key={i}/>
               
            })}

        </div>
    )
}

export default Cards;