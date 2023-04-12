import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {currency, expenses, dispatch } = useContext(AppContext);
    const [Budget, setBudget] = useState('2000');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const submitEvent = () => {
        if(Budget > 20000) {
            setBudget("20000");
            alert("The value cannot exceed £20000");
            
            return;
        }else if (Budget < totalExpenses){
            setBudget(totalExpenses);
            alert("You cannot reduce the budget value lower than the spending");
            return;
        } else{
        dispatch({
            type: 'SET_BUDGET',
            payload: Budget,
        });}
    };
    return (
        <div className='alert alert-secondary' style={{ alignItems: 'left' }}>
            <span>Budget: {currency}<input id="userBudget"
                                    value = {Budget}
                                    type='number'
                                    style={{ width: '7rem' , size: 10}}
                                    onChange={(event) => setBudget(event.target.value)}
                                    onClick={submitEvent}>
                                    </input></span>
        </div>
    );
};
export default Budget;
