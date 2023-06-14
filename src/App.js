
import './App.css';
import authProvider from './AuthProvider';
import AuthPage from './AuthPage'
import Main from './Main';
import {Admin, Resource,CustomRoutes,Login,fetchUtils} from 'react-admin'
import lb4Provider from 'react-admin-lb4'
import { Route } from "react-router-dom";
import { PostList } from './post';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const  token  = JSON.parse(localStorage.getItem('auth')).accessToken;
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://3.65.149.62/test-api',httpClient);
console.log()
function App() {
  /* const dataProvider =lb4Provider('http://3.65.149.62/test-api/') */
  console.log()
  return (
    <Admin  dataProvider={dataProvider} authProvider={authProvider} loginPage={AuthPage}  requireAuth >
      <Resource name='contacts' list={PostList}/>

    </Admin>
  );
}

export default App;
