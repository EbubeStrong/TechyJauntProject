import React from "react";
import Search from "./search";
import "../../styles/global.css";
import "./home.css";
import Image1 from "../../assets/duplex.png";
import Image2 from "../../assets/flat.png";
import Image3 from "../../assets/self-con.png";

import Featured from "./featured"
import Header from "./header"
import Footer from "./footer"

// import featuredImage1 from "../../assets/featured_1.png";
// import featuredImage2 from "../../assets/featured_2.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Core Swiper styles
// import "swiper/css/navigation"; // Navigation styles
// import "swiper/css/pagination"; // Pagination styles

// // Import Navigation and Pagination from 'swiper'
// import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  const categories = [
    {
      id: 1,
      image: Image1,
      title: "Duplex",
    },
    {
      id: 2,
      image: Image2,
      title: "Flat",
    },
    {
      id: 3,
      image: Image3,
      title: "Self-contain",
    },
    // {
    //   id: 4,
    //   image: Image2,
    //   title: "Flat",
    // },
    // {
    //   id: 5,
    //   image: Image1,
    //   title: "Duplex",
    // },
    // {
    //   id: 6,
    //   image: Image3,
    //   title: "Self-contain",
    // },
  ];

 
  return (
    <>
          <section>
      <Header />
    </section>
    <div className="Home">
      <h1>
        Where Comfort Meets <br />
        Convenience
      </h1>
      <Search />

      <section className="Categories__container">
        <div className="Categories">
          {/* <Swiper
            className="swiper__container"
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6400,
              disableOnInteraction: false,
            }}
            loop={true} // Infinite loop
            breakpoints={{
              700: {
                slidesPerView: 3,
              },
            }}
          > */}
            {categories.map((category) => (
              <div className="Testimonial" key={category.id}>
                <div className="Category">
                  <img src={category.image} alt={category.title} />
                  <h3 className="Title">{category.title}</h3>
                </div>
              </div>
            ))}
          {/* </Swiper> */}
        </div>
      </section>

      <Featured />
    
        <section>
          <Footer />
        </section>
    </div>

    </>
  );
};

export default Home;