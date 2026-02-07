"use client";

import { useState, useLayoutEffect, useCallback } from "react";

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Return false for SSR, will be updated on client
        if (typeof window === "undefined") return false;
        const savedMode = localStorage.getItem("darkMode");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return savedMode ? savedMode === "true" : prefersDark;
    });

    useLayoutEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("darkMode", String(newMode));
            return newMode;
        });
    }, []);

    return { isDarkMode, toggleDarkMode };
}

