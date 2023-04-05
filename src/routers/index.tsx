import { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import viewsUrls from "./routes";

function Routers() {
  const location = useLocation();
  const urlNavigate = useNavigate();


  return (
      <Routes>
        {
          viewsUrls?.map(({ component, path, exact, type, id }) => {
            let Component = component;
            return (
              <Route path={path} element={<Component />} key={id} />
            );
          })
        }
      </Routes>
  );
}

export default Routers;
