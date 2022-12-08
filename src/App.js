import React, { useEffect } from "react";

import Select from "react-select";

import { getRegion } from "./redux/product";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { region } = useSelector((state) => state.header);

  useEffect(() => {
    dispatch(getRegion());
  }, []);

  return (
    <>
      <div className="App">
        <h1>Redux Toolkit</h1>
        <Select options={region} name="color" key={region && region[0].value} />
        <h1>TES1</h1>
      </div>
    </>
  );
}

export default App;
