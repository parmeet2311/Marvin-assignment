import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function Framer({
  children,
  entrance,
  delay,
  containerStyle,
  style,
  className,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      style={{containerStyle} }
      className={`overflow-hidden  h-full  min-h-fit ${className}`}
      ref={ref}
    >
      <motion.div
        style={{
          ...style,
          height: "100%",
          width: "100%",
          transform: isInView
            ? "scale(1)"
            : entrance === "left"
            ? "translateX(-200px)"
            : entrance === "right"
            ? "translateX(200px)"
            : entrance === "top"
            ? "translateY(-200px)"
            : entrance === "bottom"
            ? "translateY(200px)"
            : "",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
          transitionDelay: isInView ? (delay ? delay : "0.3s") : "0s", // Add a delay of 0.5s when entering the viewport
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
