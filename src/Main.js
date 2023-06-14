
import { Resource, useAuthenticated} from 'react-admin'
import { Title, useGetList,Login} from 'react-admin';
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
function Main() {
 
    return (
       <div>
        <Title title="Book Show"/>
       </div>
    );
};

export default Main;
