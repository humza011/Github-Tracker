import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        console.log(this.props.user)
    }

    static propTypes = {
        loading : PropTypes.bool,
        user : PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired,
    }

    render() {

         const {
             name,
             avatar_url,
             location,
             bio,
             html_user,
             followers,
             following,
             blog,
             company
         } = this.props.user;

        const {loading} = this.props;

        if(loading) return (
            <Spinner />
        )
         return (
            <Fragment>
               <Link to='/'>Back to Search</Link>
               <div className="card grid-2">
                   <div className="all-center">
                       <img src={avatar_url} alt="Pic" style={{width:'130 px'}} />
                       <h1>{name}</h1> 
                        {location && <Fragment><p>Location : {location}</p></Fragment>}
                   </div>
                    <div>
                        {bio && <Fragment><p>Bio : {bio}</p></Fragment>}
                        {followers && <Fragment><p>Followers : {followers}</p></Fragment>}
                        {following && <Fragment><p>Following : {following}</p></Fragment>}
                        {blog && <Fragment><p>Website : {blog}</p></Fragment>}
                        {company && <Fragment><p>Company : {company}</p></Fragment>}
                        
                        <a href={html_user} className="btn btn-danger my-2">Visit Github Profile</a>
                    </div>
                    
               </div>

            </Fragment>
        )
    }
}

export default User
