import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {

    const ingredientsSummary = Object.keys(props.ingredients).map(
        ingredientKey => {
            return <li><span>{ingredientKey}: </span>{props.ingredients[ingredientKey]}</li>
        }
    );

    return (<Aux>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Do you want to continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
            </Aux>);

};

export default orderSummary;