import { createContext, useContext, useState } from "react";
import axios from "axios";
import conf from "../conf/conf";
const StateContext = createContext();
const baseUrl = "https://www.googleapis.com/customsearch/v1";
// const params = {
//   key: conf.googleSearchApi,
//   cx: conf.googleSearchEngine,
// };
const key = conf.googleSearchApi;
const cx = conf.googleSearchEngine;

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const getResults = async (url) => {
  //   // setLoading(true);
  //   // console.log("key is ", params.key);
  //   // console.log("engine is ", params.cx);
  //   console.log("key is ", key);
  //   console.log("engine is ", cx);
  //   // const res = await fetch(`${baseUrl},${key},${cx},${payload}`);

  //   // const data = await res.json();
  //   // const { data } = await axios
  //   //   .get(baseUrl, key, cx, url)
  //   // .get(baseUrl, {
  //   //   params: { ...params, ...payload },
  //   // })
  //   const { data } = await axios
  //     .get(`${baseUrl}?key=${key}&cx=${cx}&url=${url}`)
  //     .then((res) => {
  //       console.log(res);
  //       setResults(res.data.items);
  //     });
  //   // // const { data } = await response.data;
  //   // console.log("result is:", results);
  //   // console.log("data is:", data);
  //   // return data;
  //   // setResults(data);
  //   setLoading(false);
  // };
  const getResults = async (url) => {
    setLoading(true); // Set loading state to true when fetching data
    // console.log("key is ", key);
    // console.log("engine is ", cx);

    try {
      const { data } = await axios.get(baseUrl, {
        params: {
          key: key,
          cx: cx,
          q: url, // Assuming `url` contains the search query
        },
      });

      console.log("data is:", data);
      // console.log({ type, data });

      // if (type.includes("/news")) {
      //   return data.entries;
      // } else if (type.includes("/image")) {
      //   return data.image_results;
      // } else {
      //   return data.results;
      // }
      // setResults(data.items); // Assuming 'items' contains the search results
      let fetchedData;
      if (url.includes("/news")) {
        fetchedData = data.entries;
      } else if (url.includes("/image")) {
        fetchedData = data.image_results;
      } else {
        fetchedData = data.results;
      }

      setResults(fetchedData); // Update results state with fetched data
      return fetchedData;
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false); // Set loading state to false when fetching is done (whether successful or not)
    }
  };

  return (
    <StateContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
// AIzaSyC50iP_l94Bf6m892JpJ3GjyFYtYk0PdBc
