import { useEffect, useState } from "react";
import axios from "axios";

export function useSearchItem(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

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
      cancelToken: new axios.CancelToken((c) => cancel = c), 
    }).then((res) => {
      console.log('response', res.data);
      setData(res.data);
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
  }, [url]);

  return {
    loading,
    error,
    data,
  }
}