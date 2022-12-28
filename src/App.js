import { HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import "./App.css";

function App() {
  return (
    <Routes>
      {routes().map((item) => (
        <Route key={item.path} {...item} />
      ))}
    </Routes>
  );
}

export default App;
