import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';
import classes from './BuildControls.css';
const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'}
];  


const BuildControls = ( props ) =>(
    
    <div className={classes.BuildControls}>
        <strong>Current Price:{props.price}</strong>
        {controls.map( (ctrl) =>(
            
                
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={()=>props.ingredientAdded(ctrl.type)}
                    removed={() =>props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]
                    }
                ></BuildControl>
           
        ) )}
        <button className={classes.OrderButton} disabled={!props.orderButton} onClick={props.order}>ORDER NOW</button>
    </div>
)
export default BuildControls;