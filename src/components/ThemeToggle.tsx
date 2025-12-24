import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
        <Sun size={18} />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground 
                 hover:text-foreground hover:border-primary/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="animate-scale-in" />
      ) : (
        <Moon size={18} className="animate-scale-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
