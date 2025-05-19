import { useState } from "react";

enum Theme {
    light,
    dark
}

export default function useTheme() {
    let [theme, setTheme] = useState<Theme>(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.dark : Theme.light
    );
    return [theme, setTheme];
}