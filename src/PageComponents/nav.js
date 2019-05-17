import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
        <nav>
            <h3>Links</h3>
            <ul>
                <Link to='/examples'>
                  <li>Example Components</li>
                </Link>
                <Link to='/'>
                  <li>HomePage</li>
                </Link>
            </ul>
        </nav>
  );
}

export default Nav;
