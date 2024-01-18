import React from "react";
import ProfileSideBar from "./ProfileSideBar";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="mx-auto max-w-[95%]">
        <div className="flex w-full justify-between py-10">
          <div className=" sticky top-10 shadow-lg overflow-y-scroll h-[90vh] left-0 z-10 w-[25%] rounded-[4px]">
            <ProfileSideBar />
          </div>
          <div className="800px:w-[72%] 800px:mt-['unset'] rounded-[4px]">
            <ProfileContent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
