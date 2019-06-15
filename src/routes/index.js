import Profile from '../pages/Profile';
import Dialogs from '../pages/Dialogs';

const Routes = [
  {
    path: '/profile',
    to: '/profile',
    title: 'Профиль',
    description: '',
    component: Profile,
  },
  {
    path: '/dialogs',
    to: '/dialogs',
    title: 'Диалоги',
    description: '',
    component: Dialogs,
  }
];

export default Routes;