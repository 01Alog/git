import React, { useEffect, useState } from "react";
import { getData, postData } from "./pages/home/api";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePostData = async () => {
    try {
      const result = await postData({ key: "value" }); // Reemplaza con los datos que deseas enviar
      console.log("Post response:", result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handlePostData}>Post Data</button>
    </div>
  );
};

export default App;
