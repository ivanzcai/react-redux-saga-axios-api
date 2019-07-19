import axios from "axios";
export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchData2 = async () => {
  try {
    const response = await fetch("http://httpbin.org/delay/2000");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchData3 = () => {
  return axios
    .get("http://httpbin.org/delay/1000", {
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};
