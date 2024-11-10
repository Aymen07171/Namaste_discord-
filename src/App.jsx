import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // Add more routes as needed
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
