import axios from "axios";
 const instance=axios.create({
     baseURL:'http://localhost:5001/clone75/us-central1/api'  // API (Cloud Funtion ) URl..
 });
 export default instance;            