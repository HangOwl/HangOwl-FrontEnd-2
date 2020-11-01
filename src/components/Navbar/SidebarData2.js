import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from "react-icons/bi";
export const SidebarData2 = [
  // {
  //   title: 'Home',
  //   path: '/',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },

  {
    title: 'Profile',
    path: `/profile/${window.cusID}`,
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'check status',
    path: '/checkstatus',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'logout',
    path: '/',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  }
];