import Profile from '../pages/Profile'
import Dialogs from '../pages/Dialogs'

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
  ];

export default Routes