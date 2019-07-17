import React from 'react';
import classes from './Toolbar.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Menu/Menu';
const Toolbar = ( props ) =>(
    <div className={classes.Toolbar}>
        <Menu clicked={props.clicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </div>

)
export default Toolbar;
