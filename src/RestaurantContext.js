import React, { createContext, useContext } from "react"

const RestContext = createContext();

function RestaurantContext({children,value}){
  return <RestContext.Provider value={value} >{children}</RestContext.Provider>
}

export default RestaurantContext;
export const useRestContextValue = ()=> useContext(RestContext);
