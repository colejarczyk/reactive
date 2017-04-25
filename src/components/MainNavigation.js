import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = ({categories}) => {
  return (
      <div className="main-nav">
        <div className="row">
          <div className="col-md-1">
            <div className="logo">
              <Link to="/">
                Reactive
              </Link>
            </div>
          </div>
          <div className="col-md-11">
            <ul className="nav nav-pills">
              {
                categories.map((category, index) => (
                    <li key={`navli_${index}`} role="presentation">
                      <NavLink key={`navlink_${index}`}
                               to={`/category/${category.url}`}
                               activeClassName='active'>
                        {category.name}
                      </NavLink>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
  );
};

export default MainNavigation;
