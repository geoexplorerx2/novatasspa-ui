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
  
  useEffect(() => {
    let activeLang = localStorage.getItem('activeLang');
    // if(location?.pathname == '/'){
    //   urlNavigate(`${activeLang}/novatascrystal`);
    // };
  }, [location]);

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
