import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ClockPage from "./pages/Clock/ClockPage";
import HomePage from "./pages/Home/HomePage";
import SamplePage from "./pages/Sample/SamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sample" element={<SamplePage />} />
          <Route path="clock" element={<ClockPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
