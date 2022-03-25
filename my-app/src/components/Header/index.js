import React, { useState, useEffect, useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import api from '../../services/api';
import './styles.css';

const Header = ({ sidebarState }) => {
  const [user, setUser] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const history = useHistory();

  const loadUser = async () => {
    const response = await api.get('/me');
    setUser(response.data.display_name);
    localStorage.setItem('user', response.data.display_name);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  }

  const dropdownMenu = useCallback(
    () => setShowDropdown((value) => !value),
    []
  );

  return (
    <div id="header">
      <div className="sidebar-toggle" onClick={sidebarState}>
        <GiHamburgerMenu />
      </div>
      <div
        className="user-menu"
        onClick={dropdownMenu}
        onBlur={() => setShowDropdown(false)}
      >
        <div className="user">{user}</div>
        <div
          className="user-content"
          style={
            showDropdown
              ? { display: 'block' }
              : { display: 'none' }
          }
        >
          <ul>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
