import React from 'react';

import SingleUser from './SingleUser';

const Users = ({ users }) => {

    return (
        <>
        <div>
            {users.map(user => {
                return (
                    <SingleUser user={user}/>
                )
            })}
        </div>
        </>
    )
}

export default Users;