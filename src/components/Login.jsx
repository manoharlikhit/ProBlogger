import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
import 'boxicons'; 

const Login = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
				<Link to="/" className='w-full text-3xl font-bold text-[#00df9a]'>ProBlogger.</Link>
        </div>
        <div className="navbar-right">
          <Link to="/" className="oval-btn">Home</Link>
        </div>
      </nav>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt' ></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />  Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register here!</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
