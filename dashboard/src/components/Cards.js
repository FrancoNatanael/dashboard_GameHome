import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react';

function Cards(){

    
    const [cardUsersCount,setCardUsersCount] = useState([]);
    


   

    useEffect(()=>{

        fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            console.log(data);
            setCardUsersCount(data.total)
        })

    },[cardUsersCount])


    


   

    let cartUsers = {
        title:'Users quantity' ,
        color:'primary',
        cuantity:cardUsersCount,
        icon:'fa-user-check'
    }




    let cartProps = [cartUsers]

    return (
    
        <div className="row">
            
           {cartProps.map( (cart, i) => {

                return <SmallCard {...cart} key={i}/>
            
            })}

        </div>
    )
}

export default Cards;