/* eslint-disable react/prop-types */
import React from "react";

const PhotoUpload = ({ addedPhoto }) => {
  return (
    <React.Fragment>
      <div className="mt-4">
        {addedPhoto?.length > 0 && <h2 className=" text-xl mt-4">Photos</h2>}
        <div className="mt-2 gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {addedPhoto &&
            addedPhoto.map((i) => (
              <img
                src={URL.createObjectURL(i)}
                key={i}
                alt=""
                className=" h-[120px] w-[120px] object-cover m-2"
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoUpload;
