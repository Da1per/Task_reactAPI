
import './css/App.css';
import authProvider from './AuthProvider';
import AuthPage from './AuthPage'
import {Admin, Resource} from 'react-admin'
import { PostList } from './Main/post';
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



