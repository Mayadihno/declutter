/* eslint-disable no-constant-condition */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { CiBank } from "react-icons/ci";
import image from "../../assets/images/image11.svg";
import { AiOutlineFolderAdd } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {location.pathname.includes("/shop") && (
        <div className=" w-full h-[80px] bg-white shadow top-0 left-0 z-30 flex items-center justify-between sticky px-4">
          <div className="">
            <Link to={"/"}>
              <img src={image} alt="" className="w-[100px] h-[100px]" />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <RxDashboard
                color="#555"
                size={30}
                className="mx-5 cursor-pointer 800px:block hidden"
                onClick={() => navigate("/shop-dashboard", { replace: true })}
              />

              <FiShoppingBag
                color="#555"
                size={30}
                className="mx-5 cursor-pointer 800px:block hidden"
                onClick={() => navigate("/shop-orders", { replace: true })}
              />
              <FiPackage
                color="#555"
                size={30}
                className="mx-5 cursor-pointer 800px:block hidden"
                onClick={() => navigate("/shop-all-product", { replace: true })}
              />
              <AiOutlineFolderAdd
                color="#555"
                size={30}
                className="mx-5 cursor-pointer 800px:block hidden"
                onClick={() =>
                  navigate("/shop-create-product", { replace: true })
                }
              />

              <CiBank
                color="#555"
                size={30}
                className="mx-5 cursor-pointer 800px:block hidden"
              />

              <Link to={"/shop-profile"}>
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  }
                  alt=""
                  className=" w-[50px] h-[50px] rounded-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
