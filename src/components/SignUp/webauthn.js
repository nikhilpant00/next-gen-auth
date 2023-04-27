import axios from "axios";
axios.defaults.withCredentials = true;

function getMakeCredentialsChallenge(formBody) {
  return axios
    .post("http://localhost:5000/webauthn/register", formBody)
    .then((response) => {
      if (response.data.status !== "ok")
        throw new Error(
          `Server responed with error. The message is: ${response.message}`
        );
      return response.data;
    });
}

function sendWebAuthnResponse(body) {
  return axios
    .post("http://localhost:5000/webauthn/response", body)
    .then((response) => {
      if (response.data.status !== "ok")
        throw new Error(
          `Server responed with error. The message is: ${response.message}`
        );
      return response.data;
    });
}

function getGetAssertionChallenge(formBody) {
  console.log("we are in block of get assertion challenge");
  return axios
    .post("http://localhost:5000/webauthn/login", formBody)
    .then((response) => {
      if (response.data.status !== "ok")
        throw new Error(
          `Server responed with error. The message is: ${response.message}`
        );
      return response.data;
    });
}

function getProfile() {
  return axios
    .get("http://localhost:5000/webauthn/profile")
    .then((response) => response.data);
}

function logout() {
  console.log("we are here in logout frontend block");
  return axios
    .get("http://localhost:5000/webauthn/profile")
    .then((response) => response.data);
}
function registerFail(body) {
  return axios
    .post("http://localhost:5000/webauthn/registerfail", body)
    .then((response) => response.data);
}
export {
  getGetAssertionChallenge,
  getMakeCredentialsChallenge,
  sendWebAuthnResponse,
  getProfile,
  logout,
  registerFail,
};
