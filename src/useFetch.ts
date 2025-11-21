import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      }
    })();
  }, [url]);

  return { data };
}
