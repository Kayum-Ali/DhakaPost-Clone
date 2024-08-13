import { useEffect, useState } from "react";

const useThemeMode = () => {
    const [mode,setMode] = useState("light");
    const changeTheme = () => {
        const html = document.documentElement;

        if(mode === "light"){
            html.classList.remove("light");
            html.classList.add("dark");
            setMode("dark");
            localStorage.setItem("mode", "dark")
        }
        else{
            html.classList.remove("dark");
            html.classList.add("light");
            setMode("light");
            localStorage.setItem("mode", "light")
        }
    }

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light";
        const html = document.documentElement;
        html.classList.add(currentMode)
        setMode(currentMode)
    
    },[])
    return   {changeTheme, mode};
}
export default useThemeMode