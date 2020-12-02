import React, { useContext, useState } from 'react';
import './Home.css';
import fakeData from '../fakeData/fakeData.js';
import TravelPlace from '../TravelPlace/TravelPlace';
import  Details  from '../Details/Details';
import { SelectedProductContext } from '../../App';



const Home = () => {

    const [product, setProduct] = useState(fakeData);
    const [cart,setCart]=useContext(SelectedProductContext);
    const handleAddProduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    };

    return (
        <div className='main-page' >
            <div className='details-page'>
                <Details cart={cart}></Details>
            </div>
            <div className='travelPlace-page'>
                {
                    product.map(pd => <TravelPlace product={pd} handleAddProduct={handleAddProduct} key={pd.id}></TravelPlace>)
                }
            </div>

        </div>
    );
};

export default Home;