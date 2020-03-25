//rce helps in creating class component

import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    loading : false,
    users : [],
    alert :null
  }

  async componentDidMount() {
    this.setState({loading : true})
    const res = await axios(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users : res.data , loading:false })
    
  }

  searchUser = async (text) => {
    this.setState({loading : true})
    const res = await axios(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)  
    //console.log(res)
    this.setState({users : res.data.items , loading:false })
  }

  clearUser = () => { this.setState({users:[] , loading : false})}

  setAlert = (msg , type) => {
    this.setState({alert : {msg : msg, type : type}})

    setTimeout(() => {
      this.setState({alert : null})
    }, 5000);
  } 

  render() {
    return (
      <div className='App'>
        <Navbar title="Github Finder" icon="fab fa-github"/> 
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Search 
          searchUser={this.searchUser} 
          clearUser ={this.clearUser} 
          showClear = {this.state.users.length > 0 ? true : false}
          setAlert = {this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
