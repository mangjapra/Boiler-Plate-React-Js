import * as type from "./type";

const initialState = {
  listdata: null,
};

export const reducerGlobal = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_LIST_DATA:
      return {
        ...state,
        listdata: action.payload,
      };
    default:
      return state;
  }
};
