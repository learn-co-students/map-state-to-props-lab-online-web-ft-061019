import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput);
/*
Wrapping a component in connect as we see above will, by default, pass one function 
to props: dispatch(). This makes it possible for us to dispatch 
custom actions, as we see here in handleOnSubmit().
*/

/*
We can see that, on submit, handleOnSubmit() is called. event.preventDefault() is called to stop the page 
from refreshing, then this.props.dispatch() is called with a custom action, 
{type: 'ADD_USER', user: this.state}.
*/