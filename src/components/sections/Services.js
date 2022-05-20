import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  
  {
    id: 1,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "No te quedes afuera de esta era digital y pedi tu sitio web.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-1.svg",
    title: "Data analytics",
    content:
      "Visualiza los datos de real importancia y transmitilos de una forma clara y simple.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/service-3.png",
    title: "Data scientist",
    content:
      "Implementaciones de modelos predictivos mediante IA.",
    color: "#6CE56C",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Servicios" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Buscas un trabajo personalizado?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            para contactarme! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
