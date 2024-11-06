import { createBrowserRouter } from "react-router-dom";

import Layout from "../../Layout";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Pages from "../Pages/Pages";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Order from "../Order/Order";
import Cart from "../Cart/Cart";
import Wishlist from "../WishList/WishList";
import Setting from "../Setting/Setting";
import Faqs from "../Faqs/Faqs";
import TermsAndCondition from "../TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Product from "../Product/Product";
import ProductDetail from "../ProductDetail/ProductDetail";
import TrackOrder from "../TrackOrder/TrackOrder";
import All from "../All/All";
import Vegetable from "../VegFrtMeat/Vegetable";
import Fruit from "../VegFrtMeat/Fruit";
import MeatAndFish from "../VegFrtMeat/MeatAndFish";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import BreadCrums from "../Shop/BreadCrums/BreadCrums";
import Profile from "../Profile/Profile";
import CheckOut from "../CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "termsandcondition",
        element: <TermsAndCondition />,
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "productdetail",
        element: <ProductDetail />,
      },
      {
        path: "trackorder",
        element: <TrackOrder />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
]);
export { router };
