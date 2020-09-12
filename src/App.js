import React from 'react';
import StartApp from './StartApp/StartApp/StartApp';
import Register from './UserAuth/Register/Register';
import Login from './UserAuth/Login/Login';
import ForgetPwd from './UserAuth/ForgetPwd/ForgetPwd';
import Layout from './Layout/Layout'
import {Route, BrowserRouter ,Switch, Redirect} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter >
      <Switch>
          <Route exact path='/' component={StartApp} />
          <Layout>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/ForgetPwd' component={ForgetPwd} />
          <Redirect to='/register'/>
          </Layout>

      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
