import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Lic. Finanzas",
    years: "2022 - Actualidad",
    content:
      "",
  },
  {
    id: 2,
    title: "Data Science",
    years: "2021 - 2022",
    content:
      "Educacion IT.",
  },
  {
    id: 3,
    title: "Tecnicatura en Informatica personal y profesional",
    years: "2013 - 2019",
    content:
      "Colegio Florentino Ameghino.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Front-End Developer",
    years: "2020 - Actualidad",
    content:
      "Realizo paginas y aplicaciones web a solicitud de los clientes.",
  },
  {
    id: 2,
    title: "Help Desk",
    years: "2020 - 2021",
    content:
      "Trabaje en BingoBegui dando Soporte Técnico en las diferentes áreas del Bingo, configurando entornos de desarrollo en AWS(Amazon Web Services), creando BackUps en los servidores, y haciendo un mantenimiento de las redes.",
  },
  {
    id: 3,
    title: "Analista de Datos",
    years: "2021 - Actualidad",
    content:
      "Actualmente estoy implementando modelos de datos en los diferentes sectores del bingo.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiencia" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
