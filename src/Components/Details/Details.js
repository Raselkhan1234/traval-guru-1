import React from 'react';
import './Details.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Details = (props) => {
    const carts=props.cart;
   
    
    let newCart=0;
    for (let i = 0; i < carts.length; i++) {
        const element = carts[i];
        newCart=element;
        
    };
  
    return (
        <div className='detail-page'>
            <h1>{newCart.name}</h1>
            <p>{newCart.detail}</p>
            <button>Booking  <span> <ArrowForwardIcon></ArrowForwardIcon> </span></button>
            
            
        </div>
    );
};

export default Details;