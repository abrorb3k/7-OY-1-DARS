import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {add, deletee} from "../redux/productSlice"


function Product1() {

      const products = useSelector((state) => state.products.value);
    const dispatch = useDispatch();

    function handleAddProduct() {
      let newProduct = prompt("Yangi maxsulot kiritng")
      dispatch(add(newProduct))
      
    }
    function handleDeletee() {
      let deleteProduct = prompt("Indeksini kiritng");
      dispatch(deletee(deleteProduct));
    }
  return (
    <div>
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
    </div>
  );
}

export default Product1