import { Container } from '@material-ui/core';
import React from 'react';
import logo from '../../Logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <Container fixed>
            <div className='header'>
                <div className='header-logo'>
                    <img className='header-img' src={logo} alt="" />
                </div>
                <div className='search-part'>
                    <i><SearchIcon/></i>
                    <input type="search" name="search" id=""placeholder="Search Your Destination..."/>
                </div>
                <nav>
                    <a href="/news">News</a>
                    <a href="/destination">Destination</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Login</a>
                </nav>
            </div>
        </Container>
    );
};

export default Header;