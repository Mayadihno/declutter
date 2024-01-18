import React from "react";
import DashboardSidebar from "./DashboardSideBar/DashboardSidebar";
import DashboardContent from "./DashboardContent/DashboardContent";

const Dashboard = () => {
  //   const [active, setActive] = useState(false);
  return (
    <React.Fragment>
      <div className="flex justify-between w-full">
        <div className=" w-[80px] 800px:w-[300px]">
          <DashboardSidebar active={1} />
        </div>
        <div className="w-full 800px:mx-6 mr-1  mt-4">
          <DashboardContent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
