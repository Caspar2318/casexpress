import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  //add to cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    if (checkProductInCart) {
      alert("Selected product already inside Cart.");
      // const updatedCartItems = cartItems.map((item) => {
      //   if (item._id === product._id)
      //     return {
      //       ...item,
      //       quantity: item.quantity + quantity,
      //     };
      // });
      // setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
      toast.success(`${qty} ${product.name} added to the cart.`);
    }

    setQty(1);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((i) => i._id === product._id);
    const newCartItems = cartItems.filter((i) => i._id !== product._id);
    setCartItems(newCartItems);
    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prev) => prev - foundProduct.quantity);
  };

  //inside cart to add or reduce item
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    //use filter to not mutate cartItems as splice will mutate const cartItems
    let newCartItems = cartItems;

    if (value === "inc") {
      foundProduct.quantity += 1;

      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;

        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
        // setCartItems([
        //   ...newCartItems,
        //   { ...foundProduct, quantity: foundProduct.quantity - 1 },
        // ]);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
