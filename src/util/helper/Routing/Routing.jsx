import { useRoutes } from 'react-router-dom';
import Home from '../../../Pages/Home';
import Calculator from '../../../Pages/Calculator';
import Quote from '../../../Pages/Quote';

export default function AppRoutes() {
  const routStructure = [
    { path: '/', element: <Home /> },
    { path: 'calc', element: <Calculator /> },
    { path: 'quote', element: <Quote /> },
  ];

  const RoutesBox = useRoutes(routStructure);
  return RoutesBox;
}
