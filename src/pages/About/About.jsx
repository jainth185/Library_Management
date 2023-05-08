import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>
              Welcome to BookHub, the ultimate destination for book lovers! We are a one-stop-shop for all your reading needs, whether you're looking for the latest bestseller, a classic novel, or a niche book on a specialized topic.At BookHub, we believe that books have the power to change lives, spark imaginations, and inspire creativity. 
            That's why we've carefully curated a vast collection of books from every genre and author you can think of, so you can find the perfect book to suit your interests and preferences.
            Our user-friendly website makes it easy for you to browse our collection, search for specific titles or authors, and make purchases securely and hassle-free. We offer competitive pricing and fast shipping, so you can start reading your new book as soon as possible.
            </p>
            <p className='fs-17'>
            But that's not all – at BookHub, we're more than just an e-commerce site. We're a community of book lovers who are passionate about sharing our love for reading with the world. That's why we offer book recommendations, reviews, and reading lists to help you discover your next great read.
            So why wait? Browse our collection today and discover the magic of books with BookHub!
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
