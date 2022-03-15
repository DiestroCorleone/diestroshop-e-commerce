import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [navBarOpen, setNavBarOpen] = useState(false);

  function openNavBar() {
    setNavBarOpen((prevNavBarOpen) => !prevNavBarOpen);
  }

  function showNavLinks() {
    if (!navBarOpen && props.windowWidth < 800) {
      return 'invisible';
    } else {
      return 'col-full flex flex-row around no-margin';
    }
  }

  return (
    <nav className="col-full back-tertiary box-shadow">
      <ul>
        <li
          className={
            navBarOpen ? 'invisible' : 'padded text-center show-on-phone'
          }
        >
          <a title="MENU" onClick={() => openNavBar()}>
            &#9776;
          </a>
        </li>
        <li
          className={
            !navBarOpen ? 'invisible' : 'padded text-center show-on-phone'
          }
        >
          <a title="CLOSE MENU" onClick={() => openNavBar()}>
            x
          </a>
        </li>
        <div className={showNavLinks()}>
          <li className="padded text-center">
            <Link to="/" onClick={() => openNavBar()}>
              DiestroShop
            </Link>
          </li>
          <li className="padded text-center">
            <Link to="/" onClick={() => openNavBar()}>
              Home
            </Link>
          </li>
          <li className="padded text-center">
            <Link to="/about" onClick={() => openNavBar()}>
              About us
            </Link>
          </li>
          <li className="padded text-center">
            <Link to="/products" onClick={() => openNavBar()}>
              Products
            </Link>
          </li>
          <li className="padded text-center">
            <Link
              to="/cart"
              onClick={() => openNavBar()}
              className="back-quaternary color-secondary padded-sm rounded-soft"
            >
              Cart ({props.itemsInCart})
            </Link>
          </li>
          <li
            className="padded text-center"
            onClick={() => props.toggleDarkMode()}
            title="Toggle Dark Mode"
          >
            <i className="fa fa-fw fa-lightbulb-o"></i>
          </li>
        </div>
      </ul>
    </nav>
  );
}
