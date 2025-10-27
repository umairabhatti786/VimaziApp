import { URLS } from "./Urls";

export const getApiUrl= (endpoint:any) => {
    let url = URLS.BASE_URL + endpoint;
    return url;
  };