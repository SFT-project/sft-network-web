import {
  ConfigProvider,
} from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/Footer';
import Bubble from './bubble.tsx'

export default function Layout() {
  return (
    <ConfigProvider
    >
      <Bubble />
      <Header />
      <Outlet />
      <Footer />
    </ConfigProvider>
  );
}
