import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart,clearCart } from "../redux/cartSlice";

const cart = () => {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleAddToCart = () => {
    if (productName && productPrice) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
      };
      dispatch(addToCart(newProduct));
      setProductName(""); 
      setProductPrice("");
    } else {
      alert("Iltimos, mahsulot nomi va narxini kiriting!");
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-9">
      <div>
        <input
          className="border border-gray-400 p-2 rounded-2xl"
          type="text"
          placeholder="Mahsulot nomini kiriting"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          className="border border-gray-400 p-2 rounded-2xl"
          type="number"
          placeholder="Narxini kiriting"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button
          className="bg-blue-600 cursor-pointer mx-3 p-1 rounded-2xl hover:bg-blue-800 duration-300"
          onClick={handleAddToCart}
        >
          Qo'shish
        </button>
      </div>

      <div>
        {cartItems.length === 0 ? (
          <p>Korzinka bo'sh.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li className="flex justify-between w-[400px]" key={item.id}>
                {item.name} - ${item.price}
                <button
                  className="bg-red-600 cursor-pointer mx-3 p-1 rounded-2xl hover:bg-red-800 duration-300"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  o'chirish
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3 className="font-bold">Umumiy narx: ${totalAmount}</h3>
        <button
          className="bg-gray-600 cursor-pointer mx-3 p-2 rounded-2xl hover:bg-gray-800 duration-300"
          onClick={handleClearCart}
        >
          Kartni tozalash
        </button>
      </div>
    </div>
  );
};

export default cart;
