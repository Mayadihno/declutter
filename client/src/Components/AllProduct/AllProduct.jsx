import React from "react";
import Items from "./Items";
import image6 from "../../assets/images/image6.svg";
const AllProduct = () => {
  return (
    <React.Fragment>
      <div className="">
        <h3 className=" font-bold text-[18px] mb-2">My Items</h3>
        <div className=" bg-[#901E78] 800px:w-[1000px] w-[350px] rounded-[6px] 800px:h-[180px] h-[100px]"></div>
        <div className="image 800px:ml-24 800px:-mt-20 -mt-10 ml-10">
          <img src={image6} className="800px:w-[150px] w-[70px]" alt="" />
          <span className="800px:ml-4 -ml-[15px] mt-2 font-[600] text-[16px]">
            Taiwo Oyeniran
          </span>
        </div>
        <div className="sold mt-32">
          <Items />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllProduct;
