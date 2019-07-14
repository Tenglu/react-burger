import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
const Modal = (props) =>(
    <Aux>
        <Backdrop disappear={props.modalDisappear} show={props.order}></Backdrop>
        <div className={classes.Modal}
        style={{transform:props.order? 'translateY(0)':'translateY(-100vh)',
            opacity : props.order ? '1':'0' }}
        >
            {props.children}
        </div>
    </Aux>
)
export default Modal;