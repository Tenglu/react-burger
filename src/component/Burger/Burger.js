import React from "react";
import classes from "./Burger.css"
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"
const Burger = (props) => {
    return (
    <div className={classes.Burger}>
        <BurgerIngredients type="breadTop"></BurgerIngredients>
        <BurgerIngredients type="cheese"></BurgerIngredients>
        <BurgerIngredients type="bacon"></BurgerIngredients>
        <BurgerIngredients type="breadBottom"></BurgerIngredients>
    </div>
    );

};

export default Burger;
