import React from 'react';
import './Login.css';
import {reduxForm, Field} from 'redux-form';
import {withRouter, Link} from 'react-router-dom';
import {authUser} from '../../actions/users';
import {saveAuthToken} from '../../local-storage'

export class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      feedback: ''
    };
  }

  onSubmit(e) {
    const user = {username: e.target.username.value, password: e.target.password.value};
    authUser(user, 'login').then( res => {
      if(res.status){
        this.setState({
          feedback : 'invalid username and password combination'
        })
      }
      else{
        saveAuthToken(res.authToken);
        this.props.history.push('/fund_me/dashboard')
      }
    })
}

  username_change = (e) => {
    this.setState({username : e.target.value});
  }

  password_change = (e) => {
    this.setState({password : e.target.value})
  }

  render(){
    return (
      <div className="full_page">
        <div className="title_box">
          <label className="title_text">Fund me comparisons</label>
          <label className="title_description">Compare kickstarter vs Indiegogo</label>
        </div>
        <form className="login_center_box" onSubmit={(e)=>{
          e.preventDefault();
          this.onSubmit(e);
          }}>
          <p className ="sign_up_text_description">{this.state.feedback}</p>
          <Field name="username" className="login_centered login_username_input login_input_boxes" id="username" 
          type="text" placeholder="Username" component="input"/>
          <Field name="password" className="login_centered login_password_input login_input_boxes" id="password" 
          type="password" placeholder="Password" component="input"/>
          <button disabled={this.props.pristine || this.props.submitting} className="login_centered login_login_button" >Sign in</button>
        </form>
        <Link to="/fund_me/register">
          <button className="login_centered login_sign_up_button">Sign up</button>
        </Link>
        <div className = "testAccountBox">
          <p className = "username">Username = dev</p>
          <p className = "password">Password = dev123456</p>
        </div>
      </div>
    );
  }
}

export default 
withRouter(
  reduxForm({
    form: 'contact'
  })(Login)
)
