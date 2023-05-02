const Meal = ({ meal }) => {
  return (
    <article>
      <h3>{meal.title}</h3>
      <p>{meal.decription}</p>
      <p>{meal.price} €</p>
      {meal.popular && <p>Populaire</p>}
      <img src={meal.picture} alt={meal.title} />
    </article>
  );
};

export default Meal;
