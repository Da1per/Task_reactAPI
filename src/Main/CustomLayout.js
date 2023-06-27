
import { Resource, useAuthenticated} from 'react-admin'
import { Title, useGetList,Login} from 'react-admin';
import * as React from 'react';
import { useState } from 'react';
import CustomAside from '../LeftBar/CustomAside';
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
