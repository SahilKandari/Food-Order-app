import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealsItem from "./MealsItems/MealsItem";
import React, { useEffect, useState } from "react";
// import CardContext from "../../store/cart-context";
import axios from "axios";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

function AvailableMeals() {
  const [mealsData, setMealsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://food-order-api-2732a-default-rtdb.firebaseio.com/meals.json"
      )
      .then((response) => {
        const loadedMeals = [];
        for (const key in response.data) {
          loadedMeals.push({
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
          });
        }
        setMealsData(loadedMeals);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const mealList = mealsData.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card className="available-meals">
      <ul className="list-group ">{mealList}</ul>
    </Card>
  );
}
export default AvailableMeals;
