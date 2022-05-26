import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import routesList from "./routesList"

function RoutesRoot() {

  return (
    <Routes>
      {routesList.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={route.component}
        />
      ))}
    </Routes>
  )
}

export default RoutesRoot;
