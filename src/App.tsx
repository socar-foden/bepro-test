import React from "react";

import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";

const App: React.FC = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default App;
