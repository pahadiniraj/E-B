import AboutFirst from "./AboutFirst/AboutFirst";
import AboutSecond from "./AboutSecond/AboutSecond";
import AboutThird from "./AboutThird/AboutThird";
import AboutFourth from "./AboutFourth/AboutFourth";
import Testimonial from "../Home/Testimonial/Testimonial";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <Outlet />
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
      <Testimonial />
    </>
  );
}
export default About;
