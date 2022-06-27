import axios from "axios";
import {
  RequestBodyType,
  ResponseBodyType,
  apiMethod,
  ApiResponseType,
} from "../@types/global";
import { SERVER_URL } from "../config.keys";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
});

const makeRequest = async (
  url: string,
  payload: RequestBodyType,
  method: apiMethod
): Promise<ResponseBodyType> => {
  let res: ApiResponseType = await axiosInstance[method](url, payload);
  return res.data;
};

export default makeRequest;
