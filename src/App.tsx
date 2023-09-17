import "./styles/globals.scss";

import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layout>
      <div>
        {/* all the other elements */}
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}

export default App;
