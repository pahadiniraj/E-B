import img1 from "../../../assets/Images/Slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddButton from "../../Button/AddButton";
import NavPop from "../../NavPop/NavPop";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function CarouselEle({ showNavPop }) {
  const banner = [
    {
      src: img1,
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragrah: "Free shipping in all your order, we deliver, you enjoy",
      btn: "Shop Now",
    },
    {
      src: img1,
      subHeading: "WELCOME TO SHOPERY",
      heading: "FRESH AND HEALTHY ORGANIC FOOD",
      paragrah: "Free shipping in all your order, we deliver, you enjoy",
      btn: "Shop Now",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const subRef = useRef();

  const handleBlur = (event) => {
    if (!subRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {showNavPop ? (
        <div className="w-full flex container mx-auto py-4 my-2 xl:px-28 lg:gap-10 md:gap-15 md:px-5 xs:gap-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={{
                  open: {
                    y: 0,
                    transition: {
                      when: "beforeChildren",
                    },
                  },
                  close: {
                    y: "-100%",
                    transition: {
                      when: "afterChildren",
                    },
                  },
                }}
                initial="close"
                animate={isOpen ? "open" : "close"}
                onAnimationComplete={() => {
                  if (!isOpen) {
                    showNav();
                  }
                }}
                className="w-[180px] xs:w-[166px] hidden xs:block md:w-[180px] "
                ref={subRef}
                tabIndex={-1}
                onBlur={handleBlur}
              >
                <NavPop />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="xxs:w-full xs:w-4/6   mt-5">
            <Slider {...settings}>
              {banner.map((val, idx) => (
                <div className="py-2 mb-2 w-full" key={idx}>
                  <div className="flex justify-center w-full items-center gap-4 md:gap-10">
                    <div className="w-3/6">
                      <img src={val.src} alt="img" />
                    </div>
                    <div className="w-3/6 flex flex-col justify-center leading-tight gap-2">
                      <p className="pl-1 xs:text-xxxs md:text-xs text-xxxs text-[#00B207] w-full">
                        {val.subHeading}
                      </p>
                      <h2 className="xs:text-base md:text-3xl xl:text-4xl text-base pl-1 font-semibold w-full">
                        {val.heading}
                      </h2>
                      <p className="pl-1 text-xxxs xs:text-xxxs md:text-xs mb-1 w-full">
                        {val.paragrah}
                      </p>
                      <AddButton
                        className={
                          "bg-[#00B207] rounded-3xl p-1 w-3/6 text-white flex justify-center gap-2 items-center hover:bg-[#0bc70b] text-xxxs md:text-sm xs:text-xxs"
                        }
                        text="Shop Now"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="xxs:w-full xs:w-full xl:px-28 lg:w-full py-4 container mx-auto">
          <Slider {...settings}>
            {banner.map((val, idx) => (
              <div className="py-2 mb-2 w-full" key={idx}>
                <div className="flex justify-center w-full items-center gap-3 md:gap-10">
                  <div className="w-3/6">
                    <img src={val.src} alt="img" />
                  </div>
                  <div className="w-3/6 flex flex-col justify-center leading-tight gap-2">
                    <p className="pl-1 xs:text-xxs md:text-xs text-xxxs text-[#00B207] w-full">
                      {val.subHeading}
                    </p>
                    <h2 className="xs:text-2xl md:text-4xl lg:text-5xl text-base pl-1 font-semibold w-full">
                      {val.heading}
                    </h2>
                    <p className="pl-1 text-xxxs xs:text-xs md:text-sm mb-1 w-full">
                      {val.paragrah}
                    </p>
                    <AddButton
                      className={
                        "bg-[#00B207] rounded-3xl p-1 w-3/6 text-white flex justify-center gap-2 items-center hover:bg-[#0bc70b] text-xxxs md:text-sm xs:text-xs xxxs:w-4/6"
                      }
                      text="Shop Now"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default CarouselEle;
