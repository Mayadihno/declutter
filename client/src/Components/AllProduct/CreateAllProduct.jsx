import React from "react";
import DashboardSidebar from "../Dashboard/DashboardSideBar/DashboardSidebar";
import AllProduct from "./AllProduct";

const CreateAllProduct = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between w-full">
        <div className=" w-[80px] 800px:w-[300px]">
          <DashboardSidebar active={3} />
        </div>
        <div className="w-full flex justify-center mt-6">
          <AllProduct />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateAllProduct;
