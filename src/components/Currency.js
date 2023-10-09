import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (newCurrency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    return (
        <select className="selectpicker" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
            <option defaultValue value="£" name="Pound">£ Pound</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
    );
};
export default Remaining;
