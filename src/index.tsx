import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Game } from './component/Game/Game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/home/:money",
    element: <App />,
  },
  {
    path: "/game",
    element: <Game />,
  },


  
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
