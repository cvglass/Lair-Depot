import React from 'react';
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

//unused variable current
const Navbar = ({current, list, changeCurrent, user, adminList, handleChange, inputValue, handleSubmit}) => {

  return (
    <nav className="navbarContainer navbar navbar-default">
      <div className="container-fluid">
        <div className="col-sm-3 col-md-3">
          <form className="navbar-form" id="submitForm" role="search" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="q"
                onChange={handleChange}
                value={inputValue}
                className="form-control"
                placeholder="Search products" />
              <div className="input-group-btn">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-sm-5 col-md-5" >
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

        <div className="col-sm-4 col-md-4">
        {user ? (<WhoAmI /> ): (<Login />)}
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
