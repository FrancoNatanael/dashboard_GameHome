import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
function Tarjetas(props){

    return(
        <div className="col-md-4 mb-4">
            
<CardGroup>
  <Card>
    <Card.Img variant="top" src="logo-174px.png" />
    <Card.Body>
        
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cuantity}</div>
      </Card.Text>
    </Card.Body>
   
  </Card>
    
</CardGroup>
</div>
    )
}
    Tarjetas.defaultProps = {
        title: 'No Title',
        color: 'success',
        cuantity: 'No cuatity',
        img: 'logo-174px.png'
    }
    
    /* PROPTYPES */
    
    Tarjetas.propTypes = {
        atritutes: PropTypes.shape({
            title: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            cuantity: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            icon: PropTypes.string.isRequired
        })
}

export default Tarjetas