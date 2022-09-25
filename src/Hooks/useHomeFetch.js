import { useState, useEffect, useRef } from "react";

import API from "../API"; //api fetch

const initioalState = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initioalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => {
        return {
          ...movies,
          results:
            page > 1
              ? [...prev.results, ...movies.results]
              : [...movies.results],
        };
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  //initial fetch and search
  useEffect(() => {
    setState(initioalState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);
  return {
    state,
    loading,
    error,
    setSearchTerm,
  };
};
