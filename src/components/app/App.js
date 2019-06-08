import React from 'react';
import {Route} from 'react-router-dom';
import Animate from '../../animate/src/components/app/App'
import Login from '../../fund_me/src/components/login/Login'
import Signup from '../../fund_me/src/components/sign_up/Sign_up'
import Dashboard from '../../fund_me/src/components/kickstarter/Kickstarter'
import SuggestQuery from '../../fund_me/src/components/suggest_query/Suggest_query'
import Home from '../home/Home'
import {loadAuthToken} from '../../fund_me/src/local-storage'

export default class App extends React.Component{
  componentDidMount(){
    document.title = 'Jonathon Garrett'
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/animate" component={Animate} />
        <Route exact path="/fund_me" component={Login} />
        <Route exact path="/fund_me/dashboard"
         render={(props) => <Dashboard {...props} isAuthed={loadAuthToken()} />}/>
        <Route exact path="/fund_me/register" component={Signup} />
        <Route exact path="/fund_me/suggest_query"
        render={(props) => <SuggestQuery isAuthed={loadAuthToken()} />}/>
      </div>
  );
  }
}