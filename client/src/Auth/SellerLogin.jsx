import React, { useState } from "react";
import styles from "../styles/styles";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import image from "../assets/images/image11.svg";
const SellerLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/shop-dashboard");
  };
  return (
    <React.Fragment>
      <div className="registe flex justify-center 800px:mt-[100px] mt-[80px]">
        <div className="card 800px:w-[600px] w-[400px] bg-white shadow-lg px-4">
          <div className="logo flex justify-center mt-2">
            <img src={image} alt="" className="w-[100px]" />
          </div>
          <div className="text my-2">
            <h3 className="font-[700] text-[20px] mb-1">Sign in</h3>
            <h6 className=" text-[12px]">
              Login to your account and start making money
            </h6>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center flex-col">
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
            </div>
            <div className="already text-[11px] 800px:text-[15px] px-4 flex justify-between items-center py-2">
              <h5>
                Don’t have an account?
                <Link
                  to={"/register"}
                  className=" text-[#901E78] font-[500] cursor-pointer"
                >
                  Create one
                </Link>
              </h5>
              <h5 className=" cursor-pointer font-[500] text-[#901E78]">
                Forget password?
              </h5>
            </div>
            <div className="button py-2">
              <button className={`${styles.button} mx-auto`} type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SellerLogin;
