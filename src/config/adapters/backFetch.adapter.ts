import { AxiosAdapter } from "./http/axios.adapter";

export const backFetch = new AxiosAdapter({
  baseURL: "https://api-test.sesametime.com",
});
