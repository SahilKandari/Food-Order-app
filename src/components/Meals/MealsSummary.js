import "./MealsSummary.css";
import React from "react";
import Card from "../UI/Card";

function MealsSummary() {
  return (
    <Card className="row meal-summary ">
      <div className="col-12">
        <div className="row mb-4">
          <div className="col-12">
            <h2>Delicious Food, Delivered To You</h2>
          </div>
        </div>
        <div className="row  mb-3">
          <div className="col-12">
            <p>
              {" "}
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
          </div>
        </div>
        <div className="row  mb-3">
          <div className="col-12">
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </div>
        </div>
      </div>
    </Card>
  );
}
export default MealsSummary;
