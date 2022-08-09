import {useEffect, useState} from 'react';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0OTMsInVzZXJuYW1lIjoiNjM5NTMyMjUwNSIsImV4cCI6MTY2MjUyOTYyMCwicGhvbmVfbnVtYmVyIjoiNjM5NTMyMjUwNSJ9.R23_7Du5gQEJUTlk7Ix8-Nt5pOECpZnMosOwhh3a498';

const useApi = (url, method, authorization) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = authorization
      ? {
          method: method,
          headers: myHeaders,
          redirect: 'follow',
        }
      : {
          method: method,
          redirect: 'follow',
        };
    fetch(url, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {loading, data};
};

export default useApi;
