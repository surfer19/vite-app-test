import "./styles/globals.scss";

import Layout from "./components/Layout";
import Posts from "./components/Posts";

function App() {
  return (
    <Layout>
      <div>
        <h1 className="header">Welcome to blog app</h1>
        <Posts />
      </div>
    </Layout>
  );
}

export default App;
