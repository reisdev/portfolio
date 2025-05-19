import { createContext, Dispatch, SetStateAction } from "react";

enum Theme {
    light,
    dark
}

const ThemeContext = createContext<{theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>}>({ theme: Theme.light, setTheme: () => {}});

export { Theme };
export default ThemeContext;

