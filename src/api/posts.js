import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:5174",
// });


const axiosBaseURL = axios.create({
  baseURL:'http://localhost:5174/'
});
export default axiosBaseURL