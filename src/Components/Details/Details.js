import React, { useState } from 'react';
import './Details.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Details = (props) => {
    const carts=props.cart;

    
    const [value,setValue]=useState({
        name:"Cox's bazar",
        detail:"Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    })
    
    let newCart=0;
    for (let i = 0; i < carts.length; i++) {
        const element = carts[i];
        newCart=element;
        setValue(newCart);
        
    };
  
  
    return (
        <div className='detail-page'>
            <h1>{value.name}</h1>
            <p>{value.detail}</p>
            <button>Booking  <span> <ArrowForwardIcon></ArrowForwardIcon> </span></button>
            
            
        </div>
    );
};

export default Details;