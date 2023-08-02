import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      await makeApiCall();
    };
    fetchData();

    return () => {};
  }, [endpoint]);

  return { data };
};

export default useFetch;
