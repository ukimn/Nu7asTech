import { createContext, useContext, useState } from "react";

interface themeContextInterface{
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const themeContext = createContext<themeContextInterface | null>(null);

interface ThemeProviderInterface{
    children: React.ReactNode;
}

export function ThemeProvider({children}: ThemeProviderInterface){
    const [theme, setTheme] = useState<boolean>(false);

    return(
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(themeContext);

    if(!context){
        throw new Error("We have an error here plz help!");
    }

    return context;
}