import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/layout/layout';
import RouteElement from './components/route-element';
import './App.css'



export default function App() {



  const router = createHashRouter([{
    path: '/',
    element: <Layout />,
    children: [{
      path: '',
      element: <RouteElement ignoreAuth load={() => import('./page/index/index')} />,
    } ],
  }]);

  return <RouterProvider router={router} />;
}
