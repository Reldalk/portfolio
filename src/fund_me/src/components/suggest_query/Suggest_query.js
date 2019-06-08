import React, {Component} from 'react';
import './Suggest_query.css';
import {submitQuery} from '../../actions/submit_query';
import {reduxForm} from 'redux-form';
import {withRouter, Link} from 'react-router-dom';
import {loadAuthToken, clearAuthToken} from '../../local-storage'

let i = 1;
class Suggest_query extends Component{
  constructor(props) {
    super(props);
    this.state = {
      feedback: 'Submit your query',
      isAuthed: false
    };
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    if (!loadAuthToken()) {
      this.props.history.push('/fund_me')
    }
  }

  returnNumber(number){
    if(number > 10){
      return 'way too many '
    }
    if(number % 10 === 1){
      return number + 'st '
    }
    else if(number % 10 === 2){
      return number + 'nd '
    }
    else if (number % 10 === 3){
      return number + 'rd '
    }
    else
    {
      return number+'th '
    }
  }

  onSubmit(e) {
    const query_info = {title: e.target.title_text.value, description: e.target.description_text.value};
    submitQuery(query_info).then( res => {

      if(res.status){
        this.setState({
          feedback : res.message
        })
      }
      else{
        this.setState({
          feedback: this.returnNumber(i) +  'queries submitted'
        })
        document.getElementById('desc').value = "";
        document.getElementById('title').value = "";
        i+=1
      }
    })
  }

  go_to_previous_page(){
    this.props.history.push('/dashboard')
  }

render(){
  return (
    <div className="full_page_sky">
      <Link to='/fund_me'>
        <button onClick={clearAuthToken} className="logout">Logout</button>
      </Link>
        <form className="query_center_box" onSubmit={(e)=>{
          e.preventDefault();
          this.onSubmit(e);
          }}>
          <p className="feedback_center">{this.state.feedback}</p>
        <div className="top_elements">
          <label className="query_label_one">Query title (What is it?)</label>
          <input id="title" type="text" defaultValue="example: Total Backers" name="title_text" className="title_text_query"></input>
        </div>
        <div className="bottom_elements">
          <label className="query_block">Query Description (What's it do?)</label>
          <textarea id="desc" name="description_text" className="description_box_query"
            defaultValue="Example: This will be a query which displays the total Backers for different fields and categories of the kickstarter and indiegogo database">
          </textarea>
        </div>
        <button type="submit" className="Submit_button">Submit</button>
        <Link to="/fund_me/dashboard">
          <button className="back_button">Back</button>
        </Link>
      </form>
    </div>
  );
}};

export default 
withRouter(
  reduxForm({
    form: 'contact'
  })(Suggest_query)
)
