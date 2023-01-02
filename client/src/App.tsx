import React, { useEffect, useState } from "react";
import axios from "axios";
import { Global, css } from "@emotion/react";
import { IFood } from "./models/IFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";

function App() {
  const [backendData, setBackendData] = useState<IFood[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((response) => {
        setBackendData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Global
        styles={css`
          box-sizing: border-box;
          body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
