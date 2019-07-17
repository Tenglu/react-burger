import React from 'react';
import classes from './Logo.css';
import LogoImg from '../../assets/burger-logo.png';

const Logo = ( props ) =>(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={LogoImg} alt="MyBurger" />
    </div>
)
export default Logo;
