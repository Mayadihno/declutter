import React from "react";
import image6 from "../../assets/images/image6.svg";
import styles from "../../styles/styles";
const ProfileSideBar = () => {
  return (
    <React.Fragment>
      <div className=" bg-white shadow-md">
        <div className="w-full py-5">
          <div className="w-full flex justify-center items-center">
            <img
              src={image6}
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </div>
          <h3 className=" text-center py-2 text-[20px]">MayaTech</h3>
          <p className=" text-[16px] text-[#000000a6] flex items-center p-[10px]">
            i sell good products that are very okay
          </p>
        </div>
        <div className="p-1 ml-2">
          <h5 className="font-[600]">Address</h5>
          <h4 className="text-[#000000a6]">Molete Ibadan Nigeria</h4>
        </div>
        <div className="p-1 ml-2">
          <h5 className="font-[600]">Phone Number</h5>
          <h4 className="text-[#000000a6]">08136908207</h4>
        </div>
        <div className="p-1 ml-2">
          <h5 className="font-[600]">Total Products</h5>
          <h4 className="text-[#000000a6]">10</h4>
        </div>
        <div className="p-1 ml-2">
          <h5 className="font-[600]">Shop Ratings</h5>
          <h4 className="text-[#000000a6]">4/5</h4>
        </div>
        <div className="p-1 ml-2">
          <h5 className="font-[600]">Joined On</h5>
          <h4 className="text-[#000000a6]">2023-12-03</h4>
        </div>

        <div className="py-3 px-4">
          <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
            <span className="text-white">Edit Shop</span>
          </div>
          <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
            <span className="text-white">Log out</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileSideBar;
