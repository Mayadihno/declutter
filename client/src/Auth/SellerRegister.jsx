import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import styles from "../styles/styles";
import image from "../assets/images/image11.svg";
import axios from "axios";
const SellerRegister = () => {
  const [avatar, setAvatar] = useState(null);
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [shopAddress, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("individual");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleFileChange = (e) => {
    const files = e.target.files[0];
    setAvatar(files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("avatar", avatar);
    formData.append("buisnessName", shopName);
    formData.append("buisnessType", accountType);
    formData.append("password", password);
    formData.append("confirmPassword", Cpassword);
    formData.append("address", shopAddress);
    formData.append("phone", phone);
    const response = await axios
      .post("/auth/signup/local/vendor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          API_KEY:
            "8e614b88a3d494eadbc9aefa018f4e2b0cfd3b508616116771b6c9d474fea61904bf0ad54664",
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });

    console.log(response);
  };
  return (
    <React.Fragment>
      <div className="registe flex justify-center 800px:my-[100px] mt-[80px]">
        <div className="card 800px:w-[600px] w-[400px] bg-white shadow-lg px-4">
          <div className="logo flex justify-center mt-2">
            <img src={image} alt="" className="w-[100px]" />
          </div>
          <div className="text my-2">
            <h3 className="font-[700] text-[20px] mb-1">Sign up</h3>
            <h6 className=" text-[12px]">create your account in seconds</h6>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center flex-col">
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Shop Name / Display Name</h5>
                  <TextField
                    type="text"
                    required
                    placeholder="John Doe"
                    value={shopName}
                    size="small"
                    onChange={(e) => setShopName(e.target.value)}
                  />
                </FormControl>
              </div>
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Shop Address</h5>
                  <TextField
                    type="text"
                    required
                    size="small"
                    placeholder="No 123, Liverpool, UK"
                    value={shopAddress}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </div>
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Email Address</h5>
                  <TextField
                    type="email"
                    size="small"
                    required
                    placeholder="John@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </div>
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Phone Number</h5>
                  <PhoneInput
                    onlyCountries={["gb", "fr", "us", "ng", "au", "ca"]}
                    country="gb"
                    enableAreaCodes={true}
                    preserveOrder={["onlyCountries", "preferredCountries"]}
                    value={phone}
                    onChange={(value) => setPhone("+" + value)}
                    inputClass="!w-[350px] !py-5"
                  />
                </FormControl>
              </div>
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Account type</h5>
                  <Select
                    onChange={(e) => setAccountType(e.target.value)}
                    value={accountType}
                    required
                    size="small"
                  >
                    <MenuItem value={"individual"}>Individual</MenuItem>
                    <MenuItem value={"business"}>Business</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Password</h5>
                  <TextField
                    id="filled-start-adornment"
                    type={showPassword ? "text" : "password"}
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          onClick={handleClickShowPassword}
                          position="end"
                          className=" cursor-pointer"
                        >
                          {showPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </FormControl>
              </div>
              <div className="shopName">
                <FormControl sx={{ m: 1, minWidth: 350 }}>
                  <h5 className="mb-1">Confirm Password</h5>
                  <TextField
                    id="filled-start-adornment"
                    type={showPassword ? "text" : "password"}
                    value={Cpassword}
                    size="small"
                    onChange={(e) => setCPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          onClick={handleClickShowPassword}
                          position="end"
                          className=" cursor-pointer"
                        >
                          {showPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </FormControl>
                {error && (
                  <h6 className=" text-red-700 text-[12px] ml-3">
                    Password and Confirm Password did not Match
                  </h6>
                )}
              </div>
              <div className="py-4 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <FaRegCircleUser className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-1 flex cursor-pointer items-center justify-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload Shop Logo/Image</span>
                  <input
                    type="file"
                    name="file"
                    required
                    id="file-input"
                    accept=".jpeg,.png,.jpg"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div className="checkBox flex items-center">
              <input type="checkbox" name="" id="" />
              <h6 className=" 800px:text-[11px] text-[8px] ml-2">
                I hereby confirm that I have read and I agree to the Declutter
                seller contract, Declutter codes, policies and guidelines and
                <span
                  style={{
                    color: "#901E78",
                    fontSize: "10px",
                    marginLeft: "2px",
                    marginRight: "2px",
                    cursor: "pointer",
                  }}
                >
                  Privacy Notice
                </span>
                and
                <span
                  style={{
                    color: "#901E78",
                    fontSize: "10px",
                    marginLeft: "2px",
                    marginRight: "2px",
                    cursor: "pointer",
                  }}
                >
                  Cookie Notice
                </span>
                referenced therein.
              </h6>
            </div>
            <div className="button py-2">
              <button className={`${styles.button} mx-auto`} type="submit">
                Sign up
              </button>
            </div>
          </form>
          <div className="already py-3">
            <h5>
              Already a member?
              <Link
                to={"/seller-login"}
                className=" text-[#901E78] font-[500] cursor-pointer"
              >
                Login
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SellerRegister;
