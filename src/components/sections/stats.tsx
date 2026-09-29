"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { STATS } from "@/constants/content";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  React.useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative -mt-10 sm:-mt-14" aria-label="Indicadores da trajetória">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="flex h-full flex-col items-start gap-1 bg-background/95 backdrop-blur-sm">
                <span className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm leading-snug text-ink-500 dark:text-mist-200/70">
                  {stat.label}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
