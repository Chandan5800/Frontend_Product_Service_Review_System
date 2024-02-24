import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand fw-bolder fst-italic fs-4">
            APNA<span className='text-danger'>REVIEW</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}>
                <Link to="/home" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className={`nav-item dropdown ${location.pathname === '/product' ? 'active' : ''}`}>
                <Link to="/product" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Products
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <Link to="/product" className="dropdown-item">
                      All Category
                    </Link>
                  </li>
                <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Mobiles
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category1" className="dropdown-item">
                      Electronic
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Beauty
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Home & Appliances
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Grocery
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/category2" className="dropdown-item">
                      Lifestyle
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item dropdown ${location.pathname === '/service' ? 'active' : ''}`}>
                <Link to="/service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Services
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <Link to="/service" className="dropdown-item">
                      All Category
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category1" className="dropdown-item">
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category2" className="dropdown-item">
                      Education and Training
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category1" className="dropdown-item">
                      Travel and Accommdation
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category2" className="dropdown-item">
                      Financial Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category1" className="dropdown-item">
                      Technology and Internet
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category2" className="dropdown-item">
                      Restaurants and Cafes
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category1" className="dropdown-item">
                      Home Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/category2" className="dropdown-item">
                      Entertainment
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contactus' ? 'active' : ''}`}>
                <Link to="/contactus" className="nav-link">
                  Contact us
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                <Link to="/login" className="nav-link">
                  Sign In
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success bg-success text-light" type="submit">
                Search
              </button>

              {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user?.firstName ? (
                    <div>
                      <Avatar
                        className='text-white'
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-hashpopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {user?.firstName[0].toUpperCase()}
                      </Avatar>
                      <Menu
                      id='basic-menu'
                      anchorEl={anchorEl}
                      open={openUserMenu}
                      onClose={handCloseUserMenu}
                      MenuListProps={{
                        "aria-labelledby":"basic-button"
                      }}
                      >

                        {
                          login && (
                            <>
                              <MenuItem>
                                <NavLink tag={ReactLink} to="/user/profile">
                                  Profile
                                </NavLink>
                              </MenuItem>
                              <MenuItem>
                                <NavLink onClick={logout}>
                                  Logout
                                </NavLink>
                              </MenuItem>
                            </>

                          )
                        }

                      </Menu>
                    </div>
                  ) : (
                    <Button onClick={() => navigate("/login")} className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Button>
                  )}
                </div> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
