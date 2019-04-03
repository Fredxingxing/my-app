import Home from '../pages/index';
import Game from '../pages/Game/index';
import Goods from '../pages/Goods/index';
import Mine from '../pages/Mine/index';
import News from '../pages/News/index';

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path:'/Game',
        component:Game
      },
      {
        path:'/Goods',
        component:Goods,
      },
      {
        path:'/Mine',
        component:Mine,
      },
      {
        path:'/News',
        component:News,
      }
    ]
  }
];