import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Services from './components/Services.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
