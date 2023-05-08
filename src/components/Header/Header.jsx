import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>
                Welcome to BookHub - your ultimate destination for books! Discover our vast collection of books from every genre and author, browse our user-friendly website, and enjoy competitive pricing and fast shipping. Join our community of book lovers and explore our book recommendations, reviews, and reading lists. Start your reading journey with BookHub today!
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header