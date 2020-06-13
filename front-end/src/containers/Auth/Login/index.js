import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {

  return (
    <div>
      <h1>Login page</h1>
      <Link to='/home'>
        <button type="button" className="btn btn-primary">Login</button>
      </Link>
    </div>
  )
};

export default  Login;