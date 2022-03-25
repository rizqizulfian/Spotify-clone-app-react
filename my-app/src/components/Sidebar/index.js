import React from 'react';

import { NavLink } from 'react-router-dom';
import { menuItems, libraryItems } from './constants';
import logo from '../../assets/spotify-clone-app-logo-white.png';
import './styles.css';

const Sidebar = ({ sidebarState }) => {
    return (
        <div id="sidebar">
            <img src={logo} alt="logo" />
            <ul>
                {menuItems.map((data) => (
                    <li
                        key={data.path}
                        className="menu-item"
                        onClick={window.innerWidth <= 810 ? sidebarState : null}
                    >
                        <NavLink exact className="item-link" to={data.path}>
                            <div className="item-icon">{data.icon}</div>
                            <div className="item-text">{data.label}</div>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="user-playlists">
                <hr />
                <ul>
                    {libraryItems.map((data) => (
                        <li
                            key={data.path}
                            className="menu-item"
                            onClick={
                                window.innerWidth <= 810 ? sidebarState : null
                            }
                        >
                            <NavLink exact className="item-link" to={data.path}>
                                <div className="item-icon">{data.icon}</div>
                                <div className="item-text">{data.label}</div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
