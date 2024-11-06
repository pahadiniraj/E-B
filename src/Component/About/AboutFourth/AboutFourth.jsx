import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/Team/Man1.png";
import img2 from "../../../assets/Team/Man2.png";
import img3 from "../../../assets/Team/Man3.png";
import img4 from "../../../assets/Team/Man4.png";
import "./about.css";

const AboutFourth = () => {
  const detail = [
    {
      src: img1,
      name: "Jenny Wilson",
      title: "Ceo & Founder",
    },
    {
      src: img2,
      name: "Jenny Wilson",
      title: "Ceo & Founder",
    },
    {
      src: img3,
      name: "Jenny Wilson",
      title: "Ceo & Founder",
    },
    {
      src: img4,
      name: "Jenny Wilson",
      title: "Ceo & Founder",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full py-20  ">
      <div className="container mx-auto px-32">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-semibold ">Our Awesome Team</h2>

          <p className="text-sm">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>

        <div className="">
          <Slider {...settings} className="">
            {detail.map((value, index) => (
              <div className="" key={index}>
                <div className=" border shadow-md rounded-lg m-2">
                  <img
                    src={value.src}
                    className=" h-[280px] w-[312px] object-cover "
                  />
                  <div className="bg-white w-full flex flex-col justify-start items-start px-4 rounded-sm">
                    <p className="text-sm font-medium">{value.name}</p>
                    <p className="text-xs ">{value.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutFourth;
