import { useContext, useState } from "react";
import { createContext } from "react";
// 项目的根组件
const MsgContext = createContext();

function A({ onGetAName }) {
  const name = "this is A name";
  return (
    <div>
      <B />
    </div>
  );
}
function B({ name }) {
  const msg = useContext(MsgContext);
  return <div>this is B component {msg} </div>;
}
function App() {
  const msg = "this is app msg";
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is app
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
