import Profile from '../pages/Profile';
import Dialogs from '../pages/Dialogs';
import Users from '../pages/Users'

const Routes = [
  {
    path: '/profile',
    to: '/',
    title: 'Profile',
    description: 'profile',
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
  ];

export default Routes