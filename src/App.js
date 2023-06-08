import React, {useEffect, useState} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import LipRenderer from "./components/LipRenderer";
import _color from "./assets/images/bg/_color.png";


function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  console.log(data);



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
