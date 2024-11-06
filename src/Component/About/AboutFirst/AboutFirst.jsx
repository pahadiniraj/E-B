import React from "react";
import img from "../../../assets/About/Man.png";

const AboutFirst = () => {
  return (
    <div className="w-full">
      <div className="container  mx-auto px-32">
        <div className="flex py-12  gap-10">
          <div className="w-2/4 flex flex-col justify-center items-start">
            <h1 className=" text-4xl font-semibold">100% Trusted</h1>
            <h1 className=" text-4xl font-semibold">Organic Food Store</h1>
            <p className="text-xs mt-4">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="w-2/4">
            <img src={img} alt="Man Holding veggies" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;
