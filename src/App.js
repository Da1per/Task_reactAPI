
import './css/App.css';
import authProvider from './AuthProvider';
import AuthPage from './AuthPage'
import Main from './Main';
import {Admin, Resource,CustomRoutes,Login,fetchUtils,useGetList,Loading} from 'react-admin'
import lb4Provider from 'react-admin-lb4'
import { Route } from "react-router-dom";
import { PostList } from './Main/post';
import simpleRestProvider from 'ra-data-simple-rest';
import CustomLayout from './Main/CustomLayout';
import dataProvider from './dataProvider';


function App() {
  /* const dataProvider =lb4Provider('http://3.65.149.62/test-api/') */
  return (
    <Admin  dataProvider={dataProvider} authProvider={authProvider} loginPage={AuthPage} layout={CustomLayout}  requireAuth >
      <Resource name='contacts' list={PostList}/>
    </Admin>
  );
}

export default App;



