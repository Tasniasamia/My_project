import { data } from "autoprefixer";
import { get, patchForm, post, postForm } from "./api";
export const postRegister=(data)=>post('/user/registration',data);
export const sendOtp=(data)=>post('/user/send-otp',data);
export const verifyOTP=(data)=>post('/user/send-otp',data);
export const postResetPassword=(data)=>post('/user/reset-password',data);
export const postLogin=(data)=>post('/user/login',data);
export const findUser=(data)=>get('/user/find',data);
export const postVerifyOtp = (data) => post("/user/verify-otp", data);
export const fetchUser=(data)=>get('/user',data);
export const updateUser=(data)=>patchForm('/user',data);
export const updatePassword=(data)=>post('/user/password',data);
export const postRide=(data)=>post('/ride/request',data);
export const fetchVehicleCategories=(data)=>get('/vehicle/elements',data);
export const vehicleDetails=(data)=>get('/vehicle',data);
export const postVehicle=(data)=>postForm('/vehicle',data);
export const patchVehicle=(data)=>patchForm('/vehicle',data);

// for Car2Go other
export const fetchSinglePage=(data)=>get('/page',data)

