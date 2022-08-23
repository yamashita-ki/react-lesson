import { Route, Routes } from "react-router-dom";
import { Page404 } from "../components/Page404";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { BrowserRouter } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/users" element={<Users />} />
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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
