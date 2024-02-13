import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-147-76-74.us-east-2.compute.amazonaws.com:8080",
  headers: { "ngrok-skip-browser-warning": "true" },
});
