// import React, { useState, useEffect } from "react";
import useSWR from "swr";
// import axios from "axios";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
const Quotes = () => {
  const { data, error } = useSWR("http://api.quotable.io/random", fetcher, {
    suspense: true,
  });

  if (error) {
    <h3>There was an Error !</h3>;
  }

  // First Away to get Data from API  without Axios

  // useEffect(() => {
  //   const fetchQuote = async () => {
  //     const res = await fetch("http://api.quotable.io/random");
  //     const data = await res.json();
  //     setQuotes(data);
  //   };

  //   fetchQuote();
  // }, []);
  // Secound Away to get Data from API  with Axios
  // useEffect(() => {
  //   const fetchQuote = async () => {
  //     const res = await axios.get("http://api.quotable.io/random");

  //     setQuotes(res.data);
  //   };

  //   fetchQuote();
  // }, []);

  return (
    <div>
      <h2>Get Quotes from API</h2>
      <div>{data.content}</div>
    </div>
  );
};

export default Quotes;
