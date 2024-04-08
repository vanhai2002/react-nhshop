import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseCategory from "../hook/UseCategory";

const Header = () => {
  const { data, isLoading } = UseCategory();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <header className="header">
          <div className="container">
            <div className="header-inner">
              <a href="/" className="header__logo">
                <img src="../assets/logo.svg" alt="" />
              </a>
              <div className="button-mobile">
                <button id="menuMobile">=</button>
              </div>
              <nav className="main-menu">
                <ul className="main-menu__list">
                  <li className="main-menu__item">
                    <NavLink to="/" className="main-menu__link">
                      Home
                    </NavLink>
                  </li>
                  <li className="main-menu__item">
                    <NavLink to="/shop" className="main-menu__link">
                      Shop
                    <div className="dropdown-content">
                        {data?.map((item, index) => (
                           <div key={index} className="category">
                             <Link
                              to={`/category/${item._id}`}
                              className="dropdown-item"
                            >
                              {item.name}
                            </Link>
                           </div>
                        ))}
                      </div>
                    </NavLink>
                  </li>
                  <li className="main-menu__item">
                    <NavLink to="/aubout" className="main-menu__link">
                      About
                    </NavLink>
                  </li>
                  <li className="main-menu__item">
                    <NavLink to="/contact" className="main-menu__link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header-items">
                <div className="header-item-user">
                  <span>
                    <img src="../assets/icons/1.svg" />
                  </span>
                </div>
                <div className="header-item-user">
                  <span>
                    <img src="../assets/icons/2.svg" />
                  </span>
                </div>
                <div className="header-item-user">
                  <span>
                    <img src="../assets/icons/3.svg" />
                  </span>
                </div>
                <div className="header-item-user">
                  <span>
                    <a href="./cart.html">
                      <img src="../assets/icons/4.svg" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="banner">
          <img
            src="https://picsum.photos/id/10/1440/500"
            alt="A"
            className="banner__img"
          />
        </section>
      </div>
    </div>
  );
};

export default Header;
