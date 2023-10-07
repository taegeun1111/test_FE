import {ReactNode} from 'react';
import App from '../App';
import {createBrowserRouter} from 'react-router-dom';
import CustomCalendar from '../components/CustomCalendar';

type Router = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Router[];
};

const routerData: Router[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [{path: '', element: <CustomCalendar />}],
  },
];

const router = createBrowserRouter(routerData);

export default router;
