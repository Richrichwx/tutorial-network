import Profile from '../pages/Profile';
import Dialogs from '../pages/Dialogs';
import Users from '../pages/Users'
import Login from '../pages/Login';

const Routes = [
  {
    path: '/profile',
    to: '/',
    title: 'Profile',
    description: 'profile',
    component: Profile,
  },
  {
    path: '/profile/:id',
    to: '/profile/:id',
    title: 'profile',
    description: '',
    component: Profile,
  },
  {
    path: '/dialogs',
    to: '/dialogs',
    title: 'dialogs',
    description: '',
    component: Dialogs,
  },
  {
    path: '/dialogs/:id',
    to: '/dialogs',
    title: 'dialogs',
    description: '',
    component: Dialogs,
  },
  {
    path: '/users',
    to: '/users',
    title: 'users',
    description: 'users',
    component: Users,
  },
  {
    path: '/login',
    to: '/login',
    title: 'Войти',
    description: '',
    component: Login,
  },
  ];

export default Routes