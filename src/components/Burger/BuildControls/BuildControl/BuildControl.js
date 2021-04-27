import React from 'react';

import  './BuildControl.css';

const buildControl = (props) =>{
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <div className="Less">Less</div>
            <div className="More" onClick={props.added}>More</div>
        </div>
    )
}

export default buildControl;
