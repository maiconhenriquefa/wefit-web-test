import axios from "axios";
import { useEffect, useState } from "react";
import addDelay from "../shared/functions/addDelay";

const BASE_URL = "http://localhost:3000";

export function useFetch<T = unknown>(path: string) {
  const [data, setData] = useState<T | null>(null);

  const url = BASE_URL + path;

  useEffect(() => {
    const getData = () =>
      axios.get(url).then((response) => {
        setData(response.data);
      });

    addDelay(getData);
  }, [url]);

  return { data };
}
