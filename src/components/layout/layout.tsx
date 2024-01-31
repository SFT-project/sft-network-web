import {
  ConfigProvider,
} from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/Footer';



export default function Layout() {



  return (
    <ConfigProvider
    >
      <Header />
      <Outlet />
      <Footer />
    </ConfigProvider>
  );
}
