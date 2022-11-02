import { createContext, useState } from "react";

export const LoadingContext = createContext();
export const ContextoProvidex = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const data = { isLoading, setLoading };
  return (
    <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
  );
};
