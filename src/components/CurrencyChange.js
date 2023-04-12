import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'
        style={{ size: 10, backgroundColor: 'green', color: 'white'}}> Currency {
      <select name="Currency" id="Currency" 
      //style="{{backgroundColor: {bgColors.Green}}}"
      
            onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar </option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;