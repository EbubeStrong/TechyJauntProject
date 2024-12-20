import React, { useState } from "react";
import homeStyles from "../styles/homePage.module.css";

const categories = [
  { img: "./images/moreimg.jpg", name: "Duplex" },
  { img: "./images/kars.jpg", name: "Flat" },
  { img: "./images/rec.png", name: "Self-Con" },
];

const listings = [
  {
    img: "./images/rec.png",
    title: "Room and parlor self contain",
    price: "500,000 per annum",
    details: "1 Bedroom, 1 Bathroom",
    furnished: "Furnished",
  },
  {
    img: "./images/more1.png",
    title: "Room and parlor self contain",
    price: "500,000 per annum",
    details: "1 Bedroom, 1 Bathroom",
    furnished: "Furnished",
  },
  {
    img: "./images/moreimg.jpg",
    title: "Room and parlor self contain",
    price: "500,000 per annum",
    details: "1 Bedroom, 1 Bathroom",
    furnished: "Furnished",
  },
  // Add more listing objects as needed
];

const testimonials = [
  {
    img: "./images/kars.jpg",
    name: "Rose Dexter",
    review:
      "The team was incredibly helpful and responsive. They made the entire process smooth and stress-free. Highly recommended!",
  },
  {
    img: "./images/kars.jpg",
    name: "Charis Darling",
    review:
      "I couldn’t have asked for better support! Every question I had was answered promptly, and they went above and beyond to assist me.",
  },
  {
    img: "./images/kars.jpg",
    name: "David Noris",
    review:
      "Exceptional service! They truly care about their customers and ensure every detail is taken care of. Thank you for making it so easy!",
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
      <div className={homeStyles.body}>
      <header className={homeStyles.homeHeader}>
        <div className={homeStyles.logo}>
          <h2>Dwella</h2>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Sign Out</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className={homeStyles.searchPrompt}>
          <div className={homeStyles.inputFluent}>
            <div className={homeStyles.searchIcon}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className={homeStyles.searchBar}
                placeholder="Search by Location"
              />
            </div>
          </div>

          <div className={homeStyles.filterBy}>
            <div className={homeStyles.locationContainer}>
              <select name="location" className={homeStyles.location}>
                <option value="">Location</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
                {/* Add more options as needed */}
              </select>
            </div>
            {/* Repeat similar structure for other filters */}
          </div>
        </div>

        <div className={homeStyles.secOne}>
          <h3>Categories</h3>
          <div className={homeStyles.category}>
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={`${homeStyles.categoryPic} category-pic${
                    index + 1
                  }`}
                >
                  <img src={category.img} alt={`Image of ${category.name}`} />
                  <p>{category.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={homeStyles.recList}>
          <div className={homeStyles.moreListings}>
            <h3>Recommended listings</h3>
            <a href="#">See all</a>
          </div>

          <div className={homeStyles.moreImages}>
            {listings.map((listing, index) => {
              return (
                <div key={index} className={homeStyles.more1}>
                  <img src={listing.img} alt="more houses" />
                  <div className={homeStyles.houseDescription}>
                    <h3>{listing.title}</h3>
                    <p>{listing.price}</p>
                    <p>{listing.details}</p>
                    <div className={homeStyles.isFurnished}>
                      <p>{listing.furnished}</p>
                      <p className={homeStyles.timestamp}>
                        Timestamp Placeholder
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={homeStyles.pitch}>{/* Content for pitch */}</div>

        <div className={homeStyles.testimonials}>
          <h3>What Our Clients Are Saying</h3>
          <div className={homeStyles.custReview}>
            {testimonials.map((testimonial, index) => {
              return (
                <div key={index} className={homeStyles.customer}>
                  <img
                    src={testimonial.img}
                    alt={`Photo of ${testimonial.name}`}
                  />
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.review}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <div className={homeStyles.footer}>
        <div className={homeStyles.socialsSpace}>
          <p>Follow us on:</p>
          {/* Social icons */}
        </div>
        <div className={homeStyles.more}>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <div className={homeStyles.mgt}>
          <p>Copyright &copy; 2024 Dwella</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
