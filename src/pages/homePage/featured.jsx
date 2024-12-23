import { useState } from "react";
import { useNavigate } from "react-router-dom";
import featuredImage1 from "../../assets/featured_1.png";
import featuredImage2 from "../../assets/featured_2.png";
import featuredImage3 from "../../assets/featured_3.png";
import featuredImage4 from "../../assets/featured_4.png";
import featuredImage5 from "../../assets/featured_5.png";
import featuredImage6 from "../../assets/featured_6.png";

import Header from "./header";

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

  const prevProperty = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredProperties.length) % featuredProperties.length
    );
  };

  // const handleTitleClick = (property) => {
  //   console.log(property); // Debug to ensure `property` is correct
  //   if (property && property.id) {
  //     navigate(`/about/${property.id}`);
  //   } else {
  //     console.error("Property or property.id is undefined");
  //   }
  // };

  const handleTitleClick = (property) => {
    if (property?.id) {
      navigate(`/about/${property.id}`);
    }
  };
  return (
    <section className="Featured">
      <div className="Listing">
        <h2>Recommended Listings</h2>
        <button>See all</button>
      </div>
      <div className="Properties">
        {featuredProperties.map((property, id) => {
          // Calculate transform to position the current and next wrappers
          const translateX = `${-100 * currentIndex}%`;

          return (
            <div
              className="Wrapper"
              key={id}
              style={{ transform: `translateX(${translateX})` }}
            >
              <img src={property.image} alt={property.title} />
              <div className="House-images">
                <h3 className="title">{property.title}</h3>
                <p className="Title location">{property.location}</p>

                <p>{property.price}</p>
                <p>{property.beds}</p>

                <div className="House-text">
                  <p>{property.description}</p>
                  <p>{property.date}</p>
                </div>

                <button onClick={() => handleTitleClick(property)}>
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button className="button-prev" onClick={prevProperty}>
          Previous
        </button>
        <button className="button-next" onClick={nextProperty}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Featured;
