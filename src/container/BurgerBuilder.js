import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary';
import Burger from "./../component/Burger/Burger";
import BuildControls from './../component/Burger/BuildControls/BuildControls';
import Modal from '../component/UI/Modal/Modal';
import OrderSummary from '../component/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES={
    salad:0.5,
    cheese: 0.4,
    meat:1.3,
    bacon:0.6
}

class BurgerBuilder extends Component{
    
    state ={
        ingredients:{
            cheese:0,
            bacon:0,
            salad:0,
            meat:0
        },
        totalPrice:4,
        orderButton:false,
        purchasing:false
    }

    updatePurchaseState = (ingredients) =>{
        const sum=Object.keys(ingredients).map(igkey=>{
            return ingredients[igkey];
        }).reduce((sum,el)=>{
            return (sum+el);
        },0);
        
        this.setState({orderButton:sum>0});
    }
        
    addIngredientHandler = (type) =>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updateIngredients={...this.state.ingredients};
        updateIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({ingredients:updateIngredients,totalPrice:newPrice});
        this.updatePurchaseState(updateIngredients);
    }
        
    removeIngredientHandler= (type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount-1;
        const updateIngredients={...this.state.ingredients};
        updateIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({ingredients:updateIngredients,totalPrice:newPrice});
        this.updatePurchaseState(updateIngredients);
    }

    clickOrderHandler =() =>{
        this.setState({purchasing:true});
    }


    cancelModalHandler =() =>{
        this.setState({purchasing:false});
    }

    continueModalHandler =() =>{
        alert("Please Continue");
        this.setState({purchasing:false});
    }

    render(){
        const disabledIngredients={...this.state.ingredients};

        for (let key in disabledIngredients){
            disabledIngredients[key]=disabledIngredients[key]<=0;
        }
    
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal order={this.state.purchasing} modalDisappear={this.cancelModalHandler}>
                    <OrderSummary ingredients={this.state.ingredients}  totalPrice={this.state.totalPrice} purchaseContinued={this.continueModalHandler}  purchaseCancelled={this.cancelModalHandler}/>
                </Modal>
                <BuildControls 
                price={this.state.totalPrice.toFixed(2)}
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler} 
                disabled={disabledIngredients}
                orderButton={this.state.orderButton}
                order={this.clickOrderHandler}
                />
            </Aux>
        )
    }
    
}
export default BurgerBuilder;