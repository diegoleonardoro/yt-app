import axios from "axios";

const KEY = "AIzaSyDUHkxzKJ4JyWh00DI0mj69roZA_O0hFJg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
