import { useState } from "react";


export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
    method?: HttpMethod;
    headers?: HeadersInit;
    body?: any;
}

export function useFetch<T = unknown>(
    url: string,
    options: FetchOptions = { method: "GET" }
  ) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
  
    const executeFetch = async (customOptions?: FetchOptions): Promise<T | null> => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch(url, {
          method: customOptions?.method || options.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
            ...customOptions?.headers,
          },
          body: customOptions?.body
            ? JSON.stringify(customOptions.body)
            : options.body
            ? JSON.stringify(options.body)
            : undefined,
        });
  
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  
        const result = await response.json();
        setData(result);
        return result;
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        return null;
      } finally {
        setLoading(false);
      }
    };
  
    return { data, loading, error, executeFetch };
  }
  


export default useFetch;
