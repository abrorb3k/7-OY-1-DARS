import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./components/Cart"; 
import { openModal } from "./redux/modalSlice";
import Modal from "./components/Modal";
import Product1 from "./components/Product1";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="p-5 border-b border-black flex justify-center">
        <button
          className="cursor-pointer hover:border rounded-4xl px-2"
          onClick={() => dispatch(openModal())}
        >
          Modalni Ochish
        </button>
        <Modal />
      </div>

      <Product1 />
      <ProductList />
    </div>
  );
};

export default App;
