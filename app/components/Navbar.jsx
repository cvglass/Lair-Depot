import React from 'react';
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
const Navbar = ({current, list, changeCurrent, user, adminList, handleChange, inputValue, handleSubmit}) => {

  return (
    <div >
      {user ? (<WhoAmI /> ): (<Login />)}
      <Link to='/'><button>Home</button></Link>
      {user ? <Link to='/Profile'><button>Profile</button></Link>: null}
      {user ?(  user.isAdmin ? adminList.map((item)=> (
        <Link key ={item.id} to={item.name}>
            <button onClick={() => changeCurrent(item)}> {item.name}</button>
          </Link>
      ))
       : null) : null }
      {
        list.map((item) => (
          <Link key ={item.id} to={item.name}>
            <button onClick={() => changeCurrent(item)}> {item.name}</button>
          </Link>
        ))
      }
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue}
          className="form-control"
          placeholder="Search products"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Navbar;
