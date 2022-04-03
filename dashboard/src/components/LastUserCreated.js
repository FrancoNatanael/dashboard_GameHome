import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';




function LastUserCreated(){

    const [LastUser,setLastUser] = useState([]);

    useEffect(()=>{

        fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            
            setLastUser(data.usuarios.pop())
        })

    },[LastUser])

    let user = LastUser



    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <span className="m-0 font-weight-bold text-black-800">Último usuario registrado</span>
                    <h5 className="m-0 font-weight text-gray-800">{user.name + " " + user.lastName}</h5>
                    
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={user.avatar} alt=" Foto del usuario"/>
                        <p>{user.email}</p>
                    </div>
                    
                    <Link className="nav-link" to="/ListUsers">
                        
                        <p className="btn btn-secondary text-center" id='actions'>Ver todos</p>
                        
                    </Link>
                </div>
            </div>
        </div>

        
        
    )
    
 
}

export default LastUserCreated;