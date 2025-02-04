import { createContext, useState } from "react";


const MyContext = createContext();

const MyProvider = ({ children }) => {
     
    const [bgColor, setBgColor] = useState("")

    return (
        <MyContext.Provider value={{bgColor, setBgColor}}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext , MyProvider }