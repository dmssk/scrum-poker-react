import routeDictionary from "./routeDictionary"
import React from 'react';
const Home = React.lazy(() => import('../pages/Home'));
const PokerRoom = React.lazy(() => import('../pages/PokerRoom'));


const routes = [
  {
    path: routeDictionary.home,
    component: <Home />,
    key: 'home',
  },
  {
    path: routeDictionary.pokerRoom,
    component: <PokerRoom />,
    key: 'home',
  },
]

export default routes;
