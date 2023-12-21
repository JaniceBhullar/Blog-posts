import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [response, setResponse] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    // const source = axios.CancelToken.source();
    const controller = new AbortController();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, {
          // cancelToken: source.token
          signal: controller.signal,
        });
        if (isMounted) {
          setResponse(res.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setResponse([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      // source.cancel();
      controller.abort();
    };
    return cleanUp;
  }, [dataUrl]);

  return { response, fetchError, isLoading };
};

export default useAxiosFetch;

// export default useAxiosFetch;

// We can also cancel or abort a request when we no longer require the
//     requested data for example, when the user navigates from the current page to another page.

// As we can see in this example, we are first creating a controller object using the AbortController() constructor,
//    then storing a reference to its associated AbortSignal object using the signal property of the AbortController.

// When the axios request is initiated, we pass in the AbortSignal as an option inside the request’s
//      options object: {signal: abortSignal}. This associates the signal and controller with the axios request
//      and allows us to abort the request by calling the abort() method on the controller.
