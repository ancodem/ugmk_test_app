import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import useRoutes from "./hooks/useRoutes";

const App = () => {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
