///////////---------------IMPORTED--PACKAGE---------///////////
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

///////////---------IMPORTED--COMPONENTS--PROJECT---------///////////
import { Login } from './pages/autenticacion/Login';
import { Root } from './pages/Root/Root';
import { UserAdd } from './pages/users/UserAdd';
import { UserPanel } from './pages/users/UserPanel';
import { Users } from './pages/users/Users.js';

import store from './store/store';

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='' element={<Root/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}>
        <Route path='' element={<UserPanel/>}/>
        <Route path='add' element={<UserAdd/>}/>
      </Route>
    </Route>
  ))

  return (
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  );
}

export default App;
