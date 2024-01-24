import React from 'react';
import {
  ConfigProvider,
} from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';



export default function Layout() {
 
 

  return (
    <ConfigProvider
    >
      <Header />
    <Outlet />
    </ConfigProvider>
  );
}
