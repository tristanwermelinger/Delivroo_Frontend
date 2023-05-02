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
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <header>
        <div className="container">
          {/* chercher l'image du logo */}
          <img src="logo" alt="" />
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img src={data.restaurant.picture} alt="tartines" />
        </div>
      </section>
      <main>
        <div className="container">
          <section className="col-left">
            {data.categories.map((category) => {
              if (category.meals.length !== 0) {
                return (
                  <div key={category.name}>
                    <h2>{category.name}</h2>
                    <div className="meals-container">
                      {category.meals.map((meal) => {
                        return <Meal key={meal.id} meal={meal} />;
                      })}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </section>
          <section className="col-right"></section>
        </div>
      </main>
    </div>
  );
}

export default App;
