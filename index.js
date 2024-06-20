import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Home } from './Veiw/Home/Home';
import { Member } from './Veiw/Member/Membership';
import { Signup } from './Veiw/Signin/Signin';
import { BMIC } from './Veiw/BMIC/BMIC';
import {Contact} from './Veiw/Contact/Contact';

const routes=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },

  {
    path:'/membership',
    element:<Member/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/BMI',
    element:<BMIC/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);

