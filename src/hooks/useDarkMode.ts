import { useEffect } from "react"
import useMediaQuery from "./useMediaQueries";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const preferDarkMode = useMediaQuery({ queries: ['(prefers-color-scheme: dark)'], values: [true], defaultValue: false });

  const [enabled, setEnabled] = useLocalStorage('dark-mode', preferDarkMode);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;