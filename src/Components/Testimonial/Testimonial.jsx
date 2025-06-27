import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <section className=" bg-[#1e1e1ed5] dark:bg-[#1e1e1e99]  grid items-center justify-center ">
      <div className="Container py-20 lg:py-[120px]">
        {/* section title */}
        <div
          className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px]  2xl:px-[335px] mx-auto px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Section logo */}
          <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
            <hr className="w-[100px] h-[1px]  text-[#473f39] " />
            <img src="/images/home-1/logo2.png" alt="room_section_logo" />
            <hr className="w-[100px] h-[1px]  text-[#473f39] " />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-white mt-[20px] mb-[16px] font-Garamond font-semibold uppercase">
            What our Guests say
          </h1>
          <p className="font-Lora leading-7 lg:leading-[26px] text-white font-normal text-sm sm:text-base">
            Customer’s Testimonial
          </p>
        </div>

        {/* very small screen Show and 567px hidden */}
        <div
          className="mt-14 sm:hidden px-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Small device show one testimonials section */}
          <div className="py-[10px] pt-4 sm:hidden">
            <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 sm:hidden">
              {/* quote icon */}
              <img
                src="/images/home-1/testi-quote.png"
                alt=""
                className="absolute  right-3 xl:right-10 -top-8"
              />

              {/* rating icon */}
              <ul className="flex items-center text-khaki space-x-[4px]">
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
                <li>
                  <FaStar size={"16px"} />
                </li>
              </ul>
              <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                “We loved this place. After 10 days of dust and simple lodges we
                really enjoyed staying in the big and nice room on the water
                front (monkeys and waterbirds came very close). The staff is
                extremely friendly and helpful, the food of high standard. We
                will visit beautiful Ethiopia again and will return to Lewi
                Hotel.”
              </p>
              <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

              <div className="flex items-center space-x-6 ">
                <img
                  src="/images/home-1/testi-author.png"
                  className="w-[65px] h-[65px]"
                  alt=""
                />

                <div className="">
                  <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                    Dawit
                  </h4>
                  {/* <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                    <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                    Manger
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial */}
        <div
          className="mt-14 2xl:mt-[60px] relative keen-slider  hidden sm:block"
          ref={sliderRef}
        >
          {/* slider one */}
          <div className="keen-slider__slide number-slide1 hidden sm:block">
            <div
              className="py-[10px] pt-10 hidden sm:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 hidden sm:block">
                {/* quote icon */}
                <img
                  src="/images/home-1/testi-quote.png"
                  alt=""
                  className="absolute  right-3 xl:right-10 -top-8"
                />

                {/* rating icon */}
                <ul className="flex items-center text-khaki space-x-[4px]">
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                </ul>
                <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                  “We loved this place. After 10 days of dust and simple lodges
                  we really enjoyed staying in the big and nice room on the
                  water front (monkeys and waterbirds came very close). The
                  staff is extremely friendly and helpful, the food of high
                  standard. We will visit beautiful Ethiopia again and will
                  return to Lewi Hotel.”
                </p>
                <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                <div className="flex items-center space-x-6 ">
                  {/* <img
                    src="/images/home-1/testi-author-2.png"
                    className="w-[65px] h-[65px]"
                    alt=""
                  /> */}

                  <div className="">
                    <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                      Selam
                    </h4>
                    {/* <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                      <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                      Manger
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider two */}
          <div className="keen-slider__slide number-slide1 hidden sm:block">
            <div
              className="py-[10px] pt-10 hidden sm:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 hidden sm:block">
                {/* quote icon */}
                <img
                  src="/images/home-1/testi-quote.png"
                  alt=""
                  className="absolute  right-3 xl:right-10 -top-8"
                />

                {/* rating icon */}
                <ul className="flex items-center text-khaki space-x-[4px]">
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                </ul>
                <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                  “Almost one year in Lewi resort, the first time in Hawassa I
                  stayed in another hotel, but when I saw Lewi resort I changed
                  immediately, people are very nice, all staff gave the
                  necessary support I request The room was beautiful and
                  well-equipped, room was large with a sitting area, many
                  choices are available.”
                </p>
                <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                <div className="flex items-center space-x-6 ">
                  {/* <img
                    src="/images/home-1/call-do-action-img.png"
                    className="w-[65px] h-[65px]"
                    alt=""
                  /> */}

                  <div className="">
                    <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                      Dawit
                    </h4>
                    {/* <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                      <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                      Manger
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider three */}
          <div className="keen-slider__slide number-slide1 hidden sm:block">
            <div
              className="py-[10px] pt-10 hidden sm:block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%]  before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 hidden sm:block">
                {/* quote icon */}
                <img
                  src="/images/home-1/testi-quote.png"
                  alt=""
                  className="absolute  right-3 xl:right-10 -top-8"
                />

                {/* rating icon */}
                <ul className="flex items-center text-khaki space-x-[4px]">
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                  <li>
                    <FaStar size={"16px"} />
                  </li>
                </ul>
                <p className="font-Lora text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] before:absolute before:h-[30px] before:left-0 before:bottom-[-36px] before:bg-khaki before:w-[1px] relative">
                  “We were on an overland trip from South Africa to Ethiopia and
                  were fortunate to find this resort. After a hectic one month
                  journey we greatly appreciated the facilities needed for
                  thorough R&R. A picturesque lakeside terrace with refreshment
                  service and extensive breakfast on offer, massage, super pool,
                  first class restaurant, efficient staff and more.”
                </p>
                <span className="w-[1px] h-[25px] bg-[#ddd]"></span>

                <div className="flex items-center space-x-6 ">
                  {/* <img
                    src="/images/home-1/testi-author.png"
                    className="w-[65px] h-[65px]"
                    alt=""
                  /> */}

                  <div className="">
                    <h4 className="text-base lg:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                      Henry d
                    </h4>
                    {/* <p className="pt-1 text-sm md:text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center">
                      <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                      Manger
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slide changer */}
        <div className="mx-auto  ">
          {loaded && instanceRef.current && (
            <div className="dots flex items-center justify-center">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
