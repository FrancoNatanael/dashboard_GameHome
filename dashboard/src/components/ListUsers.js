import React from 'react';
import ChartRowUsers from './ChartRowUsers';
import { useEffect, useState } from 'react';



function ListUsers (){

    const [usuarios,setUsuarios] = useState([]);


    useEffect(()=>{
        fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            console.log(data.usuarios);
            setUsuarios(data.usuarios)
        })
    },[usuarios])


    let usersList = usuarios; 

    


    return (
        /* <!-- DataTales Example --> */
        
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Mail</th>
                            </tr>
                        </thead>
                        <tfoot>
                           
                        </tfoot>
                        <tbody>
                            {
                            usersList.map( ( row , i) => {
                                return <ChartRowUsers { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ListUsers;