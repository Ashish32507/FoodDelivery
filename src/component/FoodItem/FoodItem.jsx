import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { addToCart, removeFromCart, cartItem } = useContext(StoreContext);

  return (
    <div className="foodItem">
      <div className="foodItem-Container">
        <img src={image} alt={name} className="food-item-img" />

        {!cartItem[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="Add to Cart"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from Cart"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add to Cart"
            />
          </div>
        )}
      </div>
      <div className="foodItem-info">
        <div className="foodItem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <div className="foodItem-Description">{description}</div>
        <div className="foodItem-price">${price}</div>
      </div>
    </div>
  );
}

export default FoodItem;
