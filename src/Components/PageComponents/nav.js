import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
        <nav>
            <h3>Links</h3>
            <ul>
                <Link to='/examples'>
                  <li>Example Components</li>
                </Link>
                <Link to='/userprofile'>
                  <li>User Profile Page</li>
                </Link>
                <Link to='/'>
                  <li>HomePage</li>
                </Link>
                <Link to='/projectpage'>
                  <li>Project Page</li>
                </Link>
                <Link to='/searchpage'>
                  <li>Search Page</li>
                </Link>
            </ul>
        </nav>
  );
}

export default Nav;
