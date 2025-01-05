import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6a0cf99e90df4e6bb1dfd140307f2c5e",
  },
});
