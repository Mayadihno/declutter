import React from "react";
import DashboardSidebar from "../Dashboard/DashboardSideBar/DashboardSidebar";
import ProductCreate from "./ProductCreate";

const CreateProduct = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between w-full">
        <div className=" w-[80px] 800px:w-[300px]">
          <DashboardSidebar active={4} />
        </div>
        <div className="w-full flex justify-center mt-6">
          <ProductCreate />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateProduct;
