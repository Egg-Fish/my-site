import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import SamplePage from "./pages/Sample/SamplePage";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function Content() {
    const location = useLocation();

    return (
        <TransitionGroup>
        <CSSTransition 
          timeout={150}
          classNames="fade"
          key={location.key}
        >
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="sample" element={<SamplePage />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
}

export default Content;