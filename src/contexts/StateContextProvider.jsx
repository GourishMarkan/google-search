import { createContext, useContext, useState } from "react";
const StateContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": "9624a8cac4mshbeefc64d6d66f8dp17531bjsn0c5a77d9d34e",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
