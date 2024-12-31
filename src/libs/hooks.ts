import { useState, useEffect } from "react";

export const useFetch = <T>(uri: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(uri, { signal });
        if (!response.ok) {
          throw Error(`Fetching has failed.`);
        }
        const data: T = await response.json();

        setError(null);
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name == "AbortError") {
            console.log(`Fetching has been aborted.`);
          } else {
            setError(error.message);
            setLoading(false);
          }
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [uri]);

  return { data, loading, error };
};
