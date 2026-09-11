import { createContext, useEffect } from "react";
import useGetAllBook from "../hooks/useGetAllBook";

export const DatosBookContext = createContext();
export default function BookContext({ children }) {
    const dataBook = useGetAllBook() || [];
    return (
        <>
            <DatosBookContext.Provider value={{dataBook}}>
                {children}
            </DatosBookContext.Provider>
        </>
    )

}