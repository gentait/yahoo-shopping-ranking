import fetchJsonp from "fetch-jsonp";
import qs from "qs";
import { replace } from "connected-react-router";

const API_URL =
  "https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking";
const APP_ID = "dj00aiZpPVN2cFVucTBZT0QyQSZzPWNvbnN1bWVyc2VjcmV0Jng9NjM-";

//リクエスト開始
const startRequest = (category: any) => ({
  type: "START_REQUEST" as "START_REQUEST",
  payload: { category }
});
//レスポンス受信
const receiveData = (category: any, error: Error | null, response?: any) => ({
  type: "RECEIVE_DATA" as "RECEIVE_DATA",
  payload: { category, error, response }
});
//リクエスト完了
const finishRequest = (category: any) => ({
  type: "FINISH_REQUEST" as "FINISH_REQUEST",
  payload: { category }
});

export type RankigActionTypes =
  | ReturnType<typeof startRequest>
  | ReturnType<typeof receiveData>
  | ReturnType<typeof finishRequest>;

export const fetchRankig = (categoryId: string) => {
  return async (dispatch: Function, getState: Function) => {
    const categories = getState().shopping.categories;
    const category = categories.find(
      (category: any) => category.id === categoryId
    );
    if (typeof category === "undefined") {
      dispatch(replace("/"));
      return;
    }
    dispatch(startRequest(category));
    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId
    });

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`);
      const data = await response.json();
      dispatch(receiveData(category, null, data));
    } catch (err) {
      dispatch(receiveData(category, err));
    }
    dispatch(finishRequest(category));
  };
};
