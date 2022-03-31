import React from "react";
import Table from 'react-bootstrap/Table';
function CardCategory(props) {
    return(
        <div>
            <Table striped bordered hover size="sm">
    
                    <tr>
                        <th>{props.category}</th>
                        <th>{props.count}</th>
                    </tr>
                
            </Table>
            </div>
    )
}

export default CardCategory