import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    meat:2.0,
    cheese:0.5,
    salad:0.3,
    bacon:0.6
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            meat:0,
            cheese:0,
            salad:0,
            bacon:0
        },
        totalPrice: 3.0,
        isPurchasable:false,
        purchasing:false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = newCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];

        this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
        this.updatePurchase(updatedIngredients); 
    }

    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const newCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = newCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type];

        this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
        this.updatePurchase(updatedIngredients); 
    }

    updatePurchase = (ingredients) => {
        const sum = Object.keys(ingredients).map(
            ingredientKey => {
                return ingredients[ingredientKey];
            }
        ).reduce((sum, el) => {
            return sum+el;
        },0);

        this.setState({isPurchasable: sum > 0}); 

    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing:false});
    }

    continuePurchaseHandler = () => {
        alert("continue");
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelPurchasing={this.cancelPurchaseHandler}>
                    <OrderSummary 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchaseCancel={this.cancelPurchaseHandler}
                    purchaseContinue={this.continuePurchaseHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.deleteIngredientHandler}
                disabledIngredient={disabledInfo}
                totalPrice={this.state.totalPrice} 
                isPurchasable={this.state.isPurchasable}
                purchasing={this.purchaseHandler}/>
            </Aux>
        );
    }


}

export default BurgerBuilder;