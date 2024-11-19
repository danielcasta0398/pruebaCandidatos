import { AxiosAdapter } from "./http/axios.adapter";

export const backFetch = new AxiosAdapter({
  baseURL: "https://api-test.sesametime.com",
  headers: {
    Authorization: `Bearer cf3851069b6ad0c13f365cda737b71e349c2ee94a9203d07930c23009eaeafdc`,
  },
  // getToken: () => localStorage.getItem("token"),
});
