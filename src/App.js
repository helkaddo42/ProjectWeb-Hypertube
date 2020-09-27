import React from 'react';
import StartApp from './StartApp/StartApp/StartApp';
import Register from './UserAuth/Register/Register';
import Login from './UserAuth/Login/Login';
import ForgetPwd from './UserAuth/ForgetPwd/ForgetPwd';
import Layout from './Layout/Layout'
import Home from './Home/Home'
import ErrorPage from './ErrorPage/ErrorPage'
import {Route, BrowserRouter ,Switch, Redirect} from 'react-router-dom'


function App() {
  const allUser = <BrowserRouter >
                        <Switch>
                            <Route exact path='/' component={StartApp} />
                            <Route exact path='/Register' component={Register} />
                            <Route path='/Login' component={Login} />
                            <Route path='/ForgetPwd' component={ForgetPwd} />
                            <Route component={ErrorPage} />
                          </Switch>
                    </BrowserRouter>

  const registeredUser = <BrowserRouter >
                      <Layout>
                        <Switch>  
                          <Route path='/Home' component={Home} />   
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
