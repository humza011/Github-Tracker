//rce helps in creating class component

import React, { useState , Fragment} from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import axios from 'axios'
import './App.css'

const App  = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({}) 
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false) 
  

  // state = {
  //   loading : false,
  //   user : {},
  //   users : [],
  //   alert :null
  // }

  const searchUser = async (text) => {
     setLoading(true)
    const res = await axios(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)  
    setUsers(res.data.items)
    setLoading(false)
    // this.setState({users : res.data.items , loading:false })
  }

  const getUser = async (username) => {
    //this.setState({loading : true})
    setLoading(true)
    const res = await axios(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)  
    setLoading(false)
    setUser(res.data)
    //this.setState({user : res.data , loading:false }) 
  }

  const clearUser = () => { 
    setUsers([])
    setLoading(false)
    //this.setState({users:[] , loading : false})
  }

  const showAlert = (msg , type) => {
    setAlert({msg, type})

    setTimeout(() => {
      setAlert(null)
    }, 5000);
  } 
  
    return (
      <Router>
      <div className='App'>
        <Navbar title="Github Finder" icon="fab fa-github"/> 
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path ='/' 
            render={ props => (
              <Fragment>
                <Search 
                searchUser={searchUser} 
                clearUser ={clearUser} 
                showClear = {users.length > 0 ? true : false}
                setAlert = {showAlert}
                />
                <Users loading={loading} users={users} />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render= { props => (
              <User {...props}  getUser={getUser} user={user}  loading={loading}/>
            )}>

            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    );
}

export default App;
