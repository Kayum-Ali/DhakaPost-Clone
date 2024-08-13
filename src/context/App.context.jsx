import React, {
    createContext,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";

export const DarkContext = createContext({});

const AppContext = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const changeTheme = (value) => {
        setIsDark(value);
    };

    return (
        <DarkContext.Provider value={{ dark: [isDark, changeTheme] }}>
            {children}
        </DarkContext.Provider>
    );
};

export default AppContext;
