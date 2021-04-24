import React from 'react';

import Auxilary from '../../hoc/Auxilary';
import './Layout.css';

const layout = (props) =>(
    <React.Fragment>
    
    <div>toolbar, sideDrawer, Backdrop</div>
    <main className="Content">
        {props.children}
    </main>
    </React.Fragment>
);

export default layout;