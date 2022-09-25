import { useState, useEffect, useRef } from "react";

import API from "../API"; //api fetch

const initioalState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async (page, searchTerm = "") => {
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
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMovie(1);
  }, []);
  return {
    state,
    loading,
    error,
  };
};
