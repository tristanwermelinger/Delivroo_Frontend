import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-delivroo--2hknkt95d96x.code.run/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <>
      <div>En cours de chargement...</div>
    </>
  ) : (
    <>
      <h1>{data.restaurant.name}</h1>
      <p>{data.restaurant.description}</p>
      <img src={data.restaurant.picture} alt="" />
    </>
  );
}

export default App;
