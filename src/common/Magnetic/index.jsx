"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Magnetic = ({ children }) => { 
  const magnetic = useRef(null);

  useEffect(() => {
    // If you want to include children as a dependency, add it here:
    // }, [children]);
    console.log(children);
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", onMouseMove);
    magnetic.current.addEventListener("mouseleave", onMouseLeave);

    return () => {
      magnetic.current.removeEventListener("mousemove", onMouseMove);
      magnetic.current.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []); // or [children] if children can change

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
