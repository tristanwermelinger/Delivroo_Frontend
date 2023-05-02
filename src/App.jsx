import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Meal from "./components/Meal";

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
      <header></header>
      <section>
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
        <img src={data.restaurant.picture} alt="tartines" />
      </section>
      <main>
        {data.categories.map((category) => {
          if (category.meals.length !== 0) {
            return (
              <div key={category.name}>
                <h2>{category.name}</h2>
                {category.meals.map((meal) => {
                  return <Meal key={meal.id} meal={meal} />;
                })}
              </div>
            );
          } else {
            return null;
          }
        })}
      </main>
    </>
  );
}

export default App;
