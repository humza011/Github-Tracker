import React from 'react'

const UserItem = (props) => {
    const { avatar_url , html_url ,login } = props.user;
    return (
        <div className = 'card text-center'>
            <img src={avatar_url} alt="profile-avatar" style = {{width : 100, borderRadius : 100}}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
            </div>
        </div>
    )
}


export default UserItem
