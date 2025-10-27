import { getApiUrl } from "../config";
import { URLS } from "../Urls";

export const ApiServices = {
  Register: async (params: any, callback: any) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const config = {
      method: "POST",
      headers,
      body: params.raw,
      redirect: "follow" as const,
    };
    try {
      fetch(getApiUrl(URLS.REGISTER), config)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },

  Login: async (params: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const config = {
      method: "POST",
      headers: myHeaders,
      body: params.raw,
      redirect: "follow" as const,
    };
    console.log("icdidhic",getApiUrl(URLS.LOGIN),params)
    try {
      fetch(getApiUrl(URLS.LOGIN), config)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },

  GetProfile: async (token: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log("tocdcdcken", token);
    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.USER), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },
  Logout: async (token: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log("tocdcdcken", token);
    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.LOGOUT), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },

  AddRecipients: async (params: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${params?.token}`);
    console.log("params", params);

    const config = {
      method: "POST",
      headers: myHeaders,
      body: params.raw,
      redirect: "follow" as const,
    };
    try {
      fetch(getApiUrl(URLS.RECIPIENTS), config)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },

  CreateTransactions: async (params: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${params?.token}`);
    console.log("params", params);

    const config = {
      method: "POST",
      headers: myHeaders,
      body: params.raw,
      redirect: "follow" as const,
    };
    try {
      fetch(getApiUrl(URLS.TRANSACTIONS), config)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },

  GetRecipients: async (token: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const config = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as const,
    };
    try {
      fetch(getApiUrl(URLS.RECIPIENTS), config)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },


   GetTransactions: async (token: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const config = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as const,
    };
    console.log("token",token)
    try {
      fetch(getApiUrl(URLS.TRANSACTIONS), config)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },
  GetExchangeRate: async (params: any, callback: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${params?.token}`);
    console.log("params", params);

    const config = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as const,
    };
    try {
      fetch(
        getApiUrl(
          URLS.EXCHANGE_RATE + `?from=${params?.from}&to=${params?.to}`
        ),
        config
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error };
    }
  },
};
