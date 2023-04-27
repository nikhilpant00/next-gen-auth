// import React, {useState, useEffect} from 'react'
// import './index.scss';
// import '../Login/index.scss'
// import Lottie from "react-lottie";

// import logo from '../../assets/images/msoni52_A_creative_and_visually_appealing_logo_design_for_a_Voi_d667ecc5-d9d5-45f3-9b3c-1d8ea7539cb8.png';
// import bot from '../../assets/lottieFiles/bot.json';
// import medal from '../../assets/lottieFiles/medal.json'

// function Landing({isLogin}) {
//     const defaultOptions1 = {
//       loop: true,
//       autoplay: true,
//       animationData: bot,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice",
//       },
//     };
//     const defaultOptions2 = {
//       loop: true,
//       autoplay: true,
//       animationData: medal,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice",
//       },
//     };

//   return (
//     <div className="Landing-page" style={{}}>
//       <div style={{ height: "85vh" }}>
//         <div
//           style={{
//             height: "10vh",
//             minHeight: "80px",
//             paddingTop: "10px",
//             textAlign: "center",
//             position: "fixed",
//             top: "0",
//             left: "0",
//             right: "0",
//             backgroundColor: "#000000f0",
//             zIndex: "1",
//           }}
//         >
//           <h3
//             style={{
//               fontFamily: "'Orbitron', sans-serif",
//               fontSize: "2.5rem",
//               color: "white",
//             }}
//           >
//             Next Gen Auth
//           </h3>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             height: "75vh",
//             minHeight: "",
//             marginTop: "15vh",
//           }}
//         >
//           <div
//             style={{
//               height: "100%",
//               width: "60%",
//               textAlign: "center",
//             }}
//           >
//             <h3 style={{ fontSize: "2.5rem", color: "#1EAAFC" }}>
//               FEATURES & BENEFITS
//             </h3>
//             <p style={{ fontSize: "12px", marginBottom: "12px" }}>
//               Lorem ipsum is placeholder text commonly used in the graphic,
//               print, and publishing industries for previewing layouts and visual
//               mockups and publishing industries for previewing layouts and
//               visual mockups.
//             </p>
//             <div
//               style={{
//                 display: "grid",
//                 height: "maxContent",
//                 gridTemplateColumns: "1fr 1fr 1fr",
//                 gridAutoRows: "minmax(50%, auto)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span
//                   style={{
//                     border: "4px solid #e8e6e6",
//                     borderRadius: "50%",
//                     display: "inlineBlock",
//                     padding: "8px",
//                     marginBottom: "1.2rem",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <Lottie
//                     options={defaultOptions1}
//                     height={80}
//                     width=
//                   style={{
//                     fontSize: "10px",
//                     margin: "0 20px",
//                     textAlign: "center",
//                     marginTop: ".6rem",
//                   }}
//                 >
//                   Lorem ipsum is placeholder text commonly used in the graphic,
//                   print, and publishing industries for previewing layouts and
//                   visual mockups.
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span
//                   style={{
//                     border: "4px solid #e8e6e6",
//                     borderRadius: "50%",
//                     display: "inlineBlock",
//                     padding: "8px",
//                     marginBottom: "1.2rem",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <Lottie
//                     options={defaultOptions2}
//                     height={80}
//                     width=
//                   style={{
//                     fontSize: "10px",
//                     margin: "0 20px",
//                     textAlign: "center",
//                     marginTop: ".6rem",
//                   }}
//                 >
//                   Lorem ipsum is placeholder text commonly used in the graphic,
//                   print, and publishing industries for previewing layouts and
//                   visual mockups.
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span
//                   style={{
//                     border: "4px solid #e8e6e6",
//                     borderRadius: "50%",
//                     display: "inlineBlock",
//                     padding: "8px",
//                     marginBottom: "1.2rem",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <Lottie
//                     options={defaultOptions1}
//                     height={80}
//                     width=
//                   style={{
//                     fontSize: "10px",
//                     margin: "0 20px",
//                     textAlign: "center",
//                     marginTop: ".6rem",
//                   }}
//                 >
//                   Lorem ipsum is placeholder text commonly used in the graphic,
//                   print, and publishing industries for previewing layouts and
//                   visual mockups.
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span
//                   style={{
//                     border: "4px solid #e8e6e6",
//                     borderRadius: "50%",
//                     display: "inlineBlock",
//                     padding: "8px",
//                     marginBottom: "1.2rem",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <Lottie
//                     options={defaultOptions2}
//                     height={80}
//                     width=
//                   style={{
//                     fontSize: "10px",
//                     margin: "0 20px",
//                     textAlign: "center",
//                     marginTop: ".6rem",
//                   }}
//                 >
//                   Lorem ipsum is placeholder text commonly used in the graphic,
//                   print, and publishing industries for previewing layouts and
//                   visual mockups.
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span
//                   style={{
//                     border: "4px solid #e8e6e6",
//                     borderRadius: "50%",
//                     display: "inlineBlock",
//                     padding: "8px",
//                     marginBottom: "1.2rem",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <Lottie
//                     options={defaultOptions1}
//                     height={80}
//                     width=
//                   style={{
//                     fontSize: "10px",
//                     margin: "0 20px",
//                     textAlign: "center",
//                     marginTop: ".6rem",
//                   }}
//                 >
//                   Lorem ipsum is placeholder text commonly used in the graphic,
//                   print, and publishing industries for previewing layouts and
//                   visual mockups.
//                 </p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span
//                   style={{
//                     border: "4px solid #e8e6e6",
//                     borderRadius: "50%",
//                     display: "inlineBlock",
//                     padding: "8px",
//                     marginBottom: "1.2rem",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <Lottie
//                     options={defaultOptions2}
//                     height={80}
//                     width=
//                   style={{
//                     fontSize: "10px",
//                     margin: "0 20px",
//                     textAlign: "center",
//                     marginTop: ".6rem",
//                   }}
//                 >
//                   Lorem ipsum is placeholder text commonly used in the graphic,
//                   print, and publishing industries for previewing layouts and
//                   visual mockups.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div style={{ height: "100%", width: "40%" }}>
//             <div
//               style={{
//                 height: "90%",
//                 textAlign: "center",
//                 marginTop: "3rem",
//               }}
//             >
//               <img
//                 src={logo}
//                 alt="logo"
//                 style={{ height: "100%", borderRadius: "5px" }}
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             height: "15vh",
//             minHeight: "130px",
//             textAlign: "center",
//           }}
//         >
//           <button
//             className="button-54"
//             style={{ marginTop: "8px", padding: "15px" }}
//           >
//             <span style={{color:'white'}}>Get Started</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing

