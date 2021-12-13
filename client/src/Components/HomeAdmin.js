import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUsers } from '../redux/userAction'

const HomeAdmin = () => {
    const {users,loading} = useSelector(state => state.alluser)
const dispatch = useDispatch()

    return (
        <div>
            
            {users.userRole==='Admin'?<Navigate to='/admin'/>:users.userRole==='Manager'?<Navigate to='/manager'/>:<Navigate to='/'/>
}
        </div>
    )
}

export default HomeAdmin
