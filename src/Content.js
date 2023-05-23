import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import EducationPage from "./pages/Education/EducationPage";

function Content() {
    const location = useLocation();

    return (
      <TransitionGroup>
        <CSSTransition 
          timeout={200}
          classNames="fade"
          key={location.key}
        >
          <Routes location={location}>
            <Route path="/my-site/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="education" element={<EducationPage />} />
            </Route>

            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
}

export default Content;