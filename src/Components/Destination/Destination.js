import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';
import './Destination.css';
import star from '../../Icon/star_1_.png'
import { Container } from '@material-ui/core';
import GoogleMap from '../MapComponent/MapComponent';
import SimpleMap from '../MapComponent/MapComponent';
import MapComponent from '../MapComponent/MapComponent';

const Destination = () => {
    const { id } = useParams();
    const product = fakeData.find(pd => pd.id === id);
    // const {image-1,image-2,image-3}  = product;
    const { name, image1, image2, image3 } = product;

    return (
        <Container fixed>
            <div className="destination-container">
                <h6></h6>
                <p>252 stays Apr 13-17 3 guests</p>
                <h1>Stay in {name}</h1>
                <div className="destination-page">


                    <div className="destination-part-1">
                        <div className='cart1'>
                            <div className="cart1-img">
                                <img src={image1} alt="" />

                            </div>
                            <div className='cart1-detail'>
                                <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                <p>4 guests   2 bedrooms   2 beds   2 baths <br />
                        Wif Air conditioning Kitchen <br />
                        Cancellation fexibility availiable <br />
                                </p>
                                <i> <img src={star} alt="" /> 4.9 (20)</i>
                                <h5>$34/</h5>
                                <span> night </span>
                                <strong>$167 total</strong>

                            </div>
                        </div>
                        <div className='cart2'>
                            <div className="cart2-img">
                                <img src={image2} alt="" />

                            </div>
                            <div className='cart2-detail'>
                                <h4>Apartment in Lost Panorama</h4>
                                <p>4 guests   2 bedrooms   2 beds   2 baths <br />
                        Wif Air conditioning Kitchen <br />
                        Cancellation fexibility availiable <br />
                                </p>
                                <i> <img src={star} alt="" /> 4.8 (10)</i>
                                <h5>$52/</h5>
                                <span> night </span>
                                <strong>$167 total</strong>

                            </div>
                        </div>
                        <div className='cart3'>
                            <div className="cart3-img">
                                <img src={image3} alt="" />

                            </div>
                            <div className='cart3-detail'>
                                <h4>AR Lounge & Pool (r&r + b&b)</h4>
                                <p>4 guests   2 bedrooms   2 beds   2 baths <br />
                        Wif Air conditioning Kitchen <br />
                        Cancellation fexibility availiable <br />
                                </p>
                                <i> <img src={star} alt="" />4.9 (25)</i>
                                <h5>$44/</h5>
                                <span> night </span>
                                <strong>$167 total</strong>

                            </div>
                        </div>

                    </div>
                    <div className="destination-part-2">
                        <MapComponent></MapComponent>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Destination;