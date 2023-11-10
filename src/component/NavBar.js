import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success text-white">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd21FT6fU7OmR4R3QwueLSSYITxxqNJ_Y9jQgLjpMPpQSZK8kvsjhbyug2nEEw-FUOqWU&usqp=CAU"
        alt=""
        width="37"
        height="35"
      />
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/Home">
            Jersey Wrld
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          
          <FaShoppingCart size={24} color="white" style={{ marginLeft: '10px' }} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
