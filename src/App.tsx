import React from "react";
import UseStateComponent from "./useStateComponent";
import UseEffectComponent from "./useEffectComponent";
import UseContextComponent from "./useContextComponent";
import UseReducerComponent from "./useReducerComponent";
import UseRefComponent from "./useRefComponent";
import CustomHookComponent from "./CustomHookComponent";

function App() {
  return (
    <div>
      <h1>Custom Hook </h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
