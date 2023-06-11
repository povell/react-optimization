import { useEffect, useState } from "react";
import axios from "axios";

export function useSearchCategories(url, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [url]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => cancel = c), 
    }).then((res) => {
      console.log('response', res.data);
      setData(prev => {
        return [...new Set([...prev, ...res.data.results])];
      });
      setHasMore(res.data.info.next ? true : false);
      setLoading(false);
    }).catch(e => {
      setLoading(false);
      if (axios.isCancel) {
        return;
      }
      console.error(e);
      setError(true);
    })

    return () => cancel();
  }, [url, pageNumber]);

  return {
    loading,
    error,
    data,
    hasMore,
  }
}