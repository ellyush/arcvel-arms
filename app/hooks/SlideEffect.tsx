import { useEffect } from "react";

export default function SlideEffect() {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-x-50");
            entry.target.classList.add(
              "opacity-100",
              "translate-x-0",
              "transition-all",
              "duration-700"
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".slide-left");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-50");
            entry.target.classList.add(
              "opacity-100",
              "translate-x-0",
              "transition-all",
              "duration-700"
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
