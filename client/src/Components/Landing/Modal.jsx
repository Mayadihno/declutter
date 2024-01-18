/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { MdClose } from "react-icons/md";
const Modal = ({ openModal, setOpenModal }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-50 flex justify-center items-center">
        <div className=" relative w-[95%] 800px:w-[30%] !h-[300px]  800px:h-[55vh] bg-white rounded-md p-4 shadow-sm">
          <MdClose
            className="absolute right-3 top-3 z-50 cursor-pointer"
            onClick={() => setOpenModal(!openModal)}
          />
          <div className="flex items-center w-full h-full">
            <h3 className="text-[16px] text-center">
              Are you ready to Setup your Seller’s acccount and start selling
              right from your dashboard?
            </h3>
          </div>
          <div className="flex 800px:justify-end justify-center mt-[-60px]">
            <div
              className={`!bg-[#901E78] ${styles.button} w-[50px] !h-10 !rounded-[4px] text-white`}
            >
              <button onClick={() => navigate("/register", { replace: true })}>
                Yes
              </button>
            </div>
            <div
              className={`!bg-[#92227ace] ${styles.button} w-[50px] ml-4 !h-10 !rounded-[4px] text-white`}
            >
              <button onClick={() => setOpenModal(false)}>No</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
