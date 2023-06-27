//  Dependancies
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home.js';
import NotFound from './pages/NotFound';

function App() {
  // If any state is needed at this top-most level - put here:
  // Username/Password? 

  return (
    <>  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )

}

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path='/' element={<Home />} />)
// );
// function App() {
//   return <RouterProvider router={router} />;
// }

export default App;
