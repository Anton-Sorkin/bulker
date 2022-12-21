import React, { useEffect, useState } from "react";
import axios from "axios";
import { IFood } from "./models/IFood";

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
    <div className="test">
      <h1>Test</h1>
    </div>
  );
}

export default App;
