import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
// import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import Order from './components/Order';
import RestMenu from './components/RestMenu';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Order from './components/Order';
import Cart from './components/Cart';
import { CorsOptions } from 'cors';
// import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



const About = lazy(()=> import('./components/About'));
const Body = lazy(() => import('./components/Body'));


const AppLayout = ()=> {
  return (
       //  redux provider store
    <Provider store={appStore} > 
      <div className='app'>
          <Header />
          <Outlet />
          <Footer />
      </div>
    </Provider>  
  )   
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element: <Suspense fallback = {<h1>body lazy</h1>}><Body /></Suspense>
      },
      {
        path:'/about',
        element:<Suspense fallback = {<h1>This is lazy loading</h1>}> 
          <About /> 
          </Suspense>
      },
      {
        path:'/contact',
        element:< Contact />
      },
      {
        path:'/order',
        element:<Order />
      },
      {
        path:'/rest/:resId',
        element:< RestMenu />
      },
      {
        path:'/cart',
        element:< Cart />
      }
    ],
    errorElement:<Error/>
  },
  
])

const heading = React.createElement('h1',{id:"heading"},'hello from react');
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render( <RouterProvider router={appRouter} />);