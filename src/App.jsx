//  Dependancies
import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<Home />} />)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
