import React from 'react';
import './Page404.css'
import compass from '../assets/404-compass-full.webp';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='page404'>
            <div className='page404-404'>
                <span className='page404-404-4'>4</span>
                <img className='page404-404-0-gif' src={compass}></img>
                <span className='page404-404-4'>4</span>
            </div>
            <h1>This page is lost.</h1>
            <p>We've explored deep and wide,<br/>but we can't find the page you were looking for.</p>
            <Link to='/'>
                <div className='page404-back-button'>Navigate back home</div>
            </Link>
        </div>
    );
};

export default Page404;