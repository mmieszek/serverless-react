import React from "react";
import { Sidebar, Header, Input, Messages } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Header />
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default App;
