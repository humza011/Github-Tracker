import React from 'react'
import {Link} from 'react-router-dom'
const UserItem = (props) => {
    //eslint-disable-next-line
    const { avatar_url , html_url ,login } = props.user;
    return (
        <div className = 'card text-center'>
            <img src={avatar_url} alt="profile-avatar" style = {{width : 100, borderRadius : 100}}/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
            </div>
        </div>
    )
}


export default UserItem
