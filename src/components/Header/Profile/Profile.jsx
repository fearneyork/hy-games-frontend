import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/User'

function Profile() {
    const {user} = useContext(UserContext);
    return (
        <div>
            <img className="avatar" src="https://cdn.kapwing.com/thumbnail_5f1860a18f64e80015819b7b_192004.jpg" alt="avatar"></img>
            <p>{user}</p>
        </div>
    )
}

export default Profile
