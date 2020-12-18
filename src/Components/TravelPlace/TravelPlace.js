import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './TravelPlace.css';

const TravelPlace = (props) => {
    const { name, image, id } = props.product;

    return (
        <div className='product-items'>
          
            <Link to={"/place/" + id}><img onClick={() => props.handleAddProduct(props.product)} src={image} alt="" /></Link> 
             <span><h3>{name}</h3></span>
        </div>
       
    );
};

export default TravelPlace;