import React, { useState } from "react";
import "../Home/Home.css";
import Hearder from "../../component/Header/Hearder";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../component/FoodDisplay.jsx/FoodDisplay";
function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hearder />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
