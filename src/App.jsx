import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./components/productList"; 
import { openModal } from "./redux/modalSlice";
import Modal from "./components/Modal";
import { add, deletee} from "./redux/productSlice";

const App = () => {
  const products = useSelector((state) => state.products.value);
   const cartItems = useSelector((state) => state.cart.items);
   const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  function handleAddProduct() {
    let newProduct = prompt("Yangi maxsulot kiritng");
    dispatch(add(newProduct));
  }
  function handleDeletee() {
    let deleteProduct = prompt("Indeksini kiritng");
    dispatch(deletee(deleteProduct));
  }


  // ///////////////////////////////////////////
   const handleAddToCart = (product) => {
     dispatch(addToCart(product));
   };

   const handleRemoveFromCart = (id) => {
     dispatch(removeFromCart(id));
   };

   const handleClearCart = () => {
     dispatch(clearCart());
   };
  // //////////////////////////////////////////

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

      <div className="mx-auto flex justify-center flex-col items-center gap-2 border-b border-black py-3">
        <ul>
          {products.length > 0 &&
            products.map((product, index) => {
              return <li key={index}>{product}</li>;
            })}
        </ul>
        <div className="flex gap-3">
          <button
            className="border border-black rounded-2xl p-1 cursor-pointer"
            onClick={handleAddProduct}
          >
            Add product
          </button>
          <button
            className="border border-black rounded-2xl p-1 cursor-pointer"
            onClick={handleDeletee}
          >
            Delete
          </button>
        </div>
      </div>

      <ProductList/>
    </div>
  );
};

export default App;
