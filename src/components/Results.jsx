import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useStateContext } from "../contexts/StateContextProvider";
import Loading from "./Loading";
export const Results = () => {
  const { results, getResults, isLoading, searhTerm } = useStateContext();
  const location = useLocation();
  if (isLoading) return <Loading />;
  return <div>Results</div>;
};
