import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUsers } from '../redux/userAction'

const HomeAdmin = () => {
    const {users,loading} = useSelector(state => state.alluser)
const dispatch = useDispatch()

    return (
        <div>
            
            {loading?<h1>...loading</h1>:users.userRole==='Manager'?<Navigate to='/admin'/>:<Navigate to='/'/>
}
        </div>
    )
}

export default HomeAdmin
