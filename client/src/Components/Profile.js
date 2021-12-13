import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {users} = useSelector(state => state.alluser)

    return (
        <div>
            <h1>{users.firstName}</h1>
        </div>
    )
}

export default Profile
