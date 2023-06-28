//  Dependancies
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard/Dasboard';
import React from 'react';

// function App() {
// If any state is needed at this top-most level - put here:
// Username/Password?

// return (
//   <>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='*' element={<NotFound />} />
//     </Routes>
//   </>
// );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
