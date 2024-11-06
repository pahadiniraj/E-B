import { Outlet } from "react-router-dom";
import React from "react";
import PreNav from "./Component/Navbar/PreNav";
import PostNav from "./Component/Navbar/PostNav";
import MainNav from "./Component/Navbar/MainNav";
import UpperFooter from "./Component/Footer/UpperFooter";
import LowerFooter from "./Component/Footer/LowerFooter";

function Layout() {
  return (
    <>
      <div className="font-primary">
        <PreNav></PreNav>
        <MainNav></MainNav>
        <PostNav></PostNav>
        <Outlet></Outlet>
        <UpperFooter></UpperFooter>
        <LowerFooter></LowerFooter>
      </div>
    </>
  );
}
export default Layout;
