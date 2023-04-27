import React, { useState, useEffect } from "react";
// import SignBg from "../../assets/images/loginbg.jpg";
// import "./index.scss";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../../components/Navbar";
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
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Please Enter your Email")
    .matches(/@[^.]*\./, "Must match like: abc@mail.com"),
  phone: Yup.string()
    .required("Please Enter your phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
});

//web auth
function SignUp({ setIsLogin }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");

  const [isPlatformSupported, setisPlatformSupported] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [profileData, setProfileData] = useState(null);

  const handleRegister = () => {
    console.log("====<");
    getMakeCredentialsChallenge({ email, phone, name })
      .then((response) => {
        console.log("===>server cred:", response);
        const publicKey = preformatMakeCredReq(response);
        console.log("===>formatted server cred:", publicKey);
        return navigator.credentials.create({ publicKey });
      })
      .then((response) => {
        console.log("===>client sensor sign :", response);
        const makeCredResponse = publicKeyCredentialToJSON(response);
        console.log("===>formatted client sensor sign :", makeCredResponse);
        return sendWebAuthnResponse(makeCredResponse);
      })
      .then((response) => {
        console.log("===>server confirmation after register :", response);
        if (response.status === "ok") {
          setErrMsg("");
          setSuccessMsg("You can now try logging in");

          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            html: "Redirecting to Login page in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
              // Navigate("/login");
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        } else setErrMsg(response.message);
      })
      .catch((err) => {
        // registerFail({ email }).then(() => {
        //   if (err.response) setErrMsg(err.response.data);
        //   else console.log(err);
        // });
        Swal.fire({
          icon: "error",
          title: err.response.data,
        });
        // setErrMsg(err.response.data);
        console.log("error", err.message);
      });
  };

  useEffect(() => {
    isPlatformWebAuthnSupport().then((result) => {
      setisPlatformSupported(result);
    });

    //   return () => {};
  }, []);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmVisible] = useState(false);

  const isDisabled = Object.keys(errors).length > 0;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div
        className="sign-container"
        style={{ background: "yellow", height: "100vh" }}
      >
        <div className="sign__content">
          {/* <img src={SignBg} alt="sign image" className="sign__img" /> */}
          <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
            {/* {errMsg &&
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `${errMsg}`,
                })} */}
            {/* {successMsg && <div>{successMsg}</div>} */}
            <div>
              <h1 className="sign__title">
                <span>Welcome</span>
              </h1>
              <p className="sign__description">Please register to continue.</p>
            </div>
            <div>
              <div className="sign__inputs">
                <div>
                  <label htmlFor="email" className="sign__label">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    {...register("email")}
                    className="sign__input"
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

                <div>
                  <label htmlFor="name" className="sign__label">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name")}
                    className="sign__input"
                  />
                </div>
                {errors.name && (
                  <p
                    style={{
                      fontSize: 12,
                      color: "red",
                      fontWeight: "bold",
                      minHeight: "20px",
                    }}
                  >
                    {errors.name.message}
                  </p>
                )}

                <div>
                  <label htmlFor="phone" className="sign__label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Phone number"
                    {...register("phone")}
                    className="sign__input"
                  />
                </div>
                {errors.phone && (
                  <p
                    style={{
                      fontSize: 12,
                      color: "red",
                      fontWeight: "bold",
                      minHeight: "20px",
                    }}
                  >
                    {errors.phone.message}
                  </p>
                )}

                {/* <div>
                    <label htmlFor="password" className="sign__label">
                      Password
                    </label>
                    <div className="sign__box">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        {...register("password")}
                        className="sign__input"
                        id="input-pass"
                      />
                      <div
                        onClick={() => {
                          setIsPasswordVisible(!isPasswordVisible);
                        }}
                      >
                        {isPasswordVisible ? (
                          <AiOutlineEye className="sign__eye" />
                        ) : (
                          <AiOutlineEyeInvisible className="sign__eye" />
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
                      {errors.password.message}{" "}
                    </p>
                  )}
                  <div>
                    <label htmlFor="password" className="sign__label">
                      Confirm Password
                    </label>
                    <div className="sign__box">
                      <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...register("confirmpassword")}
                        className="sign__input"
                      />
                      <div
                        onClick={() => {
                          setIsConfirmVisible(!isConfirmPasswordVisible);
                        }}
                      >
                        {isConfirmPasswordVisible ? (
                          <AiOutlineEye className="sign__eye" id="input-icon" />
                        ) : (
                          <AiOutlineEyeInvisible className="sign__eye" />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.confirmpassword && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.confirmpassword.message}{" "}
                    </p>
                  )} */}
              </div>
              {/* <div className="sign__check">
              <input type="checkbox" className="sign__check-input" />
              <label htmlFor="" className="sign__check-label">
                Remember me
              </label>
            </div> */}
            </div>
            <div>
              <div className="sign__buttons">
                <button
                  className="sign__button"
                  disabled={isDisabled}
                  // onClick={(event) => {
                  //   console.log("done");
                  //   event.preventDefault();
                  //   Navigate("/login");
                  // }}
                  onClick={handleRegister}
                >
                  Sign Up
                </button>
                {/* <button className="sign__button sign__button-ghost">
                Sign Up
              </button> */}
              </div>
              <p className="sign__description">Already have a account?</p>
            </div>
          </form>
        </div>
      </div>
    </>
    // </Parallax>
  );
}
export default SignUp;
