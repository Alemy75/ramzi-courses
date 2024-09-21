import axios, { type AxiosRequestConfig } from "axios";

export const request = <T = any, D = any>({
  url = "/",
  method = "GET",
  headers = {},
  params = {},
  data
}: AxiosRequestConfig<D>) =>
  axios<T>({
    url,
    method,
    params,
    data,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      ...headers
    }
  });
