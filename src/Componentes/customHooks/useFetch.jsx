import { useEffect, useState, useCallback } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(() => {
    try {
      fetch(url, options)
        .then((res) => res?.json())
        .then((data) => setData(data))
        .then(() => setLoading(false));
    } catch (error) {
      setError(error);
    }
  }, [url, options]);

  useEffect(() => {
    getData();
  }, [url]); // eslint-disable-line

  return { data, loading, error };
}
