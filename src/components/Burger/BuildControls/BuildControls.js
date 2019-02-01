import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];

const buildControls = ( props ) => (

    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            add={() => props.addIngredient(ctrl.type)}
            remove={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabledIngredient[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.isPurchasable}
        onClick={props.purchasing}>ORDER NOW</button>
    </div>

);

export default buildControls;