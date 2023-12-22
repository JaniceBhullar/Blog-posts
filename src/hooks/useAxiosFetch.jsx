import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5174";

export default function useAxiosFetch() {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData();

    const cleanUp = () => {
      console.log("clean up function");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, []);

  return { data, fetchError, isLoading };
}

// We can also cancel or abort a request when we no longer require the
//     requested data for example, when the user navigates from the current page to another page.

// As we can see in this example, we are first creating a controller object using the AbortController() constructor,
//    then storing a reference to its associated AbortSignal object using the signal property of the AbortController.

// When the axios request is initiated, we pass in the AbortSignal as an option inside the request’s
//      options object: {signal: abortSignal}. This associates the signal and controller with the axios request
//      and allows us to abort the request by calling the abort() method on the controller.
