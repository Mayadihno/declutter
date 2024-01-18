import React, { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { TbCameraPlus } from "react-icons/tb";
import { MdOutlineErrorOutline } from "react-icons/md";
import styles from "../../styles/styles";
import PhotoUpload from "./PhotoUpload";

const ProductCreate = () => {
  const [category, setCategory] = useState("jersey");
  const [price, setPrice] = useState();
  const [title, setTitle] = useState("");
  const [stock, setStock] = useState(1);
  const [region, setRegion] = useState("");
  const [processTime, setProcessTime] = useState("");
  const [description, setDescription] = useState("");
  const [shipMethod, setShipMethod] = useState("");
  const [image, setImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData();
    image.forEach((image) => {
      newForm.append("image", image);
    });
    const formData = {
      price,
      category,
      description,
      title,
      image,
      region,
      shipMethod,
      processTime,
      stock,
    };
    console.log(formData);
  };
  const handleUploadPhotoFromFolder = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setImage((prevImages) => [...prevImages, ...files]);
  };
  return (
    <React.Fragment>
      <div className="mb-10">
        <h4 className=" font-bold mb-4 text-[22px]">Upload items</h4>
        <p>
          Add up to 5 images.
          <span className=" underline text-[#901E78] ml-1">
            See upload tips
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="image ">
            <div className="border-2 border-dashed 800px:w-[1000px] w-[350px] h-52 relative bg-[#C5C5C5] mt-2">
              <div className=" absolute top-[35%] left-[50%] -translate-x-[45%]">
                <label
                  htmlFor="file-input"
                  className="flex cursor-pointer items-center justify-center px-1 text-[#901E78] py-2 border rounded-md shadow-sm text-sm font-medium border-[#901E78] mb-2"
                >
                  <input
                    type="file"
                    name="file"
                    id="file-input"
                    multiple
                    accept=".jpeg,.png,.jpg"
                    className="sr-only"
                    onChange={handleUploadPhotoFromFolder}
                  />
                  <span className="flex items-center">
                    Upload Photos
                    <TbCameraPlus size={"20px"} className="ml-1" />
                    <span className=" text-red-500">*</span>
                  </span>
                </label>
                <p className="block 800px:text-[16px] text-[12px]">
                  Drop your file here or click to upload
                </p>
              </div>
            </div>
            <div className="text-end text-[12px] mt-1">
              <span className="flex items-center justify-end">
                <MdOutlineErrorOutline size={"15px"} className="mr-1" />
                Maximum file size: 10 MB
              </span>
            </div>
          </div>
          <div className="selectedImage">
            <PhotoUpload addedPhoto={image} />
          </div>
          <div className="mt-3 800px:flex 800px:justify-between">
            <div className="py-2">
              <span className="block mb-1">
                Product Tittle <span className=" text-red-500">*</span>
              </span>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Brown chinos trouser"
                className=" 800px:w-[300px] w-[350px] "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
              />
            </div>
            <div className="py-2">
              <span className="block mb-1">
                Product price <span className=" text-red-500">*</span>
              </span>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                placeholder="$0.00"
                className=" 800px:w-[250px] w-[350px] "
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
              />
            </div>
            <div className="py-2">
              <span className="block mb-1">
                Product Category <span className=" text-red-500">*</span>
              </span>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
                className=" 800px:w-[250px] w-[350px] "
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
              >
                <MenuItem value={"aso ebi"}>Aso ebi</MenuItem>
                <MenuItem value={"jersey"}>Jersey</MenuItem>
                <MenuItem value={"aso wedding"}>Aso wedding</MenuItem>
              </Select>
            </div>
          </div>
          <div className="new 800px:flex 800px:justify-between 800px:pt-6">
            <div className="py-2">
              <span className="block mb-1">
                Processing Time <span className=" text-red-500">*</span>
              </span>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={processTime}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
                label="Category"
                onChange={(e) => setProcessTime(e.target.value)}
                className=" 800px:w-[400px] w-[350px] "
              >
                <MenuItem value={"0-2"}>0 - 2 Bussiness Days</MenuItem>
                <MenuItem value={"3-5"}>3 - 5 Bussiness Days</MenuItem>
                <MenuItem value={"7-10"}>7 - 10 Bussiness Days</MenuItem>
                <MenuItem value={"10-15"}>10 - 15 Bussiness Days</MenuItem>
                <MenuItem value={"10-15"}>15 - 25 Bussiness Days</MenuItem>
                <MenuItem value={"25-30"}>25 - 30 Bussiness Days</MenuItem>
              </Select>
            </div>
            <div className="py-2">
              <span className="block mb-1">Shipping Method:</span>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={shipMethod}
                label="Category"
                onChange={(e) => setShipMethod(e.target.value)}
                className=" 800px:w-[400px] w-[350px] "
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
              >
                <MenuItem value={"local"}>Local Delivery</MenuItem>
                <MenuItem value={"express"}>Express Delivery</MenuItem>
                <MenuItem value={"standard"}>Standard Delivery</MenuItem>
              </Select>
            </div>
          </div>
          <div className="800px:flex 800px:justify-between 800px:pt-6">
            <div className="py-2">
              <span className="block mb-1">
                Product Quality<span className=" text-red-500">*</span>
              </span>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                placeholder="2"
                className=" 800px:w-[400px] w-[350px] "
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
              />
            </div>
            <div className="py-2">
              <span className="block mb-1">
                Region of Shipment<span className=" text-red-500">*</span>
              </span>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                placeholder="Block 23, Mercryside, Liverpool, England"
                className=" 800px:w-[400px] w-[350px] "
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#901E78",
                    },
                    "&:hover fieldset": {
                      borderColor: "#901E78",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="mt-2">
            <span className="block mb-1">
              Product Description<span className=" text-red-500">*</span>
            </span>
            <textarea
              cols={80}
              rows={10}
              placeholder="e.g Worn only twice, extra large cloth, nike brand etc"
              className={`${styles.input} !border-[2px] focus:!border-[#901E78] focus:!border-[3px]`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-4 mr-4">
            <button
              type="submit"
              className=" bg-[#901E78] px-4 py-2 text-white rounded-[4px] hover:bg-[#9a3e86]"
            >
              Upload item
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProductCreate;
