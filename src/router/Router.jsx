import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1">
        {Page1Routes.map((route) => (
          <Route
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
      <Route path="page2">
        {Page2Routes.map((route) => (
          <Route
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
};
