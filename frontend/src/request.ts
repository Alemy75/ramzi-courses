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
    headers,
    params,
    data,
    withCredentials: true,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken"
  });
