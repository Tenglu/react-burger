import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SIdeDrawer';
class Layout extends Component {
    state= {
        sideDrawer:false
    }
    closeSideDrawerHandler = ()=>{
        this.setState({sideDrawer:false})
    }

    openSideDrawerHandler = () =>{
        this.setState({sideDrawer:true})
    }
    render( ){
        
        return (
            <Aux>
                <Toolbar clicked={this.openSideDrawerHandler}></Toolbar>
                <SideDrawer open={this.state.sideDrawer} closed = {this.closeSideDrawerHandler}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
            )
    }
    
}
export default Layout;