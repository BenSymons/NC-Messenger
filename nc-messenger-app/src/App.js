import './App.css';
import Header from './Components/Header'
import ChatRoom from './Components/ChatRoom'
import { Component } from 'react';

class App extends Component {

  state = {
    username: '',
    loggedInUser: null
  }

  toggleLoggedIn = (event) => {
    event.preventDefault();
    if (!this.state.loggedInUser) {
    this.setState(currentState => {
      return {loggedInUser: !currentState.loggedInUser}
    }) 
} else {
    this.setState(currentState => {
        return {loggedInUser: !currentState.loggedInUser,
                username: ''
    }})
}
}

handleChange = (value) => {
  this.setState({
      username: value
  })
}

  
  render() {
    return (
    <div className="App">
      <Header toggleLoggedIn={this.toggleLoggedIn} username={this.state.username} loggedInUser={this.state.loggedInUser} handleChange={this.handleChange}/>
      {/* <UserList/> */}
      <ChatRoom username={this.state.username}/>
    </div>
    )};
}

export default App;
