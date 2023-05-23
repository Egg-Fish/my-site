import { BrowserRouter, MemoryRouter } from "react-router-dom";

import Content from "./Content";

function App() {

  return (
    <MemoryRouter initialEntries={["/my-site"]}>
      <Content />
    </MemoryRouter>
  );
}

export default App;
