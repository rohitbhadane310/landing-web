import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlansPage from './pages/PlansPage';
import { Auth0Provider } from '@auth0/auth0-react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "plans",
    element: <PlansPage/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Auth0Provider
    domain="dev-x88fxv0ia15ehw1e.us.auth0.com"
    clientId="E9XouWOUHc4QBToZCg4MMTfheWfwFR9o"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <RouterProvider router={router}/>
  </Auth0Provider>,
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
