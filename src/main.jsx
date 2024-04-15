import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Countries from './component/Countries/Countries';
import Users from './component/Users/Users';

import UserDetails from './component/UserDetails/UserDetails';
import Albums from './component/Albums/Albums';
import AlbumDetails from './component/AlbumDetails/AlbumDetails';
import CountryDetails from './component/CountryDetails/CountryDetails';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home></Home>,

    children:[
      {
        path:"countries",
        element: <Countries></Countries>,
        loader:()=>fetch('https://restcountries.com/v3.1/all')
       }
       ,
      {
        path:"country/:countryId",
        element: <CountryDetails></CountryDetails>,
        loader:({params})=>fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
       }
       ,
      {
        path:"users",
        element: <Users></Users>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
       }
       ,
      {
        path:"user/:userId",
        element: <UserDetails></UserDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
       }
       ,
       {
        path:'albums',
        element: <Albums></Albums>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/albums')
       },
       {
        path:'album/:albumId',
        element: <AlbumDetails></AlbumDetails> ,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
       },
       {
        path:'*',
        element: <div>Not found,404</div>
       }
    ]
  }
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
