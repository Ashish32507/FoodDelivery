import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose From A Diverse Menu Featuring A Delectable Array
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, key) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={key}
              className="explore-menu-list-itme"
            >
              <img
                className={category === item.menu_name ? "Active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
