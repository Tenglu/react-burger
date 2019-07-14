import React from "react";
import classes from "./Burger.css"
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"
const Burger = (props) => {
    let convertedingredients = Object.keys(props.ingredients).map(
        igkey=>{
            return [...Array(props.ingredients[igkey])].map((_,i)=>{
                return (<BurgerIngredients key={igkey+i} type={igkey}></BurgerIngredients>);
            });
    })
    .reduce((ar,el)=>{
       return ar.concat(el);
    },[]);
    if (convertedingredients.length===0){
        convertedingredients=<p>Please start adding ingredients!</p>
    }
    



    return (
    <div className={classes.Burger}>
        <BurgerIngredients type="breadTop"></BurgerIngredients>
        {convertedingredients}
        <BurgerIngredients type="breadBottom"></BurgerIngredients>
    </div>
    );

};

export default Burger;
