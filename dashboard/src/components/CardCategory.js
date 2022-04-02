import React from "react";


function CardCategory(props) {
    return(
        
                    <tr>
                        <td>{props.category}</td>
                        <td>{props.count}</td>
                        
                    </tr>
                   
                   
    )
}

export default CardCategory