import "./App.css";
import  NavBar  from "./components/navBar/NavBar";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PublicRoutes />
    </div>
  );
}

export default App;
