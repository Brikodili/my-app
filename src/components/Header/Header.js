import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <header className="header">
        <nav>
            <ul className="header__nav nav">
                <li className="nav__item">
                    <Link to='/' className="nav__link">News</Link>
                </li>
                <li className="nav__item">
                    <Link to='/notes' className="nav__link">Notes</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
