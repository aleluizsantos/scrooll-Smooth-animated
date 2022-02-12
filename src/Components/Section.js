import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export default function Section({
  dataAos = "fade-right",
  title,
  subtitle,
  dark,
  id,
}) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-out-cubic",
    });
  }, []);
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div data-aos="fade-left">
          <h1>{title}</h1>
        </div>
        <div data-aos={dataAos}>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
