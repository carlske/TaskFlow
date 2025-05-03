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

    const executeFetch = async (customOptions?: FetchOptions) => {
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
                body: JSON.stringify(customOptions?.body || options.body),
            });


            if (!response.ok) throw new Error(`Error: ${response.statusText}`);

            const result = await response.json();
            setData(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error("Unknown error occurred"));
            }
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, executeFetch };
}


export default useFetch;
