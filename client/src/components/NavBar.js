import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import img from "../../assets/images/yi_logo.png";

// My css
import css from "../css/navbar.module.css";

const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect( () => {
        verifyUser();
    }, [])

    const verifyUser = async()=>{
        if(localStorage.getItem('token')){
            const response = await fetch(`http://localhost:5000/api/user/verify-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
    
            const result = await response.json()
            // console.log("here: ", result);
            if(result.isAdmin===true){
                setIsAdmin(true);
            }
        }
    }
    

  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    navigate("/login");
  };

  const handleLogoutClick = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleRegisterClick = (e) => {
    localStorage.removeItem("token");
    navigate("/register");
  };

  const listItemStyle = { fontSize: "0.9rem", fontWeight: "400" };

  return (
    <nav className={`${css.outerNav} navbar navbar-expand-lg fixed-top`}>
      {/* <Link to="/" style={{ marginRight: "1rem" }}>
        <img src={img} alt="yi-logo" className={css.yiImg} />
      </Link> */}
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto text-ff1">
          <li className="nav-item active">
            <Link className="nav-link active" to="/" style={listItemStyle}>
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link active"
              to="/about"
              style={listItemStyle}
            >
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link active"
              to="/more"
              style={listItemStyle}
            >
              More
            </Link>
          </li>
          {
            isAdmin && (
                <li className="nav-item active">
                <Link
                className="nav-link active"
                to="/admin/analytics"
                style={listItemStyle}
                >
                Analytics
                </Link>
            </li>
            )
          }
        </ul>

        <ul className="navbar-nav ms-auto">
          {localStorage.getItem("token") ? (
            <button
              className={`${css.navBtn} text-ff1 navbar-right`}
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className={`${css.navBtn} text-ff1 navbar-right`}
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button
                className={`${css.navBtn} text-ff1 navbar-right`}
                onClick={handleRegisterClick}
              >
                Register
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
