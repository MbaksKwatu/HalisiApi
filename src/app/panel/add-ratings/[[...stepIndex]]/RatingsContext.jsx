import React, { createContext, useContext, useState } from 'react';

const RatingsContext = createContext();

export const useRatings = () => {
  return useContext(RatingsContext);
};

export const RatingsProvider = ({ children }) => {
  const [ratings, setRatings] = useState({});

  const handleRatingChange = (id, score, comment) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: { score, comment },
    }));
  };

  return (
    <RatingsContext.Provider value={{ ratings, handleRatingChange }}>
      {children}
    </RatingsContext.Provider>
  );
};
