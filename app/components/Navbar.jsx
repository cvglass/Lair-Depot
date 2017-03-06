import React from 'react';
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
const Navbar = ({current, list, changeCurrent, user, adminList, handleChange, inputValue, handleSubmit}) => {
  console.log('we have a Navbar')
  console.log(current);

  return (
    <nav className="navbarContainer navbar navbar-default">
      <div class="container-fluid">
      {user ? (<WhoAmI /> ): (<Login />)}
      <div className="bar">
      <Link to='/'><button className="btn btn-default">Home</button></Link>
      {user ? <Link to='/Profile'><button className="btn btn-default">Profile</button></Link>: null}
      {user ?(  user.isAdmin ? adminList.map((item)=> (
        <Link key ={item.id} to={item.name}>
            <button className="btn btn-default" onClick={() => changeCurrent(item)}> {item.name}</button>
          </Link>
      ))
       : null) : null }
      {
        list.map((item) => (
          <Link key ={item.id} to={item.name}>
            <button className="btn btn-default" onClick={() => changeCurrent(item)}> {item.name}</button>
          </Link>
        ))
      }
      </div>
      <form id="submitForm" onSubmit={handleSubmit}>
        <button className="btn btn-primary" type="submit">Submit</button>
        <input
          onChange={handleChange}
          value={inputValue}
          className="form-control"
          placeholder="Search products"/>
      </form>
      </div>
    </nav>
  )
}

export default Navbar;
