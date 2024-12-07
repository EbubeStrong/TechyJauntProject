import { useNavigate, useParams } from "react-router-dom";
import "./aboutHome.css";
import featuredImage1 from "../../assets/featured_1.png";
import featuredImage2 from "../../assets/featured_2.png";
import featuredImage3 from "../../assets/featured_3.png";
import featuredImage4 from "../../assets/featured_4.png";
import featuredImage5 from "../../assets/featured_5.png";
import featuredImage6 from "../../assets/featured_6.png";
import landLord1 from "../../assets/landlord.png";

const AboutHome = () => {
  const { id } = useParams();
   // Extract the dynamic :id from the URL

   const navigate = useNavigate()

  //    const property = featuredProperties.find((prop) => prop.id === parseInt(id));

  // Get the property ID from the URL
  const featuredProperties = [
    {
      id: 1,
      image: featuredImage1,
      title: "Room and parlour self-contain",
      location: "Lekki, Lagos",
      price: "₦500,000 per annum",
      bed: "4 Bedroom",
      bathroom: "4 Bathroom",
      restroom: "4 Toilets",
      landLordImage: landLord1,
      landLordName: "Mike Skiles",
      landLordTItle: "LandLord",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 2,
      image: featuredImage2,
      title: "Room and parlour self-contain",
      location: "New City Avenue, Owerri",
      price: "₦500,000 per annum",
      bed: "4 Bedroom",
      bathroom: "4 Bathroom",
      restroom: "4 Toilets",
      landLordImage: landLord1,
      landLordName: "Mike Skiles",
      landLordTItle: "LandLord",
      description: "Furnished",
      date: "Added 26 Nov 2024",
    },
    {
      id: 3,
      image: featuredImage3,
      title: "Room and parlour self-contain",
      location: "Lekki, Lagos",
      price: "₦500,000 per annum",
      bed: "4 Bedroom",
      bathroom: "4 Bathroom",
      restroom: "4 Toilets",
      landLordImage: landLord1,
      landLordName: "Mike Skiles",
      landLordTItle: "LandLord",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 4,
      image: featuredImage4,
      title: "Room and parlour self-contain",
      location: "New City Avenue, Owerri",
      price: "₦500,000 per annum",
      bed: "4 Bedroom",
      bathroom: "4 Bathroom",
      restroom: "4 Toilets",
      landLordImage: landLord1,
      landLordName: "Mike Skiles",
      landLordTItle: "LandLord",
      description: "Furnished",
      date: "Added 26 Nov 2024",
    },
    {
      id: 5,
      image: featuredImage5,
      title: "Room and parlour self-contain",
      location: "Lekki, Lagos",
      price: "₦500,000 per annum",
      bed: "4 Bedroom",
      bathroom: "4 Bathroom",
      restroom: "4 Toilets",
      landLordImage: landLord1,
      landLordName: "Mike Skiles",
      landLordTItle: "LandLord",
      description: "Furnished",
      date: "Added 25 Nov 2024",
    },
    {
      id: 6,
      image: featuredImage6,
      title: "Room and parlour self-contain",
      location: "New City Avenue, Owerri",
      price: "₦500,000 per annum",
      bed: "4 Bedroom",
      bathroom: "4 Bathroom",
      restroom: "4 Toilets",
      landLordImage: landLord1,
      landLordName: "Mike Skiles",
      landLordTItle: "LandLord",
      description: "Furnished",
      date: "Added 26 Nov 2024",
    },
  ];

  const property = featuredProperties.find((prop) => prop.id === parseInt(id));
  if (!property) {
    return <p>Property not found</p>; // Handle invalid or missing ID
  }

  return (
    <div className="about__home">
      <div className="home__content">
        <img
          src={property?.image}
          alt={property?.title}
          className="home__image"
        />
        <div className="content">
          <h1>{property?.title}</h1>
          <p>{property?.location}</p>

          <div className="landlord-content">
            <div className="landlord-image">
              <img src={property?.landLordImage} alt="Landlord" />
            </div>
            <div className="landlord-details">
              <p>{property?.landLordName}</p>
              <h3>Landlord</h3>
              {/* <p>{property?.landLordPhone}</p> */}
              {/* <p>{property?.landLordEmail}</p> */}
            </div>
          </div>

          <p>{property?.description}</p>
          <p>{property?.price}</p>
          <p>{property?.bed}</p>
          <p>{property?.date}</p>
          <button className="view" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
