"use client";

import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok)
          throw Error(`Fetching has failed: ${response.status}`);
        const data: T = await response.json();

        setError(null);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("Fetching has been aborted.");
          } else {
            setError(error.message);
          }
        }
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
}
