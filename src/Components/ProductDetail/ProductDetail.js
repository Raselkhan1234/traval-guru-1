import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';
import './ProductDetail.css';
import DateRangeIcon from '@material-ui/icons/DateRange';






const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId);
    const item = fakeData.find(pd => pd.id === productId);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const history=useHistory();
    const handleBooking=()=>{
        
        
        history.push('/destination');

    }
   
    // console.log(watch("example"));

    const handleBlur=(e)=>{
        if(e.target.name==="form"){
            const isFormValid=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9]))$/.test(e.target.value);
        }
        if(e.target.name==="to"){
            const isFormValid=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9]))$/.test(e.target.value);
        }
    }

    return (
        <div className="productDetail-page">
            <div className="productDetail-info">
                <h1>{item.name}</h1>
                <p>{item.moreDetail}</p>

            </div>
            <div className='productDetail-form'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label id='first'>Origin</label>
                    <input name="Origin" id='origin' ref={register({ required: true })}  required/>
                

                    <label id='second'>Destination</label>
                    <input name="Destination" id="destination" ref={register({ required: true })} required />
                 

                    <label id='three'>Form</label>
                    <input name="form" id="form" onBlur={handleBlur} ref={register({ required: true })}  required/>
                     <span id="form-icon"><DateRangeIcon></DateRangeIcon> </span>
                  

                    <label id='four'>To</label>
                    <input name="to" id="to" onBlur={handleBlur} ref={register({ required: true })} required />
                    <span id="to-icon"><DateRangeIcon></DateRangeIcon> </span>
                 
                   <Link to={"/"+productId}> <input type="submit" onClick={handleBooking} value="Start Booking" id="btn" /></Link>
                    
                </form>




            </div>

        </div>
    );
};

export default ProductDetail;