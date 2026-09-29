"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StrokeMotif } from "@/components/ui/stroke-motif";

export function LoadingScreen() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StrokeMotif className="h-16 w-10 text-brand-500" />
          </motion.div>
          <div className="h-0.5 w-32 overflow-hidden rounded-full bg-surface-alt">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full bg-gradient-to-r from-brand-500 to-accent-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
