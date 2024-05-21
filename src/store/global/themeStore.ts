import { defineStore } from "pinia";
import { computed, ref } from "vue";

const LOCAL_STORAGE_KEY = "theme";
const DEFAULT_THEME = "dark";

export const useThemeStore = defineStore("theme", () => {
    const theme = ref<string>(DEFAULT_THEME);
    const isDarkMode = computed<boolean>(() => theme.value === "dark");

    // Function to apply the theme to the document body
    function applyTheme(th: string) {
        if (th === "dark") {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    // Function to set the theme and save it to localStorage
    function setTheme(th: string) {
        const themeSelected = ['dark', 'light'].includes(th) ? th : DEFAULT_THEME;
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, themeSelected);
        } catch (e) {
            console.error("Failed to save theme to localStorage:", e);
        }
        theme.value = themeSelected;
        applyTheme(themeSelected);
    }

    // Function to initialize the theme from localStorage
    function initializeTheme() {
        let storedTheme: string | null = null;
        try {
            storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
        } catch (e) {
            console.error("Failed to retrieve theme from localStorage:", e);
        }
        const initialTheme = ['dark', 'light'].includes(storedTheme) ? storedTheme : DEFAULT_THEME;
        
        theme.value = initialTheme;
        applyTheme(initialTheme);
    }

    // Automatically initialize the theme when the store is created
    initializeTheme();

    return { theme, isDarkMode, setTheme, initializeTheme };
});
