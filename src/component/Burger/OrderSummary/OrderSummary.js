import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'
const OrderSummary= ( props ) =>{
    const orderSummary = Object.keys(props.ingredients)
    .map(igkey =>(
        <li key={igkey}> <span style={{textTransform: 'capitalize'}}>{igkey} </span>: {props.ingredients[igkey]} </li>
    ) ) 
    
    return (
        <Aux>
            <div> The ingredients is as following:</div>
            <ul>
            {orderSummary}
            </ul>
            <div><strong>TOTAL PRICE: {props.totalPrice}</strong></div>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        </Aux>
    )


}
export default OrderSummary;