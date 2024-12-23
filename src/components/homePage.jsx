import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import homeStyles from "../styles/homePage.module.css";

const categories = [
  { img: "./images/moreimg.jpg", name: "Duplex" },
  { img: "./images/kars.jpg", name: "Flat" },
  { img: "./images/rec.png", name: "Self-Con" },
  { img: "./images/kars.jpg", name: "Flat" },
  {
    img: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Self-Con",
  },
  {
    img: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Flat",
  },
  {
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Duplex",
  },
  {
    img: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Self-Con",
  },
  {
    img: "https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Duplex",
  },
  {
    img: "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Flat",
  },
  {
    img: "https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Self-Con",
  },
];

const listings = [
  {
    // img: "./images/rec.png",
    img: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Room and parlor self contain",
    price: "500,000 per annum",
    details: "1 Bedroom, 1 Bathroom",
    furnished: "Furnished",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.739 6.15368C19.739 3.40281 17.8583 2.30005 15.1506 2.30005H8.79167C6.16711 2.30005 4.2002 3.32762 4.2002 5.97022V20.694C4.2002 21.4198 4.98115 21.877 5.61373 21.5221L11.9957 17.9422L18.3225 21.5161C18.9561 21.873 19.739 21.4158 19.739 20.689V6.15368Z"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.27148 9.02811H15.5898"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    // img: "./images/more1.png",
    img: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Room and parlor self contain",
    price: "500,000 per annum",
    details: "1 Bedroom, 1 Bathroom",
    furnished: "Furnished",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.739 6.15368C19.739 3.40281 17.8583 2.30005 15.1506 2.30005H8.79167C6.16711 2.30005 4.2002 3.32762 4.2002 5.97022V20.694C4.2002 21.4198 4.98115 21.877 5.61373 21.5221L11.9957 17.9422L18.3225 21.5161C18.9561 21.873 19.739 21.4158 19.739 20.689V6.15368Z"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.27148 9.02811H15.5898"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    // img: "./images/moreimg.jpg",
    img: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Room and parlor self contain",
    price: "500,000 per annum",
    details: "1 Bedroom, 1 Bathroom",
    furnished: "Furnished",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.739 6.15368C19.739 3.40281 17.8583 2.30005 15.1506 2.30005H8.79167C6.16711 2.30005 4.2002 3.32762 4.2002 5.97022V20.694C4.2002 21.4198 4.98115 21.877 5.61373 21.5221L11.9957 17.9422L18.3225 21.5161C18.9561 21.873 19.739 21.4158 19.739 20.689V6.15368Z"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.27148 9.02811H15.5898"
          stroke="#130F26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
  const [visibleCount, setVisibleCount] = useState(3);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSignOut = () => {
    // Perform any sign-out logic here, if needed
    navigate("/"); // Redirect to LandingPage
  };

  // const loadMore = () => {
  //   setVisibleCount((prevCount) => prevCount + 3); // Show 3 more items
  // };

  //   const handleLoadMore = () => {
  //     // Incrementally load 3 more items
  //     if (visibleCount + 3 >= listings.length) {
  //       setVisibleCount(listings.length); // Show all listings
  //       setShowLoadMore(false); // Change to "Show Less" if no more items to load
  //     } else {
  //       setVisibleCount(visibleCount + 3);
  //     }
  //   };

  //   const showLess = () => {
  //     setVisibleCount(3); // Reset to initial 3 items
  //     setShowLoadMore(false); // Hide "Load More" and show "See All"
  //   };

  // const handleLoadMore = () => {
  //   setVisibleCount((prev) => prev + 3); // Load 3 more listings
  // };

  // const showLess = () => {
  //   setVisibleCount(3); // Reset to initial count
  // };

  const handleLazyLoadRedirect = () => {
    setLoading(true); // Start showing spinner

    // Simulate a loading delay (e.g., 2 seconds) before navigating
    setTimeout(() => {
      setLoading(false); // Stop spinner
      navigate("/homeList"); // Navigate to the /homeList page
    }, 2000); // Simulate 2-second loading delay
  };

  return (
    <div className={homeStyles.body}>
      <header className={homeStyles.homeHeader}>
        <div className={homeStyles.logo}>
          <img src="./logo.png" alt="" />
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
              <a
                href="#"
                className={homeStyles.signOut}
                onClick={handleSignOut}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#"
          className={`${homeStyles.signOut} ${homeStyles.sign}`}
          onClick={handleSignOut}
        >
          Sign Out
        </a>
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
              <svg
                width="17"
                height="17"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.76663"
                  cy="9.76688"
                  r="8.98856"
                  stroke="#798280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0183 16.4854L19.5423 20.0002"
                  stroke="#798280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 27 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="26"
                height="28"
                rx="11.5"
                stroke="#798280"
              />
              <path
                d="M7.25 10.5C7.25 10.3011 7.32902 10.1103 7.46967 9.96967C7.61032 9.82902 7.80109 9.75 8 9.75H19C19.1989 9.75 19.3897 9.82902 19.5303 9.96967C19.671 10.1103 19.75 10.3011 19.75 10.5C19.75 10.6989 19.671 10.8897 19.5303 11.0303C19.3897 11.171 19.1989 11.25 19 11.25H8C7.80109 11.25 7.61032 11.171 7.46967 11.0303C7.32902 10.8897 7.25 10.6989 7.25 10.5ZM9.25 14.5C9.25 14.3011 9.32902 14.1103 9.46967 13.9697C9.61032 13.829 9.80109 13.75 10 13.75H17C17.1989 13.75 17.3897 13.829 17.5303 13.9697C17.671 14.1103 17.75 14.3011 17.75 14.5C17.75 14.6989 17.671 14.8897 17.5303 15.0303C17.3897 15.171 17.1989 15.25 17 15.25H10C9.80109 15.25 9.61032 15.171 9.46967 15.0303C9.32902 14.8897 9.25 14.6989 9.25 14.5ZM11.25 18.5C11.25 18.3011 11.329 18.1103 11.4697 17.9697C11.6103 17.829 11.8011 17.75 12 17.75H15C15.1989 17.75 15.3897 17.829 15.5303 17.9697C15.671 18.1103 15.75 18.3011 15.75 18.5C15.75 18.6989 15.671 18.8897 15.5303 19.0303C15.3897 19.171 15.1989 19.25 15 19.25H12C11.8011 19.25 11.6103 19.171 11.4697 19.0303C11.329 18.8897 11.25 18.6989 11.25 18.5Z"
                fill="#798280"
              />
            </svg>
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
            <div className="bedroomContainer">
              <select name="bedroom" className="bedroom">
                <option value="">Bedroom</option>

                <option value="">Any</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
              </select>
            </div>

            <div className="priceContainer">
              <select name="price" className="price">
                <option value="">Price</option>

                <option value="">100,000</option>
                <option value="">200,000</option>
                <option value="">300,000</option>
                <option value="">400,000</option>
                <option value="">500,000</option>
                <option value="">600,000</option>
                <option value="">700,000</option>
                <option value="">800,000</option>
                <option value="">900,000</option>
                <option value="">1,000,000</option>
                <option value="">2,000,000</option>
              </select>
            </div>

            <div className="condition-container">
              <select name="condition" className="condition">
                <option value="">Condition</option>

                <option value="">Any</option>
                <option value="">Furnished</option>
                <option value="">Unfurnished</option>
              </select>
            </div>

            <div className="more-filter-container">
              <select name="more-filter" className={homeStyles.moreFilter}>
                <option value="">More</option>
                <option value="">Property Type</option>
                <option value="">Property size</option>
                <option value="">Facilities</option>
              </select>
            </div>
          </div>
        </div>

        <div className={homeStyles.secOne}>
          <h3>Categories</h3>
          <div className={homeStyles.marquee}>
            <div className={homeStyles.category}>
              {categories.map((category, index) => (
                <div key={index} className={homeStyles.categoryPic}>
                  <img src={category.img} alt={category.name} />
                  <p>{category.name}</p>
                </div>
              ))}
              {/* Duplicate the content for seamless scrolling */}
              {categories.map((category, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={homeStyles.categoryPic}
                >
                  <img src={category.img} alt={category.name} />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={homeStyles.recList}>
          <div className={homeStyles.moreListings}>
            <h3>Recommended listings</h3>
            {loading ? (
              <div className="spin-container">
                <div className="spin"></div>
              </div>
            ) : (
              <button
                onClick={handleLazyLoadRedirect}
                className={homeStyles.seeAll}
              >
                See All
              </button>
            )}
          </div>

          <div className={homeStyles.moreImages}>
            {listings.slice(0, visibleCount).map((listing, index) => (
              <div key={index} className={homeStyles.more1}>
                <img src={listing.img} alt="more houses" />
                <div className={homeStyles.houseDescription}>
                  <div className={homeStyles.name}>
                    <h3>{listing.title}</h3>
                    <div>{listing.icon}</div>
                  </div>
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
            ))}
          </div>
        </div>
        {/* </div> */}

        <div className={homeStyles.pitch}>
          <div>
            <h3>Discover Affordable Apartments for Rent on Dwella</h3>
            <p>
              Find your dream home with our wide selection of affordable
              apartments for rent on Dwella. Whether you’re looking for cozy
              studio apartments, spacious family homes, or modern luxury flats,
              we offer options to suit every budget and lifestyle. Our platform
              features verified listings from trusted landlords, ensuring a safe
              and seamless rental experience. Browse apartments with amenities
              like swimming pools, gyms, and parking spaces, all at competitive
              prices. Start your search today and discover the perfect place to
              call home.
            </p>
          </div>

          <div>
            <h3>Explore Apartments in Prime Locations</h3>
            <p>
              Looking for an apartment in a convenient location? [Your Website
              Name] has you covered. From bustling city centers to quiet
              suburban neighborhoods, we offer apartments in prime areas that
              cater to your lifestyle. Whether you need a home close to work,
              schools, or vibrant social spots, our platform lets you search by
              location, price, and amenities. Explore detailed property
              information and neighborhood guides to make informed decisions.
              Begin your journey to the perfect location today.
            </p>
          </div>

          <div>
            <h3>Find Apartments with Advanced Features and Amenities</h3>
            <p>
              At Dwella, we understand the importance of finding a home with the
              right features. Our listings include apartments with advanced
              amenities like smart home technology, spacious balconies, modern
              kitchens, and energy-efficient designs. Use our filters to refine
              your search by price, number of bedrooms, and facilities like
              gyms, pools, or pet-friendly options. Start exploring now and
              discover apartments that enhance your lifestyle.
            </p>
          </div>
        </div>

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
