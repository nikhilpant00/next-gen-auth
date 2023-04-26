import React, { useState, useEffect } from "react";
// import "./index.scss";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import { Parallax } from "@react-spring/parallax";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getGetAssertionChallenge,
  getMakeCredentialsChallenge,
  sendWebAuthnResponse,
  getProfile,
  logout,
  registerFail,
} from "./webauthn";
import {
  isPlatformWebAuthnSupport,
  preformatGetAssertReq,
  preformatMakeCredReq,
  publicKeyCredentialToJSON,
} from "../helpers";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Please Enter your Email")
    .matches(/@[^.]*\./, "Must match like: abc@mail.com")
    .email("Invalid email address")
    .required("Email is required"),
  
});

//web auth
function Login({ setIsLogin }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const email = watch("email");
  // const Navigate = useNavigate();

  const [isPlatformSupported, setisPlatformSupported] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [profileData, setProfileData] = useState(null);

  

  const handleLogin = () => {
    console.log("loginclicked");
    getGetAssertionChallenge({ email })
      .then((response) => {
        const publicKey = preformatGetAssertReq(response);
        return navigator.credentials.get({ publicKey });
      })
      .then((response) => {
        console.log("inthisresponseblock");
        console.log("inthisresponseblockresponse", response);
        let getAssertionResponse = publicKeyCredentialToJSON(response);
        return sendWebAuthnResponse(getAssertionResponse);
      })
      .then((response) => {
        console.log("in the final block of frontend");
        if (response.status === "ok") {
          localStorage.setItem("loggedIn", true);

          setIsLogin(true);
          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              clearInterval(timerInterval);
              // Navigate("/");
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
          setSuccessMsg("");
          setErrMsg("");
        } else {
          setSuccessMsg("");
          setErrMsg(response.message);
        }
      })
      .catch((err) => {
        if (err.response) setErrMsg(err.response.data);
        else console.log(err);
      });
  };



  useEffect(() => {
    isPlatformWebAuthnSupport().then((result) => {
      setisPlatformSupported(result);
    });

  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const isDisabled = Object.keys(errors).length > 0;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    // <Parall
        <div className="login-container" style={{background:'blue', height:'100vh'}}>
          <div className="login__content">
            {/* <img src={LoginBg} alt="login image" className="login__img" /> */}
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
              {errMsg && <div>{errMsg}</div>}
              {successMsg && <div>{successMsg}</div>}
              <div>
                <h1 className="login__title">
                  <span>Welcome</span>
                </h1>
                <p className="login__description">Please login to continue.</p>
              </div>
              <div>
                <div className="login__inputs">
                  <div>
                    <label htmlFor="email" className="login__label">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      {...register("email")}
                      className="login__input"
                    />
                  </div>
                  {errors.email && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                  {/* <div>
                    <label htmlFor="password" className="login__label">
                      Password
                    </label>
                    <div className="login__box">
                      <input
                        type={isVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        {...register("password")}
                        className="login__input"
                        id="input-pass"
                      />
                      <div
                        onClick={() => {
                          setIsVisible(!isVisible);
                        }}
                      >
                        {isVisible ? (
                          <AiOutlineEye
                            className="login__eye"
                            id="input-icon"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="login__eye"
                            id="input-icon"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.password && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.password.message}
                    </p>
                  )} */}
                </div>
                {/* <div className="login__check">
                  <input type="checkbox" className="login__check-input" />
                  <label htmlFor="remember" className="login__check-label">
                    Remember me
                  </label>
                </div> */}
              </div>
              <div>
                <div className="login__buttons">
                  <button
                    className="login__button"
                    disabled={isDisabled}
                    // onClick={(event) => {
                    //   setIsLogin(true);
                    //   console.log("done");
                    //   event.preventDefault();
                    //   Navigate("/LoggedIn");
                    // }}
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  {/* <button className="login__button login__button-ghost">
                Sign Up
              </button> */}
                </div>
                {/* <a href="#" className="login__forgot" style={{ color: "red" }}>
                  Forgot Password?
                </a> */}
                <p className="login__description">Don't have an account?</p>
                {/* <Link to="/signUp" className="login__forgot">
                  Sign Up Here
                </Link> */}
              </div>
            </form>
          </div>
        </div>
 
  );
}
export default Login;
