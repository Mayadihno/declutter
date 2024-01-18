import React, { useState } from "react";
import { itemsdata } from "../Dashboard/dashboardData";
import styles from "../../styles/styles";
import EditItem from "./EditItem";

const Items = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  const handleModalOpen = (id) => {
    const data = itemsdata.find((item) => item.id === id);
    setItem(data);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <div className="active">
        <div className="flex justify-around border-b-2 800px:text-[16px] text-[13px]">
          <div
            className={`${
              active === 1
                ? "bg-[#901E78] px-4 rounded-[6px] py-2 text-white mb-1"
                : " bg-slate-300 px-4 py-2 rounded-[6px] mb-2"
            }`}
          >
            <button onClick={() => setActive(1)}>Available items</button>
          </div>
          <div
            className={`${
              active === 2
                ? "bg-[#901E78] px-4 rounded-[6px] py-2 text-white mb-1"
                : " bg-slate-300 px-4 py-2 rounded-[6px] mb-2"
            }`}
          >
            <button onClick={() => setActive(2)}>Sold Items</button>
          </div>
        </div>

        <div className="activeTab">
          {active === 1 && (
            <div className="mt-4 mb-10">
              <div className=" grid 800px:grid-cols-4 grid-cols-1 800px:gap-4 gap-6">
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
                          <button
                            onClick={() => handleModalOpen(item.id)}
                            className="border text-[#901E78] shadow-sm text-sm rounded-[4px] px-2 py-1"
                          >
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
          {open && (
            <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-50 flex justify-center items-center">
              <EditItem item={item} setOpen={setOpen} />
            </div>
          )}
          {active === 2 && (
            <div className="">
              <div className="mt-4 mb-10">
                <div className=" grid 800px:grid-cols-4 grid-cols-1 800px:gap-4 gap-6">
                  {itemsdata.map((item) => {
                    return (
                      <div className="card shadow border" key={itemsdata.id}>
                        <img src={item.image} alt="" />
                        <div className="flex justify-between mt-3 mb-2 px-2">
                          <h5 className={`${styles.shop_name}`}>
                            {item.title}
                          </h5>
                          <span className={`${styles.productDiscountPrice}`}>
                            ${item.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-2">
                          <div className="text-xs">
                            <span>18 favorites</span>
                            <span className="block">12 views</span>
                          </div>
                          <div className="buttons mb-2">
                            <button className="border text-[#812c6f] shadow-sm text-sm rounded-[4px] px-2 py-1">
                              sold
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Items;
