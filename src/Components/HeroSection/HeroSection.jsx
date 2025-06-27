// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=''>
      <Swiper
        centeredSlides={true}
        navigation={true}
        speed='3000'
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className='mySwiper'
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/Lewishorttrailer.mp4')] w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[#1e1e1ede] bg-opacity-90 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-16 xl:pb-0 "
            data-aos="fade-down"
          >
            <div className='font-Garamond 2xl:w-[720px] text-center'>
              <div className='flex space-x-2 items-center justify-center mb-5 lg:mb-6'>
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]' />{" "}
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]' />{" "}
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]' />{" "}
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-[#1cc3b2]' />
              </div>
              <h4 className='text-4xl font-bold mb-4 max-w-xl'> Lewi Hotels & Resorts: Experience Authentic Ethiopian Hospitality
</h4>
              <div className='mb-7 md:mb-8 lg:mb-9 xl:mb-10'>
                <h1 className='text-2xl sm:text-xl  3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]'>
                It is a place where happiness happens
                </h1>
               
              </div>
              <Link to={"/about"}>
                <button
                  className='w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase'
                >
                 Now Book 
                </button>
              </Link>
            </div>
            {/* contact info */}
            <div className='w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90'>
              <BiPhoneCall className='w-5 h-5 mr-2 text-khaki' /> +251 930 10 83
              59
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}

        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/Lewi-Resort-Wolaita-Sodo-Exterior-2.jpg')] w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0"
            data-aos='fade-down'
          >
            <div className='font-Garamond 2xl:w-[720px] text-center'>
              <div className='flex space-x-2 items-center justify-center mb-5 lg:mb-6'>
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
              </div>
              <h4 className='text-4xl font-bold mb-4 max-w-xl'> Lewi Hotels & Resorts: Experience Authentic Ethiopian Hospitality
</h4>
              <div className='mb-7 md:mb-8 lg:mb-9 xl:mb-10'>
                <h1 className='text-2xl sm:text-xl  3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]'>
                It is a place where happiness happens
                </h1>
               
              </div>
              <Link to={"/about"}>
                <button
                  className='w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase'
                >
                 Now Book 
                </button>
              </Link>
            </div>
            <div className='w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90'>
              <BiPhoneCall className='w-5 h-5 mr-2 text-khaki' /> +980 123 4567
              890
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div
            className="bg-[url('/images/home-1/slider-img-301.jpg')] w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px]  bg-[rgba(30,30,30,0.4)] bg-opacity-40 grid items-center bg-cover justify-center text-white relative pb-[150px] lg:pb-20 xl:pb-0"
            data-aos='fade-down'
          >
            <div className='font-Garamond 2xl:w-[720px] text-center'>
              <div className='flex space-x-2 items-center justify-center mb-5 lg:mb-6'>
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
                <FaStar className='w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki' />
              </div>
              <h4 className='text-4xl font-bold mb-4 max-w-xl'> Lewi Hotels & Resorts: Experience Authentic Ethiopian Hospitality
</h4>
              <div className='mb-7 md:mb-8 lg:mb-9 xl:mb-10'>
                <h1 className='text-2xl sm:text-xl  3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]'>
                It is a place where happiness happens
                </h1>
               
              </div>
              <Link to={"/about"}>
                <button
                  className='w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase'
                >
                 Now Book 
                </button>
              </Link>
            </div>
            <div className='w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90'>
              <BiPhoneCall className='w-5 h-5 mr-2 text-khaki' /> +251 930 10 83
              59
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
