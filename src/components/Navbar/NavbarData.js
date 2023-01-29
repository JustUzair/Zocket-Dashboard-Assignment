import React from "react";

import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi2";
import * as BsIcons from "react-icons/bs";
export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text home",
  },
  {
    title: "Campaign",
    path: "/campaign",
    icon: <HiIcons.HiSpeakerWave />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <BiIcons.BiBasket />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <BsIcons.BsPeople />,
    cName: "nav-text",
  },
];
