import HeroSection from "../../Components/HeroSection/HeroSection";
import HotelAndResort from "../../Components/HotelAndResort/HotelAndResort";
import Offers from "../../Components/Offers/Offers";
import Rooms from "../../Components/Rooms/Rooms";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Rooms />
      <HotelAndResort />
      <HotelAndFacilities /> 
      {/* <Action /> */}
      {/* <Facilities /> */}
      <Offers />
      <Testimonial />
      {/* <LatestBlog /> */}
    </>
  );
};

export default Home;
