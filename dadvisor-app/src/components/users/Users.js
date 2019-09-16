import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleUser from './SingleUser';

const Users = () => {
    const [users, setUsers] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=5')
        .then(res => {
            console.log(res.data)
            setUsers(res.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
        <div>
            {users.map(user => {
                return (
                <>
                    <h1>{user.name.first} {user.name.last}</h1>
                    <img src={user.picture.medium} />
                    <h3>{user.location.city}</h3>
                    <h4>{user.location.state}</h4>
                    <button>Get Single User</button>
                </>
                )
            })}
        </div>
        </>
    )
}

export default Users;