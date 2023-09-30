import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const DataContext = createContext();

// Create a provider component
export function DataProvider({ children, initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Optionally, you can fetch data from the API here if initialData is empty
    // This would be useful if you want to fetch data only when initialData is not provided.
    // fetchDataFromApi().then((response) => {
    //   setData(response);
    // });
  }, [initialData]);
  useEffect(() => {
    console.log("Data inside DataProvider:", data);
  }, [data]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// Custom hook to access the data
function useData() {
  return useContext(DataContext);
}

export { DataProvider, useData };
