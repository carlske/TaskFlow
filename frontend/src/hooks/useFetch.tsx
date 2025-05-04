import { useState } from "react";
import { FetchOptions } from "../types/Shared";


export function useFetch<T = unknown>(
    url: string,
    options: FetchOptions = { method: "GET" }
) {
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
            return result;
        } catch (e) {
            setError(e instanceof Error ? e : new Error("Unknown error"));
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, executeFetch };
}



export default useFetch;
