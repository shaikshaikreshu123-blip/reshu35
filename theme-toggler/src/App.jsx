import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Theme Toggler</h1>

        <p>
          Toggle between light and dark themes with persistent storage.
        </p>

        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;