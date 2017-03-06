import React from 'react';

const Users = ({users, makeAdmin}) => {
  return (
    <div>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              <button className="btn-warning">Reset password</button>
              {!user.isAdmin && <button className="btn-primary btn-left" onClick={() => makeAdmin(user.id)}>Make admin</button>}
              <button className="btn-danger btn-left">Delete user</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Users;
