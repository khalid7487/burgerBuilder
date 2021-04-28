import React from 'react';

import  './BuildControl.css';

const buildControl = (props) =>{
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <div className={props.disabled ?  "disabled" : "Less" }
             onClick={props.removed} 
            disabled={props.disabled}>Less</div>
            <div className="More" onClick={props.added} disabled={props.disabled}>More</div>
        </div>
    )
}

export default buildControl;
