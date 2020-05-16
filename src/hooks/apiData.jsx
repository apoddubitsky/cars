// libraries
import { useCallback, useEffect, useState } from 'react';

const useApiData = (apiRequest, id) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = useCallback(async () => {
    if (id) {
      setApiData([]);
    }
    try {
      const data = await apiRequest(id);
      setApiData(data);
    } catch (e) {
      console.log(e);
    }
  }, [apiRequest, id]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [fetchData, id]);

  return apiData;
};

export default useApiData;
