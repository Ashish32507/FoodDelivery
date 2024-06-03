import React, { useContext } from "react";
import "../Cart/Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";
function Cart() {
  const { removeFromCart, cartItem, food_list, getTotalCartAmnt } =
    useContext(StoreContext);

  const nevigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cartItem-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qunt</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cartItem-title cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmnt()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmnt() + 20}</b>
            </div>
          </div>
          <button onClick={() => nevigate("/order")}>Proceed To Change</button>
        </div>
        <div className="cart-promo">
          <div>
            <p>If You Have a Promo Code, Enter It Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter The Promo Code" />
              <button>Submite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
