import React from "react";
import { consoleLog } from "./redux/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

function App() {
  let name = useAppSelector((state) => state.user.name);
  console.log(name);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(consoleLog({ name: "jim" }))}>
        Click
      </button>
    </div>
  );
}

export default App;
