import HomePage from '../containers/HomePage/Loadable';
import LoginPage from '../containers/LoginPage/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';

export const routes = [
    {
        component: HomePage,
        path: '/',
        exact: true
    },
    {
        component: LoginPage,
        path: '/login',
        exact: true
    },
    {
        component: NotFoundPage,
    },
]