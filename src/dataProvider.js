import {Admin, Resource,CustomRoutes,Login,fetchUtils,useGetList,Loading} from 'react-admin'
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
  
  export default dataProvider