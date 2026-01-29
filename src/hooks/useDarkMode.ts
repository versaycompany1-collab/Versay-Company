"use client";

import { useState, useEffect } from "react";

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialMode = savedMode ? savedMode === "true" : prefersDark;
        setIsDarkMode(initialMode);
        document.documentElement.classList.toggle("dark", initialMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("darkMode", String(newMode));
        document.documentElement.classList.toggle("dark", newMode);
    };

    return { isDarkMode, toggleDarkMode };
}
