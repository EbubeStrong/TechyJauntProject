import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import featuredImage1 from "../../assets/featured_1.png";
import featuredImage2 from "../../assets/featured_2.png";
import featuredImage3 from "../../assets/featured_3.png";
import featuredImage4 from "../../assets/featured_4.png";
import featuredImage5 from "../../assets/featured_5.png";
import featuredImage6 from "../../assets/featured_6.png";

const Featured = () => {
  const navigate = useNavigate();
  const featuredProperties = [
    {
      id: 1,
      image: featuredImage1,
      title: "Room and parlour self-contain",
      location: "Lekki, Lagos",
      price: "₦500,000 per annum",
      beds: "1 Bedroom, 1 Bathroom",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 2,
      image: featuredImage2,
      title: "Room and parlour self-contain",
      location: "New City Avenue Nekede Owerri",
      price: "₦500,000 per annum",
      beds: "1 Bedroom, 1 Bathroom",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 3,
      image: featuredImage3,
      title: "Room and parlour self-contain",
      location: "Lekki, Lagos",
      price: "₦500,000 per annum",
      beds: "1 Bedroom, 1 Bathroom",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 4,
      image: featuredImage4,
      title: "Room and parlour self-contain",
      location: "New City Avenue Nekede Owerri",
      price: "₦500,000 per annum",
      beds: "1 Bedroom, 1 Bathroom",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 5,
      image: featuredImage5,
      title: "Room and parlour self-contain",
      location: "Lekki, Lagos",
      price: "₦500,000 per annum",
      beds: "1 Bedroom, 1 Bathroom",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 6,
      image: featuredImage6,
      title: "Room and parlour self-contain",
      location: "New City Avenue Nekede Owerri",
      price: "₦500,000 per annum",
      beds: "1 Bedroom, 1 Bathroom",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length);
  };

  // Go to the previous property
  const prevProperty = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredProperties.length) % featuredProperties.length // Loop back to the last property
    );
  };

  // const handleTitleClick = (id) => {
  //   navigate(`/about?id=${id}`);
  // }

  //   const handleTitleClick = (featuredProperties) => {
  //   navigate(`/about/${featuredProperties.id}`);
  // };

  const handleTitleClick = (property) => {
    console.log(property); // Debug to ensure `property` is correct
    if (property && property.id) {
      navigate(`/about/${property.id}`);
    } else {
      console.error("Property or property.id is undefined");
    }
  };

  return (
    <>
      <section className="featured">
        <div className="listing">
          <h2>Recommended listings</h2>
          <button>See all</button>
        </div>

        <div className="properties">
          <div className="wrapper">
            {/* Display only the property based on the current index */}
            <img
              src={featuredProperties[currentIndex].image}
              alt={featuredProperties[currentIndex].title}
            />

            {/* <h3 onClick={() => handleTitleClick(property)}>{featuredProperties[currentIndex].title}</h3> */}
            <h3
            >
              {featuredProperties[currentIndex].title}
            </h3>

            <p>
              <span></span> {featuredProperties[currentIndex].location}
            </p>
            <p>{featuredProperties[currentIndex].price}</p>
            <p>{featuredProperties[currentIndex].beds}</p>
            <p>{featuredProperties[currentIndex].description}</p>
            <p>{featuredProperties[currentIndex].date}</p>
            <button 
              className="view"
              onClick={() => handleTitleClick(featuredProperties[currentIndex])}>View details</button>
          </div>

          {/* Left and Right Navigation Buttons */}
          <div className="button-prev" onClick={prevProperty}>
            <span>&#8592;</span> {/* Left arrow */}
          </div>
          <div className="button-next" onClick={nextProperty}>
            <span>&#8594;</span> {/* Right arrow */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
