import React from "react";
import DashboardSidebar from "../Dashboard/DashboardSideBar/DashboardSidebar";
import Orders from "./Orders";

const AllOrders = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center w-full">
        <div className=" w-[80px] 800px:w-[300px]">
          <DashboardSidebar active={2} />
        </div>
        <div className="w-full flex justify-center">
          <Orders />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllOrders;
