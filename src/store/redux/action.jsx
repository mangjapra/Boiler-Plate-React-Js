import axios from "axios";
import * as type from "./type";
import { BASE_URL_BOILER, URL_BOILER } from "../../config/api";

export const getListData = () => async (dispatch) => {
  const response = await axios.get(URL_BOILER + BASE_URL_BOILER.GET_LIST_DATA);

  if (response.status === 200 && response.statusText === "OK") {
    dispatch({
      type: type.GET_LIST_DATA,
      payload: response.data,
    });
  }
};
