import React, { useState } from "react";
import styles from "../../styles/styles";
import { data } from "./landingData";
import Modal from "./Modal";
import image1 from "../../assets/images/image1.svg";
const Landing = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <div className=" mt-20">
        <div className=" m-auto 800px:max-w-[80%] max-w-[99%]">
          <div className="bg-[#901E78] h-[300px] rounded-md">
            <div className="800px:flex items-center justify-between block pt-4">
              <div className="ml-10 text-white">
                <h3 className=" font-[600] mb-1 text-[20px]">
                  Monetize Your Closet
                </h3>
                <h6 className=" 800px:w-[85%] text-[14px] w-full">
                  Sell Your Pre-Loved Fashion Items and Turn Your Wardrobe Into
                  Earnings
                </h6>
              </div>
              <div className="">
                <img
                  src={image1}
                  alt=""
                  className=" object-contain w-[300px] mt-6 mx-auto 800px:w-[400px]"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.heading} flex items-center justify-center`}>
            <h4 className="mt-6">How it works</h4>
          </div>
          <div className="  800px:max-w-[75%] m-auto max-w-[95%]">
            <div className=" grid grid-cols-1 800px:my-3 my-0">
              {data.map((data) => {
                return (
                  <div
                    className="800px:flex-row flex flex-col items-center justify-between my-3"
                    key={data.id}
                  >
                    <div className="">
                      <h4 className=" mb-2 font-bold">{data.title}</h4>
                      <p className="text-[14px] 800px:w-2/3 w-full mb-2">
                        {data.text}
                      </p>
                    </div>
                    <div className="">
                      <img
                        src={data.image}
                        alt=""
                        className=" rounded-[4px] 800px:!w-[250px] object-contain w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`${styles.button} !bg-[#901E78] !rounded-[5px]  hover:!bg-[#901e77c2]`}
            >
              <button className=" text-white" onClick={handleOpenModal}>
                Start Selling
              </button>
            </div>
            {openModal && (
              <Modal openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
