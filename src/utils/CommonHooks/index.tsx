import { countryData } from "../Data";

export const GetUserCountry = (code: any) => {
  let authCountry:any = countryData.find((it) => it?.code == code);
  return authCountry;
};
