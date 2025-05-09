import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Ir al inicio"
      >
        <FaArrowUp className="scroll-to-top-icon" />
      </button>
    )
  );
};

export default ScrollToTopButton;
