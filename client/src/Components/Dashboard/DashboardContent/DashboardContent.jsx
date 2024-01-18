import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { data, dataActivity, dataCloth } from "../dashboardData";
import ChartJs from "../ChartJs";
const DashboardContent = () => {
  const [dropdown, setDropdown] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expandeds, setExpandeds] = useState(false);

  const dataToDisplay = expanded ? dataCloth : dataCloth.slice(0, 4);
  const dataToShow = expandeds ? dataActivity : dataActivity.slice(0, 3);
  const handleSeeAll = () => {
    setExpanded(!expanded);
  };
  return (
    <React.Fragment>
      <div className="">
        {/* top section */}
        <div className="800px:grid 800px:grid-cols-4 800px:gap-8 flex justify-around gap-10 800px:ml-0 ml-12">
          {data &&
            data.map((data) => {
              return (
                <div
                  className="800px:bg-[#901E784D] 800px:rounded-md 800px:w-full 800px:px-20 800px:py-5 text-[12px]"
                  key={data.id}
                >
                  <div className="flex items-center ml-[-68px]">
                    <div className="bg-white rounded-[4px] 800px:p-1 800px:block hidden">
                      {<data.icons size={25} />}
                    </div>
                    <h5 className="800px:ml-2 font-[500]">{data.text}</h5>
                  </div>
                  <h4 className="800px:mt-3 mt-1 font-bold ml-[-68px]">
                    {data.price}
                  </h4>
                </div>
              );
            })}
        </div>
      </div>
      <div className="800px:flex 800px:justify-between mt-6">
        <div className=" 800px:w-[75%] w-[100%] border rounded-md 800px:p-6 pt-6 px-1">
          <div className="flex justify-between items-center mt-[-20px]">
            <h2>Sales Analysis</h2>
            <div className="border py-1 px-2 cursor-pointer">
              <h3
                onClick={() => setDropdown(!dropdown)}
                className="flex justify-between items-center"
              >
                Yearly <IoIosArrowDown className="ml-1 mt-1" />
              </h3>
              {dropdown && (
                <ul className="mt-4">
                  <li
                    onClick={() => setDropdown(!dropdown)}
                    className="border-b-2 border-t-2"
                  >
                    Monthly
                  </li>
                  <li
                    onClick={() => setDropdown(!dropdown)}
                    className=" border-t-2"
                  >
                    Daily
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-full">
            <ChartJs />
          </div>
        </div>
        <div className=" 800px:w-[22%] w-[99%] mt-4 800px:mt-[-10px] p-2">
          <div className="flex justify-between items-center mb-4">
            <h4>Top sales</h4>
            <h4 onClick={handleSeeAll} className=" cursor-pointer">
              {!expanded ? (
                <span className="flex justify-between items-center">
                  see more
                  <IoIosArrowForward className="mt-1" />
                </span>
              ) : (
                <span className="flex justify-between items-center">
                  see less <IoIosArrowDown className="mt-1" />
                </span>
              )}
            </h4>
          </div>
          <div className="">
            {dataToDisplay.map((data) => {
              return (
                <div className="flex justify-between p-2" key={data.id}>
                  <div className="flex items-center">
                    <img
                      src={data.image}
                      alt=""
                      className=" w-[30px] rounded-[5px]"
                    />
                    <p className=" text-[11px] ml-1">{data.text}</p>
                  </div>
                  <h6 className=" text-end">
                    {data.price < 10 ? (
                      <span className="pr-2">${data.price}</span>
                    ) : (
                      <span>${data.price}</span>
                    )}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-10 border 800px:w-[75%] w-[100%] rounded-[4px] px-4 py-1 mb-20">
        <div className="flex justify-between">
          <h2>Recent Activity</h2>
          <p
            onClick={() => setExpandeds(!expandeds)}
            className=" cursor-pointer"
          >
            {!expandeds ? (
              <span className="flex justify-between items-center">
                see more
                <IoIosArrowForward className="mt-1" />
              </span>
            ) : (
              <span className="flex justify-between items-center">
                see less <IoIosArrowDown className="mt-1" />
              </span>
            )}
          </p>
        </div>
        <div className=" mt-6">
          {dataToShow.map((data) => {
            return (
              <div className="flex justify-between p-1" key={data.id}>
                <div className="flex items-center">
                  <img
                    src={data.image}
                    className="w-[30px] rounded-[5px]"
                    alt=""
                  />
                  <p className="ml-1 text-[12px]">{data.text}</p>
                </div>
                <div className="text-end">
                  <h6 className="text-[#34A853]">${data.price}</h6>
                  <span className="text-[14px]">{data.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardContent;
