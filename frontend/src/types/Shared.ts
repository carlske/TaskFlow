export interface FormSuccess {
    onSuccess?: () => void
}
  

 type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface FetchOptions {
    method?: HttpMethod;
    headers?: HeadersInit;
    body?: any;
}