import React from "react";
import Lottie from "react-lottie";

import bot from "../../assets/lottieFiles/bot.json";
import logo from "../../assets/images/msoni52_A_creative_and_visually_appealing_logo_design_for_a_Voi_d667ecc5-d9d5-45f3-9b3c-1d8ea7539cb8.png";

function Landing() {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: bot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="Landing-page" style={{ backgroundColor: "#131621" }}>
        <div style={{ height: "100vh" }}>
          <div
            style={{
              height: "10vh",
              minHeight: "80px",
              paddingTop: "10px",
              textAlign: "center",
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              backgroundColor: "#000000f0",
              zIndex: "1",
            }}
          >
            <h3
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "2.5rem",
                color: "white",
              }}
            >
              Next Gen Auth
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              height: "75vh",
              minHeight: "",
              // marginTop: "15vh",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "60%",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "2.5rem", color: "#1EAAFC" }}>
                FEATURES & BENEFITS
              </h3>
              <p style={{ fontSize: "12px", marginBottom: "12px" }}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups and publishing industries for previewing layouts
                and visual mockups.
              </p>
              <div
                style={{
                  display: "grid",
                  height: "maxContent",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridAutoRows: "minmax(50%, auto)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      border: "4px solid #e8e6e6",
                      borderRadius: "50%",
                      display: "inlineBlock",
                      padding: "8px",
                      marginBottom: "1.2rem",
                      marginTop: "16px",
                    }}
                  >
                    <Lottie
                      options={defaultOptions2}
                      height={80}
                      width={80}
                      style={{
                        fontSize: "10px",
                        margin: "0 20px",
                        textAlign: "center",
                        marginTop: ".6rem",
                      }}
                    />
                  </span>
                  <h4>High Quality Details</h4>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0 20px",
                      textAlign: "center",
                      marginTop: ".6rem",
                    }}
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      border: "4px solid #e8e6e6",
                      borderRadius: "50%",
                      display: "inlineBlock",
                      padding: "8px",
                      marginBottom: "1.2rem",
                      marginTop: "16px",
                    }}
                  ></span>
                  <h4>High Quality Details</h4>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0 20px",
                      textAlign: "center",
                      marginTop: ".6rem",
                    }}
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      border: "4px solid #e8e6e6",
                      borderRadius: "50%",
                      display: "inlineBlock",
                      padding: "8px",
                      marginBottom: "1.2rem",
                      marginTop: "16px",
                    }}
                  ></span>
                  <h4>High Quality Details</h4>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0 20px",
                      textAlign: "center",
                      marginTop: ".6rem",
                    }}
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      border: "4px solid #e8e6e6",
                      borderRadius: "50%",
                      display: "inlineBlock",
                      padding: "8px",
                      marginBottom: "1.2rem",
                      marginTop: "16px",
                    }}
                  ></span>
                  <h4>High Quality Details</h4>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0 20px",
                      textAlign: "center",
                      marginTop: ".6rem",
                    }}
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      border: "4px solid #e8e6e6",
                      borderRadius: "50%",
                      display: "inlineBlock",
                      padding: "8px",
                      marginBottom: "1.2rem",
                      marginTop: "16px",
                    }}
                  ></span>
                  <h4>High Quality Details</h4>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0 20px",
                      textAlign: "center",
                      marginTop: ".6rem",
                    }}
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      border: "4px solid #e8e6e6",
                      borderRadius: "50%",
                      display: "inlineBlock",
                      padding: "8px",
                      marginBottom: "1.2rem",
                      marginTop: "16px",
                    }}
                  ></span>
                  <h4>High Quality Details</h4>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0 20px",
                      textAlign: "center",
                      marginTop: ".6rem",
                    }}
                  >
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ height: "100%", width: "40%" }}>
              <div
                style={{
                  height: "90%",
                  textAlign: "center",
                  marginTop: "3rem",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "100%", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              height: "15vh",
              minHeight: "130px",
              textAlign: "center",
            }}
          >
            <button
              className="button-54"
              style={{ marginTop: "8px", padding: "15px" }}
            >
              <span style={{ color: "white" }}>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
