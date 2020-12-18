import React, { useContext, useState } from 'react';
import './Home.css';
import fakeData from '../fakeData/fakeData.js';
import TravelPlace from '../TravelPlace/TravelPlace';
import Details from '../Details/Details';
import { SelectedProductContext } from '../../App';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';





const Home = () => {

    const [product, setProduct] = useState(fakeData);
    const [cart, setCart] = useContext(SelectedProductContext);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='main' >
            <div className='details-page'>
                <Details cart={cart}></Details>
            </div>
            <div className='travelPlace-page'>
            {/* <ArrowBackIosIcon className='left-arrow'></ArrowBackIosIcon>
            <ArrowForwardIosIcon className='right-arrow'></ArrowForwardIosIcon> */}
                {
                    product.map(pd => <TravelPlace product={pd} handleAddProduct={handleAddProduct} key={pd.id}></TravelPlace>)
                }
                
            </div>
        </div>
    );
};

export default Home;