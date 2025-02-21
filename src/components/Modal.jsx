import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null; 

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Modal</h2>
        <p>Assalomu alaykum yaxshimisz</p>
        <button className="cursor-pointer hover:border rounded-4xl px-2" onClick={() => dispatch(closeModal())}>Yopish</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
  },
};

export default Modal;
