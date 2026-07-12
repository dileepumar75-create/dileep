import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-primary/40 animate-glow-pulse" />
            <div className="relative w-24 h-24 rounded-full border-2 border-primary/30 border-t-primary animate-spin-slow flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-accent/30 border-b-accent animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "3s" }} />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-display text-sm tracking-[0.4em] text-gradient whitespace-nowrap"
            >
              DILEEP.KUMAR
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
