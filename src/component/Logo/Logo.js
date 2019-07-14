import React from 'react';
import classes from './Logo.css';
import LogoImg from '../../assets/burger-logo.png';

const Logo = () =>(
    <div className={classes.Logo}>
        <img src={LogoImg} alt="MyBurger" />
    </div>
)
export default Logo;
