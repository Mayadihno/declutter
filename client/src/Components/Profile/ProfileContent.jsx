import React, { useState } from "react";
import { itemsdata } from "../Dashboard/dashboardData";
import styles from "../../styles/styles";

const ProfileContent = () => {
  const [active, setActive] = useState(1);
  return (
    <React.Fragment>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full">
            <div className="flex items-center" onClick={() => setActive(1)}>
              <h5
                className={`cursor-pointer ${
                  active === 1 ? "text-red-500" : "text-[#333]"
                } text-[20xp] font-[500] pr-[20px]`}
              >
                Shop Prodcuts
              </h5>
            </div>
            <div className="flex items-center" onClick={() => setActive(2)}>
              <h5
                className={`cursor-pointer ${
                  active === 2 ? "text-red-500" : "text-[#333]"
                } text-[20xp] font-[500] pr-[20px]`}
              >
                Running Events
              </h5>
            </div>
            <div className="flex items-center" onClick={() => setActive(3)}>
              <h5
                className={`cursor-pointer ${
                  active === 3 ? "text-red-500" : "text-[#333]"
                } text-[20xp] font-[500] pr-[20px]`}
              >
                Shop Reviews
              </h5>
            </div>
          </div>
        </div>
        <br />
        {active === 1 && (
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {itemsdata.map((item) => {
              return (
                <div className="card shadow border" key={item.id}>
                  <img src={item.image} className="w-full" alt="" />
                  <div className="flex justify-between mt-3 mb-2 px-2">
                    <h5 className={`${styles.shop_name}`}>{item.title}</h5>
                    <span className={`${styles.productDiscountPrice}`}>
                      ${item.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div className="text-xs">
                      <span>0 favorites</span>
                      <span className="block">0 views</span>
                    </div>
                    <div className="buttons mb-2">
                      <button className="border text-[#901E78] shadow-sm text-sm rounded-[4px] px-2 py-1">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {active === 2 && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
              {itemsdata.map((item) => {
                return (
                  <div className="card shadow border" key={item.id}>
                    <img src={item.image} className="w-full" alt="" />
                    <div className="flex justify-between mt-3 mb-2 px-2">
                      <h5 className={`${styles.shop_name}`}>{item.title}</h5>
                      <span className={`${styles.productDiscountPrice}`}>
                        ${item.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center px-2">
                      <div className="text-xs">
                        <span>0 favorites</span>
                        <span className="block">0 views</span>
                      </div>
                      <div className="buttons mb-2">
                        <button className="border text-[#901E78] shadow-sm text-sm rounded-[4px] px-2 py-1">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProfileContent;
