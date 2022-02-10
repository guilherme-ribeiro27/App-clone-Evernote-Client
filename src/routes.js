import React from 'react';
import { BrowserRouter, Routes as Switch,Route} from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register' 
import LoginScreen from './screens/auth/login' 
import NotesIndexScreen from './screens/notes/index' 
import UsersEditScreen from './screens/users/edit'
import PrivateRoute from './components/private_router/index';

const ScreenRoutes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path="/register" element={<RegisterScreen/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/notes" element={<PrivateRoute/>}>
                <Route exact path="/notes" element={<NotesIndexScreen/>}/>
            </Route>
            <Route exact path="/users/edit" element={<PrivateRoute/>}>
                <Route exact path="/users/edit" element={<UsersEditScreen/>}/>
            </Route>
            {/* <PrivateRoute exact path="/notes" element={<NotesIndexScreen/>}/>
            <PrivateRoute exact path="/users/edit" element={<UsersEditScreen/>}/> */}
        </Switch>
    </BrowserRouter>
);

export default ScreenRoutes;