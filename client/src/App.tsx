import React, { useEffect, useState } from "react";
import axios from "axios";
import { Global, css } from "@emotion/react";
import { IFood } from "./models/IFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";

import Home from "./components/pages/Home/Home";
import Product from "./components/pages/Product/Product";

function App() {
  const [backendData, setBackendData] = useState<IFood[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((response) => {
        setBackendData(response.data);
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
            font-family: Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
            color: 232323;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BackendDataContext.Provider value={backendData}>
                <Home />
              </BackendDataContext.Provider>
            }
          ></Route>
          <Route
            path="/product/:id"
            element={
              <BackendDataContext.Provider value={backendData}>
                <Product />
              </BackendDataContext.Provider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export const BackendDataContext = createContext<IFood[] | undefined>(undefined);

export default App;
