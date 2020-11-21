import React from 'react';
import StartApp from './StartApp/StartApp/StartApp';
import Register from './UserAuth/Register/Register';
import Login from './UserAuth/Login/Login';
import ForgetPwd from './UserAuth/ForgetPwd/ForgetPwd';
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Profil from './MyCompte/Profil/Profil';
import Movie from './Movie/Movie';
import {Route, BrowserRouter ,Switch, Redirect} from 'react-router-dom'
import NewsLetter from './MyCompte/NewsLetter/NewsLetter';

function App() {
  const allUser = <BrowserRouter >
                        <Switch>
                            <Route exact path='/' component={StartApp} />
                            <Route exact path='/Register' component={Register} />
                            <Route path='/Login' component={Login} />
                            <Route path='/ForgetPwd' component={ForgetPwd} />
                            <Redirect to='/Login'/>
                          </Switch>
                    </BrowserRouter>

  const registeredUser = <BrowserRouter >
                      <Layout>
                        <Switch>  
                          <Route path='/Home' component={Home} /> 
                          <Route path='/Profil/' component={Profil} />   
                          <Route path='/Movie/:id' component={Movie} />   
                          <Route path='/NewsLetter' component={NewsLetter} /> 
                          <Redirect to='/Home'/>
                        </Switch>
                      </Layout>
                    </BrowserRouter>


  const access = localStorage.getItem('idToken') ? registeredUser : allUser

  return (
    <>
      {access}
    </>
  );
}

export default App;
