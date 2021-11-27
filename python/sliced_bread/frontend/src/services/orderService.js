import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
};

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: headers,
});

export const getOrders = async () => {
  return await axiosInstance.get("order/");
};

const sendOrder = async (data) => {
  const response = await axiosInstance.post("order/", data);
  const confirmationOrderLink =
    "http://127.0.0.1:8000/" + "order/" + response.data["orderNumber"];
  return confirmationOrderLink;
};

export default sendOrder;
