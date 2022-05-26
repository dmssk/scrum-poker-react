import routeDictionary from "./routeDictionary"
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CasinoIcon from '@mui/icons-material/Casino';
const Home = React.lazy(() => import('../pages/Home'));
const PokerRoom = React.lazy(() => import('../pages/PokerRoom'));


const routes = [
  {
    path: routeDictionary.home,
    component: <Home />,
    key: 'home',
    name: 'Home',
    icon: <HomeIcon />
  },
  {
    path: routeDictionary.pokerRoom,
    component: <PokerRoom />,
    key: 'pokerRoom',
    name: 'Poker Room',
    icon: <CasinoIcon />
  },
]

export default routes;
