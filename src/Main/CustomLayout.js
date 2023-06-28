

import * as React from 'react';
import CustomAppBar from '../Header/CustomAppBar';
import { Layout } from 'react-admin';


function CustomLayout(props ) {
 
    return (
        <Layout
            {...props}
            sidebar={() => null} 
            appBar={CustomAppBar}
        />
    );
};

export default CustomLayout;
