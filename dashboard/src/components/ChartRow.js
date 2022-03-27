import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Name}</td>
                    <td>{props.Id}</td>
                    <td>{props.Description}</td>
                    <td>{props.Price}</td>
                    
                </tr>
            )
    }
    
        

export default ChartRow;