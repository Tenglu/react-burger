import React from 'react';
import classes from './Menu.css';
import Logo from '../../../Logo/Logo';
const Menu = ( props ) => (
    <div className={classes.DrawerToggle} onClick ={props.clicked} src={Logo}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default Menu;