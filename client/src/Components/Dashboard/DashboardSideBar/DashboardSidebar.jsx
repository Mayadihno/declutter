/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { CiBank, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineReceiptRefund } from "react-icons/hi";
const DashboardSidebar = ({ active }) => {
  return (
    <React.Fragment>
      <div className=" h-[89vh] w-full overflow-y-scroll bg-white shadow-sm sticky top-0 left-0 z-10">
        {/* single item */}
        <div className="flex w-full items-center p-6">
          <Link to={"/shop-dashboard"} className=" w-full flex items-center">
            <RxDashboard
              color={`${active === 1 ? "#901E78" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 1 ? "#901E78" : "text-[#555]"
              }`}
            >
              Dashboard
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link to={"/shop-orders"} className=" w-full flex items-center">
            <FiShoppingBag
              color={`${active === 2 ? "#dc145c" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 2 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              All Orders
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link to={"/shop-all-product"} className=" w-full flex items-center">
            <FiPackage
              color={`${active === 3 ? "#dc145c" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 3 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              All Products
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link
            to={"/shop-create-product"}
            className=" w-full flex items-center"
          >
            <AiOutlineFolderAdd
              color={`${active === 4 ? "#dc145c" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 4 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              Create Product
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link
            to={"/shop/dashboard/withdraw-money"}
            className=" w-full flex items-center"
          >
            <CiBank color={`${active === 7 ? "#dc145c" : "#555"}`} size={25} />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 7 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              Withdrawl Money
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link
            to={"/shop/dashboard/coupons"}
            className=" w-full flex items-center"
          >
            <AiOutlineGift
              color={`${active === 9 ? "#dc145c" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 9 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              Discounts Codes
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link
            to={"/shop/dashboard/refunds"}
            className=" w-full flex items-center"
          >
            <HiOutlineReceiptRefund
              color={`${active === 10 ? "#dc145c" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 10 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              Refunds
            </h5>
          </Link>
        </div>
        <div className="flex w-full items-center p-6">
          <Link
            to={"/shop/dashboard/settings"}
            className=" w-full flex items-center"
          >
            <CiSettings
              color={`${active === 11 ? "#dc145c" : "#555"}`}
              size={25}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[16px] font-[400] ${
                active === 11 ? " text-[crimson]" : "text-[#555]"
              }`}
            >
              Settings
            </h5>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardSidebar;
