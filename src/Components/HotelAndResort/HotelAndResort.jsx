import "./hotel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const HotelAndResort = () => {
  const [, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width:320px)": {
        slides: { perView: 1, spacing: "20" },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {},
  });
  return (
    <section className="dark:bg-mediumBlack py-20 2xl:py-[120px]">
      <div
        className="Container  sm:overflow-hidden lg:overflow-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="md:flex items-center justify-between">
          <div
            className="flex-1 keen-slider w-screen  md:w-[60%] 2xl:w-[580px] md:pr-5 lg:pr-6 xl:pr-8 2xl:pr-9 3xl:pr-10  md:mt-0"
            ref={sliderRef}
          >
            {/* slider 1 */}
            <div className="keen-slider__slide number-slide1 mt-44 md:mt-6">
              <div className="">
                <img
                  src="/images/home-1/Lewi-Resort-Hawassa-Resort-View-1.jpg"
                  className="h-[85%] lg:h-[90%]"
                  alt="Hotel-slider-image"
                />
              </div>
            </div>
            <div className="keen-slider__slide number-slide1 mt-44 md:mt-16">
              <div className="">
                <img
                  src="/images/home-1/Lewi-Resort-Wolaita-Sodo-Exterior-2.jpg"
                  className="h-[85%] md:h-[100%] lg:h-[90%]"
                  alt="Hotel-slider-image"
                />
              </div>
            </div>
          </div>

          {/* text */}
          <div className="flex-1 font-Garamond  mt-5 md:mt-0 md:pl-8 p-5  lg:pl-10 2xl:pl-14">
            <h5 className="text-base text-khaki leading-[26px] font-medium uppercase">
              Lewi Hotels & Resorts
            </h5>
            {/* <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
              LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
            </h1> */}
            <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              Lewi Hotels and Resorts is a national chain of hotels and resorts, currently owning and running a chain of hotels in Ethiopia. Our guiding principle is simple: to create places "where happiness happens".
We are committed to blending the untouched beauty of Ethiopia with authentic cultural hospitality. In Sodo, our resort is nestled on over 54,000 square meters of lush greenery, offering an immersive experience enriched by traditional Southern design and cuisine. In Arbaminch, we offer a rare blend of royal legacy and modern comfort, set within the historic palace grounds of Emperor Haile Selassie overlooking the majestic twin lakes. Our latest addition, Lewi Resort Keffa Bonga, is nestled in the lush highlands of Bonga, a region renowned as the birthplace of wild Arabica coffee and home to the UNESCO-recognized Kafa Biosphere Reserve.
At every Lewi property, we craft every detail to provide genuine comfort and a memorable stay.

            </p>
            <div className="flex items-center mt-4 md:mt-3 lg:mt-4">
              <div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                  250 +
                </h1>
                <p className="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[94px] lg:w-full">
                  Luxury Rooms
                </p>
              </div>
              <div className="ml-10 xl:ml-[60px] 2xl:ml-20 3xl:ml-[100px]">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                  4.9
                </h1>
                <p className="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[134px] lg:w-full">
                  Customer Ratings
                </p>
              </div>
            </div>
            <div className="py-5 lg:py-7 xl:py-[30px]">
              <div className="relative overflow-x-hidden ">
                <hr className="w-full h-[2px] bg-[#ddd] text-[#ddd]" />
                <span className="w-[60px] h-[2px] bg-khaki rounded-full absolute -top-[0px] animation-move1"></span>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="btn-primary ">More About</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelAndResort;
