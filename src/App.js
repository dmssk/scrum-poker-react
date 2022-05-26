import './App.css';
import RoutesRoot from "./router/RoutesRoot"
import AppHeader from "./components/AppHeader"
import {useState, Suspense} from "react"
import AppNav from "./components/AppNav"

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="App">
      <AppHeader setDrawerOpen={() => setDrawerOpen(true)} />
      <AppNav
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <Suspense fallback={<div>Loading... </div>}>
        <RoutesRoot />
      </Suspense>
    </div>
  );
}

export default App;
